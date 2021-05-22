import { FunctionComponent, memo } from 'react';
import styled, { css } from 'styled-components';

const AppContainer = styled.div<{dock: boolean, active: boolean}>`
   width: ${props => props.dock? '6rem' : '7rem'};
   padding: ${props => props.dock? '7px' : '1rem'};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   border-radius: 3px;
   transition: background-color 50ms ease-in-out;
   ${props => (props.active) && css`
      &:after {
         content: '';
         width: 5px;
         height: 5px;
         border-radius: 50%;
         background-color: rgb(0, 255, 194);
         box-shadow: rgba(0, 255, 194, 0.8) 0px 5px 15px;
      }
   `}
   &:hover {
      background-color: rgba(245, 245, 245, 0.178)
   }
   
   @media only screen and (max-width: 480px){
      width: ${props => props.dock? '6rem' : '5rem'};
   }
`;

const IconPlaceholder = styled.img<{dock: boolean}>`
   width: ${props => props.dock? '3rem' : '4rem'};
   height: ${props => props.dock? '3rem' : '4rem'};
   margin-bottom: ${props => props.dock? '0' : '10px'};
   filter: ${props => props.theme.mode === 'light'? 'invert(100%)' : 'none'};
   /* &:after {
      content: '';
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: rgb(0, 255, 194);
      box-shadow: rgba(0, 255, 194, 0.8) 0px 5px 15px;
   } */

`;

const IconText = styled.span`
   color: ${props => props.theme.fg};
   user-select: none;
   text-overflow: clip;
   overflow: hidden;
   white-space: nowrap;
   width: 4rem;
`;

interface Props {
   name: string, 
   icon: string,
   dock: boolean,
   active?: boolean,
} 

const App:FunctionComponent<Props> = ({ name, dock, icon, active, ...props }): JSX.Element => {
   return (
      <AppContainer title={name} dock={dock} active={active}>
         <IconPlaceholder src={icon} alt={name} dock={dock} />
         {!dock && <IconText>{name}</IconText>}
      </AppContainer>
   )
}

export default memo(App);