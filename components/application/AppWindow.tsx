import { memo, MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import { AppState, ControlButtonOps, HANDLE_CONTROL_CLICK } from '../../reducers/AppStateModifiers';
import { WindowContainer, TitleBar, Button } from '../styles/application';
import AppContent from './AppContent';

interface Props {
  left: string,
  name: string,
  state: number,
  setApps: any
}

const AppWindow = memo(({left, name, state, setApps}: Props, ...props) => {
   const appWindowRef: MutableRefObject<HTMLDivElement> = useRef();
   let clickCoordinates = {
      x: null,
      y: null,
   }

   const handleMouseMove = (e) => {
         let shiftY = e.clientY - clickCoordinates.y - 40;
         let shiftX = e.clientX - clickCoordinates.x;
         appWindowRef.current.style.top = `${shiftY}px`;
         appWindowRef.current.style.left = `${shiftX}px`;
      return false;
   }

   const handleDragStart = (e) => {
      if(appWindowRef){
         clickCoordinates = {x: e.nativeEvent.layerX, y: e.nativeEvent.layerY};
         e.currentTarget.style.cursor = 'move';
         document.addEventListener('mousemove',handleMouseMove);
      }
   }

   const handleDragEnd: MouseEventHandler<HTMLDivElement> = (e) => {
      document.removeEventListener('mousemove', handleMouseMove);
      e.currentTarget.style.cursor = 'default';
   }

   const handleControlButtonClick = (operation: ControlButtonOps) => {
      setApps(prev => [...HANDLE_CONTROL_CLICK(prev, name, operation)]);
   }

   return (
      <WindowContainer ref={appWindowRef} appstate={state} {...props} left={left}>
         <TitleBar onMouseDown={handleDragStart} onMouseUp={handleDragEnd}>
            <div>
               <Button color='#FF5F57' onClick={() => handleControlButtonClick(ControlButtonOps.CLOSE)}>
                  <img src="/icons/close.svg" alt="close" />
               </Button>
               <Button color='#FFBD31' onClick={() => handleControlButtonClick(ControlButtonOps.MINIMIZE)}>
                  <img style={{marginTop: '10px'}} src="/icons/minimize.svg" alt="minimize" />
               </Button>
               <Button color='#1AD94C' onClick={() => {
                  if(state === AppState.maximised) handleControlButtonClick(ControlButtonOps.INITIALIZE);
                  else handleControlButtonClick(ControlButtonOps.MAXIMIZE);
               }}>
                  <img style={{transform: 'rotate(45deg)'}} src="/icons/maximize.svg" alt="maximize" />
               </Button>
            </div>
            <span>{name}</span>
         </TitleBar>
         <AppContent name={name}></AppContent>
      </WindowContainer>
   );
});

export default AppWindow;
