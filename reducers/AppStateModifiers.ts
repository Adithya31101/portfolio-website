export enum AppState { minimised, maximised, initial, fullScreen };

export enum ControlButtonOps { CLOSE, MINIMIZE, MAXIMIZE, INITIALIZE }

export interface App {
   id: number,
   name: string,
   active: boolean,
   state: AppState
};

export const OPEN_APP = (state: App[], appName: string) => {
   let newApp: boolean = state.findIndex(app => app.name === appName) === -1;
   if(newApp){
      const newAppState = state;
      newAppState.push({
         id: state.length,
         name: appName,
         active: true,
         state: AppState.initial
      });
      return newAppState;
   } else {
      return state;
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
         break;
      }
      case ControlButtonOps.MAXIMIZE: {
         apps[i].state = AppState.maximised;
         break;
      }
   }
   return apps;
}