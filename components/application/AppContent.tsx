

const AppContent = ({ name }) => {

   const componentSwitcher = () => {
      switch(name){
         case "Curriculum Vitae": {
            return <h1 style={{width: '50rem', height: '30rem'}}>{name}</h1>;
         }
         case "Blogs": {
            return <h1>{name}</h1>;
         }
         default: {
            return <h1>Default</h1>
         }
      }
   }
   
   return (
      <>
         {componentSwitcher()}
      </>
   )
}

export default AppContent
