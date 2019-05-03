import React from 'react';
import {getTemplates,getDesignView,getMemes,AppAction,MemeTemplate} from "./redux/actions";
import {AppState,ClientState} from "./redux/reducers";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import './App.css';

import Form from "./components/Form";

interface Props{
  onGetTemplates():MemeTemplate[],
  onGetDesignView():void,
  onGetMemes(templates:MemeTemplate[],name:string):string[],
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
    onGetDesignView:()=>dispatch(getDesignView()),
    onGetMemes:(templates:MemeTemplate[],name:string)=>dispatch(getMemes(templates,name))

  }

}


const App = (props:Props)=> {

    const {templates,hasTemplates,onGetTemplates,onGetDesignView,view,onGetMemes,memes} = props;
    const startDesigning = (name:string) =>{
      onGetDesignView();
      onGetMemes(templates,name);


    }
    if(!hasTemplates){
      onGetTemplates();
    }


    return (
      <div className="App">
        {

          view==="design"?
          <h1>Design</h1>
          :
          <Form click={startDesigning}/>
        }

      </div>
    );




}


export default connect(mapStateToProps,mapDispatchToProps)(App);
