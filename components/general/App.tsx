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
      background-color: rgba(245, 245, 245, 0.411)
   }
   @media only screen and (max-width: 480px){
      width: 5rem;
   }
`;

const IconPlaceholder = styled.div`
   width: 2.5rem;
   height: 2.5rem;
   background-color: whitesmoke;
   margin-bottom: 10px;
`;

const IconText = styled.span`
   color: #fff;
   user-select: none;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
   /* height: 3ch; */
`;


const App = ({ name, icon, ...props }): JSX.Element => {
   return (
      <AppContainer>
         <IconPlaceholder />
         <IconText>{name}</IconText>
      </AppContainer>
   )
}

export default memo(App);