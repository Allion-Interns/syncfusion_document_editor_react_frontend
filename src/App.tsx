import { SampleBase } from './components/TestWordProcess';
import './App.css'
import SyncfusionDocumentEditor from './components/SyncfusionDocEditor';


export default class App extends SampleBase {
 

  constructor() {
    super(...arguments);
    this.state={
       setlocal:false,
       setlanguage:false
    }

    // Add event listener for requestNavigate event to customize hyperlink navigation functionality.
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
        
        <SyncfusionDocumentEditor language={this.state.setlocal}/>  
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
