import {GET_TEMPLATES, GET_MEMES} from "./constants";
import {Dispatch} from "redux";


export interface MemeTemplate{
  id:string
}
export interface GetTemplates{
  type: GET_TEMPLATES,
  payload: MemeTemplate[]
}



export interface GetMeme{
  type: GET_MEMES,
  payload: string,
  stop:boolean
}

export type AppAction = GetTemplates | GetMeme;
export const getTemplates = ()=>(dispatch:Dispatch<GetTemplates>)=> {
    fetch("https://api.imgflip.com/get_memes").then(response=>response.json()).then(data=>{
      let templates = data.data.memes.filter((meme:any)=>{

        return meme.box_count === 2;
      });

      templates = templates.map((meme:any)=>{
        return {id:meme.id}
      });
      dispatch({type:GET_TEMPLATES,payload:templates});
    });
}




export const getMemes = (templates:MemeTemplate[],name:string,name2:string)=>(dispatch:Dispatch<GetMeme>) => {

  interface Params{
    [key:string]:string;
  }
  for(let i=0;i<templates.length;i++){
    const id = templates[i].id;


    let params:Params = {
      template_id:id,
      text0:name,
      text1:name2,
      username:"YOUR_IMAGEFLIP_USERNAME",
      password:"YOUR_IMAGEFLIP_PASSWORD"

    };

    const bodyParams = Object.keys(params).map(key => {
 return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');

    fetch("https://api.imgflip.com/caption_image",{headers:{'Content-Type': "application/x-www-form-urlencoded"},method:"POST",body:bodyParams}).then(response=>response.json())
    .then(data=>{

      dispatch({type:GET_MEMES,payload:data.data.url,stop:i===templates.length-1});

    });
  };
}
