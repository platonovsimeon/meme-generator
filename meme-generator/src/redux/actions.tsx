import {GET_TEMPLATES, GET_DESIGN_VIEW, GET_MEMES} from "./constants";
import {Dispatch} from "redux";
import {generateMemeArray} from "../utils";

export interface MemeTemplate{
  id:string
}
export interface GetTemplates{
  type: GET_TEMPLATES,
  payload: MemeTemplate[]
}

export interface GetDesignView{
  type: GET_DESIGN_VIEW
}

export interface GetMemes{
  type: GET_MEMES,
  payload: string[]
}

export type AppAction = GetTemplates | GetDesignView | GetMemes;
export const getTemplates = ()=>(dispatch:Dispatch<GetTemplates>)=> {
    fetch("https://api.imgflip.com/get_memes").then(response=>response.json()).then(data=>{
      const templates = data.data.memes.map((meme:any)=>{
        return {id:meme.id}
      });
      dispatch({type:GET_TEMPLATES,payload:templates});
    });
}

export const getDesignView = ():GetDesignView => ({type:GET_DESIGN_VIEW});


export const getMemes = (templates:MemeTemplate[],name:string):GetMemes => ({
  type: GET_MEMES,
  payload:generateMemeArray(templates,name)
});
