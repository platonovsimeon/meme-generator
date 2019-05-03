import {GET_TEMPLATES,GET_DESIGN_VIEW,GET_MEMES} from "./constants";
import {AppAction,MemeTemplate} from "./actions";


export interface ClientState{
  templates: MemeTemplate[],
  hasTemplates:boolean,
  view: string,
  memes:string[]
}
export interface AppState{
  processAction:ClientState
}
const initialState:ClientState ={
  templates:[],
  hasTemplates:false,
  view: "form",
  memes:[]
}
export const processAction = (state=initialState,action:AppAction):ClientState => {
    switch(action.type){
      case GET_TEMPLATES:
        return {...state,templates:action.payload, hasTemplates:true};
      case GET_DESIGN_VIEW:
        return {...state,view:"design"}
      case GET_MEMES:
        return {...state,memes:action.payload}
      default:
        return state;
    }
}
