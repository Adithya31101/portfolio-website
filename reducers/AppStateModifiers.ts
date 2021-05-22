import isMobile from '../components/hooks/isMobile';
import { App, AppState, ControlButtonOps } from '../components/types';


export const OPEN_APP = (state: App[], appName: string, appIcon: string) => {
   let appIndex: number = state.findIndex(app => app.name === appName);
   const newAppState = state;
   if(appIndex === -1){
      newAppState.forEach(app => app.active = false);
      newAppState.push({
         id: state.length,
         name: appName,
         active: true,
         state: isMobile()? AppState.maximised : AppState.initial,
         icon: appIcon,
      });
      return newAppState;
   } else {
      newAppState[appIndex].active = true;
      newAppState[appIndex].state = AppState.maximised;
      return newAppState;
   }
}

export const HANDLE_CONTROL_CLICK = (apps: App[], appName: string, operation: ControlButtonOps) => {
   const i: number = apps.findIndex(app => app.name === appName);
   if (i === -1) return apps;
   switch(operation){
      case ControlButtonOps.CLOSE: {
         if(apps.length === 1) return [];
         return apps.filter(app => app.name !== appName);
      }
      case ControlButtonOps.INITIALIZE: {
         apps[i].state = AppState.initial;
         break;
      }
      case ControlButtonOps.MINIMIZE: {
         apps[i].state = AppState.minimised;
         apps[i].active = false;
         break;
      }
      case ControlButtonOps.MAXIMIZE: {
         apps[i].active = true;
         apps[i].state = AppState.maximised;
         break;
      }
   }
   return apps;
}

export const UPDATE_ACTIVE = (apps: App[], appName: string) => {
   const newAppState = apps;
   newAppState.forEach(app => {
      if(appName === app.name) app.active = true;
      else app.active = false;
   });
   console.log(newAppState);
   return newAppState;
}