import { memo } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
   width: 7rem;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   border-radius: 3px;
   transition: background-color 50ms ease-in-out;

   :hover {
      background-color: rgba(245, 245, 245, 0.178)
   }
   @media only screen and (max-width: 480px){
      width: 5rem;
   }
`;

const IconPlaceholder = styled.img`
   width: 4rem;
   height: 4rem;
   margin-bottom: 10px;
   filter: ${props => props.theme.mode === 'light'? 'invert(100%)' : 'none'};
`;

const IconText = styled.span`
   color: ${props => props.theme.fg};
   user-select: none;
   text-overflow: clip;
   overflow: hidden;
   white-space: nowrap;
   width: 4rem;
`;


const App = ({ name, icon, ...props }): JSX.Element => {
   return (
      <AppContainer title={name}>
         <IconPlaceholder src={icon} alt={name}/>
         <IconText>{name}</IconText>
      </AppContainer>
   )
}

export default memo(App);