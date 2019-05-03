import {GET_TEMPLATES,GET_MEMES} from "./constants";
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

      case GET_MEMES:

        state.memes.push(action.payload);
        if(action.stop){
          return {...state,view:"design"}
        }
        return {...state};
      default:
        return state;
    }
}
