import { useContext, useEffect } from "react";
import { AppsContext } from "../../pages";
import styled from 'styled-components';
import { App } from '../../reducers/AppReducer';

const AppWindow = styled.div `
   height: 10rem;
   width: 10rem;
   background-color: #fff;
   position: absolute;
   top: 20rem;
`;

function AppSpawn(): JSX.Element {
   //Variable Initialisation
   const {state} = useContext(AppsContext);
   
   // Use Effect :: newAppAddition
   useEffect(() => {
      console.log(state);
   }, [state]);

   return (
      <div>
         {state.map(app => {
            app && <AppWindow style={{left: `'${app.id+10}rem'`}}></AppWindow>
         })}
      </div>
   )
}

export default AppSpawn;
