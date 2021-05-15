export interface App {
   id: number,
   name: string,
   active: boolean,
   state: AppState
}

export enum AppState { minimised, maximised, initial, fullScreen }

export const initialState: App[] = [];

export const reducer = (state: App[], action: {type: string, payload: string | any}) => {
   if(action.type === "OPEN"){
      let appAlreadyExits: boolean = false;
      state.forEach(app => {
         if(app.name === action.payload){
            appAlreadyExits = true;
         }
      });
      if(!appAlreadyExits){
         const newAppState = state;
         newAppState.push({
            id: state.length,
            name: action.payload,
            active: true,
            state: AppState.initial
         });
         return newAppState;
      } else {
         return state;
      }
   }

   if(action.type === "CLOSE"){
      const newAppState = state.filter(app => app.name !== action.payload);
      console.log(newAppState);
      return newAppState;
   }
};