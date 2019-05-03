import {MemeTemplate} from "./redux/actions";


export const generateMemeArray = (templates:MemeTemplate[],name:string):string[]=>{
    let samples:string[]=[];
    interface Params{
      [key:string]:string;
    }
    for(let i=0;i<templates.length;i++){
      const id = templates[i].id;


      let params:Params = {
        template_id:id,
        text0:name,
        username:"simeonplatonov",
        password:"1234567S"

      };

      const bodyParams = Object.keys(params).map(key => {
   return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
 }).join('&');

      fetch("https://api.imgflip.com/caption_image",{headers:{'Content-Type': "application/x-www-form-urlencoded"},method:"POST",body:bodyParams}).then(response=>response.json())
      .then(data=>{

        samples.push(data);

      });
    };

    return samples;
}
