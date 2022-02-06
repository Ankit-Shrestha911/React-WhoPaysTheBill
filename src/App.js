import React from "react";
import Stage1 from "./components/stage1";
import Stage2 from "./components/stage2";
import {myContext} from "./context";
import "./Styles/style.css";

class App extends React.Component {
    static contextType = myContext; 
  render(){
  return (
    <>
    <div className="Wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill ?</h1>
        {this.context.state.stage === 1 ?
         <Stage1/>
         :
         <Stage2/>
      }
      </div>
    </div>
    </>
  )
  }
};

export default App;
