import React, { Component } from 'react';
import {getTemplates,AppAction} from "./redux/actions";
import {Dispatch} from "redux";
import {connect} from "react-redux"
import './App.css';


const mapStateToProps = (state:any)=>{
  return {
    templates : state.processAction.templates
  }
}
const mapDispatchToProps=(dispatch:any)=>{
  return{
    onGetTemplates:()=>dispatch(getTemplates())

  }

}

const App = (props:any)=> {


    props.onGetTemplates();
    const {templates} = props;
    return (
      <div className="App">

      </div>
    );




}


export default connect(mapStateToProps,mapDispatchToProps)(App);
