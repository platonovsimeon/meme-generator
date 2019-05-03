import React from 'react';
import {getTemplates,getMemes,AppAction,MemeTemplate} from "./redux/actions";
import {AppState,ClientState} from "./redux/reducers";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import './App.css';
import Form from "./components/Form";
import Design from "./components/Design";

interface Props{
  onGetTemplates():MemeTemplate[],
  onGetMemes(templates:MemeTemplate[],name:string,name2:string):string[],
  templates:MemeTemplate[],
  hasTemplates:boolean,
  view:string,
  memes:string[]
}

interface AppActionDispatch{
  (action:any):any
}

const mapStateToProps = (state:AppState):ClientState=>{
  return {
    templates : state.processAction.templates,
    hasTemplates : state.processAction.hasTemplates,
    view: state.processAction.view,
    memes: state.processAction.memes
  }
}
const mapDispatchToProps=(dispatch:AppActionDispatch)=>{

  return{
    onGetTemplates:()=>dispatch(getTemplates()),
    onGetMemes:(templates:MemeTemplate[],name:string,name2:string)=>dispatch(getMemes(templates,name,name2))

  }

}


const App = (props:Props)=> {

    const {templates,hasTemplates,onGetTemplates,view,onGetMemes,memes} = props;
    const startDesigning = (name:string,name2:string) =>{
      onGetMemes(templates,name,name2);




    }
    if(!hasTemplates){
      onGetTemplates();
    }


    return (
      <div className="App">
        {

          view==="design"?

          <Design memes={memes}/>

          :

          <Form  click={startDesigning}/>

        }

      </div>
    );




}


export default connect(mapStateToProps,mapDispatchToProps)(App);
