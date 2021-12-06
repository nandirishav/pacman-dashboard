import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import TopPanel from "./components/TopPanel";

function App() {
  const [currentBox, setCurrentBox] = useState(1);

  // const clickBox = () => {
  //   setCurrentBox(2);
  // };

  const getClassFunction = (identifier) => {
    // switch ((currentBox, identifier)) {
    //   case currentBox == 1 && identifier == "box1":
    //     return "container expanded";
    //   case currentBox == 2 && identifier == "box2":
    //     return "container expanded";
    //   default:
    //     return "container";
    // }

    if (currentBox == 1 && identifier == "box1") {
      return "container expanded";
    } else if (currentBox == 1 && identifier == "box2") {
      return "container collapsed";
    } else if (currentBox == 2 && identifier == "box2") {
      return "container expanded";
    } else if (currentBox == 2 && identifier == "box1") {
      return "container collapsed";
    } else if (currentBox == 3 && identifier == "box3") {
      return "container expanded";
    } else if (currentBox == 3 && identifier == "box4") {
      return "container collapsed";
    } else if (currentBox == 4 && identifier == "box4") {
      return "container expanded";
    } else if (currentBox == 4 && identifier == "box3") {
      return "container collapsed";
    } else if (currentBox == 5 && identifier == "box5") {
      return "container expanded";
    } else if (currentBox == 5 && identifier == "box6") {
      return "container collapsed";
    } else if (currentBox == 6 && identifier == "box6") {
      return "container expanded";
    } else if (currentBox == 6 && identifier == "box5") {
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
            updatedClass={getClassFunction("box1")}
            cardState={1}
            clickHandler={setCurrentBox}
          />
          <Card
            updatedClass={getClassFunction("box2")}
            cardState={2}
            clickHandler={setCurrentBox}
          />
        </div>
        <div className="col2">
          <Card
            updatedClass={getClassFunction("box3")}
            cardState={3}
            clickHandler={setCurrentBox}
          />
          <Card
            updatedClass={getClassFunction("box4")}
            cardState={4}
            clickHandler={setCurrentBox}
          />
        </div>
        <div className="col3">
          <Card
            updatedClass={getClassFunction("box5")}
            cardState={5}
            clickHandler={setCurrentBox}
          />
          <Card
            updatedClass={getClassFunction("box6")}
            cardState={6}
            clickHandler={setCurrentBox}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
