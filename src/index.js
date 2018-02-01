import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EnterPreds from './EnterPreds';
import Apps from './Apps';
import EnterMatches from './EnterMatches';


var destination = document.querySelector("#container");

ReactDOM.render(
    <Apps />,
 destination);
//ReactDOM.render(<EnterMatches />, destination);
//ReactDOM.render(<Apps />, destination);

