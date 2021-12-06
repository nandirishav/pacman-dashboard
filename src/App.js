import React, { useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import TopPanel from "./components/TopPanel";

function App() {
  const [currentBox, setCurrentBox] = useState(1);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);

  const getClassFunction = (identifier) => {
    if (currentBox == 1 && identifier == box1) {
      return "container expanded";
    } else if (currentBox == 1 && identifier == box2) {
      return "container collapsed";
    } else if (currentBox == 2 && identifier == box2) {
      return "container expanded";
    } else if (currentBox == 2 && identifier == box1) {
      return "container collapsed";
    } else if (currentBox == 3 && identifier == box3) {
      return "container expanded";
    } else if (currentBox == 3 && identifier == box4) {
      return "container collapsed";
    } else if (currentBox == 4 && identifier == box4) {
      return "container expanded";
    } else if (currentBox == 4 && identifier == box3) {
      return "container collapsed";
    } else if (currentBox == 5 && identifier == box5) {
      return "container expanded";
    } else if (currentBox == 5 && identifier == box6) {
      return "container collapsed";
    } else if (currentBox == 6 && identifier == box6) {
      return "container expanded";
    } else if (currentBox == 6 && identifier == box5) {
      return "container collapsed";
    } else {
      return "container";
    }
  };

  return (
    <div className="App">
      <Header />
      <TopPanel />
      <div className="container-wrapper">
        <div className="col1">
          <Card
            ref={box1}
            updatedClass={getClassFunction(box1)}
            cardState={1}
            clickHandler={setCurrentBox}
          />
          <Card
            ref={box2}
            updatedClass={getClassFunction(box2)}
            cardState={2}
            clickHandler={setCurrentBox}
          />
        </div>
        <div className="col2">
          <Card
            ref={box3}
            updatedClass={getClassFunction(box3)}
            cardState={3}
            clickHandler={setCurrentBox}
          />
          <Card
            ref={box4}
            updatedClass={getClassFunction(box4)}
            cardState={4}
            clickHandler={setCurrentBox}
          />
        </div>
        <div className="col3">
          <Card
            ref={box5}
            updatedClass={getClassFunction(box5)}
            cardState={5}
            clickHandler={setCurrentBox}
          />
          <Card
            ref={box6}
            updatedClass={getClassFunction(box6)}
            cardState={6}
            clickHandler={setCurrentBox}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
