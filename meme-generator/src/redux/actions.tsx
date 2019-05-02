import {GET_TEMPLATES} from "./constants";
import {Dispatch} from "redux";
export interface GetTemplates{
  type: GET_TEMPLATES,
  payload: string[]
}

export type AppAction = GetTemplates;
export const getTemplates = ()=>(dispatch:any)=> {
    fetch("https://api.imgflip.com/get_memes").then(response=>response.json()).then(data=>{
      const templates = data.data.memes.map((meme:any)=>meme.id);
      dispatch({type:GET_TEMPLATES,payload:templates});
    });
}
