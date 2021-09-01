import { memo } from "react";
import Connect from '../AppComponents/Connect';


const AppContent = ({ name }) => {

   const componentSwitcher = () => {
      console.log("Reloaded AppContent");
      switch(name){
         case "About": {
            return <h1 style={{width: '50rem', height: '30rem'}}>{name}</h1>;
         }
         case "Skillsets": {
            return <h1>{name}</h1>;
         }
         case "Timeline": {
            return <h1>{name}</h1>;
         }
         case "Interests": {
            return <h1>{name}</h1>;
         }
         case "Articles": {
            return <h1>{name}</h1>;
         }
         case "Projects": {
            return <h1>{name}</h1>;
         }
         case "Connect": {
            return <Connect />;
         }
         default: {
            return;
         }
      }
   }
   
   return (
      <>
         {componentSwitcher()}
      </>
   )
}

export default memo(AppContent);