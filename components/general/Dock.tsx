import { memo } from "react";
import styled from "styled-components";
import { HANDLE_CONTROL_CLICK, UPDATE_ACTIVE } from "../../reducers/AppStateModifiers";
import { ControlButtonOps } from "../types";
import App from './App';

const DockContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   position: absolute;
   
   z-index: 16;
   border: solid 0.5px ${props => props.theme.fg};
   background-color: #a9a9a911;
   bottom: 0.4rem;
   height: 5rem;
   transform: translateX(50%);
   width: 50%;
   overflow-x: scroll;
   border-radius: 5px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   &:-webkit-scrollbar {
    display: none;
   }
   scrollbar-width: none;
   @media screen and (max-width: 768px){
     width: 90%;
     transform: translateX(6%);
     height: 4rem;
     justify-content: flex-start;
   }
`;

const Statusbar = ({ apps, setApps }) => {
  const handleToggleMinimize = (appName: string, active: boolean) => {
    if(active){
      setApps(prev => [...HANDLE_CONTROL_CLICK(prev, appName, ControlButtonOps.MINIMIZE)]);
    } else {
      setApps(prev => [...UPDATE_ACTIVE(prev, appName)]);
      setApps(prev => [...HANDLE_CONTROL_CLICK(prev, appName, ControlButtonOps.MAXIMIZE)]);
    }
  }

  return <DockContainer>
    {
      apps.map(app => (
        <div key={app.id} onClick={() => handleToggleMinimize(app.name, app.active)}>
          <App dock name={app.name} icon={app.icon} active={app.active}/>
        </div>
      ))
    }
  </DockContainer>
};

export default memo(Statusbar);