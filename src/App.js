import React from "react";
// import Split from "react-split";
import SplitPane from "react-split-pane";
// import One from "./components/One";
// import Two from "./components/Two";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <Split
    //   sizes={[50, 50]}
    //   minSize={100}
    //   // expandToMin={true}
    //   // gutterSize={10}
    //   // gutterAlign="center"
    //   // snapOffset={30}
    //   dragInterval={50}
    //   direction="horizontal"
    //   // cursor="col-resize"
    // >
    //   <One />
    //   <Two />
    // </Split>
    <SplitPane split="vertical" minSize={50}>
      <div />
      <SplitPane split="horizontal">
        <div />
        <div />
      </SplitPane>
    </SplitPane>
  );
}

export default App;
