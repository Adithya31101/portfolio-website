export enum AppState { minimised, maximised, initial, fullScreen };

export enum ControlButtonOps { CLOSE, MINIMIZE, MAXIMIZE, INITIALIZE }

export interface App {
   id: number,
   name: string,
   active: boolean,
   state: AppState,
   icon: string,
};