import React from 'react';
import {getTemplates,AppAction} from "./redux/actions";
import {AppState,ClientState} from "./redux/reducers";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import './App.css';

import Form from "./components/Form";

interface Props{
  onGetTemplates():string[],
  templates:string[],
  hasTemplates:boolean
}

interface AppActionDispatch{
  (action:any):any
}

const mapStateToProps = (state:AppState):ClientState=>{
  return {
    templates : state.processAction.templates,
    hasTemplates : state.processAction.hasTemplates
  }
}
const mapDispatchToProps=(dispatch:AppActionDispatch)=>{

  return{
    onGetTemplates:()=>dispatch(getTemplates())

  }

}


const App = (props:Props)=> {
    const {templates,hasTemplates,onGetTemplates} = props;
    if(!hasTemplates){
      onGetTemplates();
    }


    return (
      <div className="App">
        <Form/>
      </div>
    );




}


export default connect(mapStateToProps,mapDispatchToProps)(App);
