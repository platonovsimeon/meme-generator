import {GET_TEMPLATES} from "./constants";
import {AppAction} from "./actions";


export interface State{
  templates: string[],
  hasTemplates:boolean
}
const initialState:State ={
  templates:[],
  hasTemplates:false
}
export const processAction = (state=initialState,action:AppAction):State => {
    switch(action.type){
      case GET_TEMPLATES:
        if(state.hasTemplates){
          return state;
        }
        
        return {...state,templates:action.payload, hasTemplates:true};

      default:
        return state;
    }
}
