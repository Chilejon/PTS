import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EnterPreds from './EnterPreds';
import Apps from './Apps';
<<<<<<< HEAD
import EnterMatches from './EnterMatches';

var destination = document.querySelector("#container");

ReactDOM.render(<Apps />, destination);
=======
import EnterMatches1 from './EnterMatches1';
import Predictions from './Predictions';

var destination = document.querySelector("#container");

//ReactDOM.render(
//    <EnterMatches1 />,
// destination);
//ReactDOM.render(<EnterMatches />, destination);
//ReactDOM.render(<Apps />, destination);
ReactDOM.render(<Predictions />, destination)
>>>>>>> 206a0dbf22ac2c7fdc3bb58a4aa8324c232fa113

