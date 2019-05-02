import {GET_TEMPLATES} from "./constants";
import {AppAction} from "./actions";


export interface ClientState{
  templates: string[],
  hasTemplates:boolean
}
export interface AppState{
  processAction:ClientState
}
const initialState:ClientState ={
  templates:[],
  hasTemplates:false
}
export const processAction = (state=initialState,action:AppAction):ClientState => {
    switch(action.type){
      case GET_TEMPLATES:
        return {...state,templates:action.payload, hasTemplates:true};

      default:
        return state;
    }
}
