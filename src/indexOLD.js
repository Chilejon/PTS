import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import EnterPreds from "./EnterPreds";
import Apps from "./Apps";
//import EnterMatches1 from './EnterMatches1';
import Predictions from "./Predictions";

var destination = document.querySelector("#container");

//ReactDOM.render(
//    <EnterMatches1 />,
// destination);
//ReactDOM.render(<EnterMatches />, destination);
//ReactDOM.render(<Apps />, destination);
ReactDOM.render(<Predictions />, destination);
