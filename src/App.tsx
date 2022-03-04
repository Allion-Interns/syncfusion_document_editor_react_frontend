import React from 'react';
import './App.css';
import { SampleBase } from './components/SampleBase';
import SyncfusionEditor from './components/SyncfusionEditor';

export default class App extends SampleBase {
 
  constructor() {
    super(...arguments);
    this.state={
       setlocal:false,
       setlanguage:false
    }

  }

  public rendereComplete(): void {
  
  }
  

  render() {

    if(!this.state.setlanguage){
      return(
        <div>
          
          <button onClick={this.languagechangeClickSwedesh.bind(this)} >Swedesh</button>
          <button onClick={this.languagechangeClickEnglish.bind(this)} >English</button>

        </div>
      )
    }
    
    return (
      <div>
        
        <SyncfusionEditor language={this.state.setlocal}/>  
      </div>

    );
  }


languagechangeClickSwedesh() {
  this.setState({setlocal:true});
  this.setState({setlanguage:true});
}
languagechangeClickEnglish() {
  this.setState({setlocal:false});
  this.setState({setlanguage:true});
}

}