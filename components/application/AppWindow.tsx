import { useContext } from 'react';
import { AppsContext } from '../../pages';
import { WindowContainer, TitleBar, Button } from '../styles/application';

interface Props {
  left: string,
  name: string,
  state: number
}

const AppWindow = ({left, name, state}: Props, ...props) => {
   const {_, dispatch} = useContext(AppsContext);
   return (
      <WindowContainer appstate={state} {...props} left={left}>
         <TitleBar>
            <div>
               <Button color='#FF5F57'>
                  <img src="/icons/close.svg" alt="close" />
               </Button>
               <Button color='#FFBD31'>
                  <img style={{marginTop: '10px'}} src="/icons/minimize.svg" alt="minimize" />
               </Button>
               <Button color='#1AD94C'>
                  <img style={{transform: 'rotate(45deg)'}} src="/icons/maximize.svg" alt="maximize" />
               </Button>
            </div>
            <span>{name}</span>
         </TitleBar>
      </WindowContainer>
   )
}

export default AppWindow
