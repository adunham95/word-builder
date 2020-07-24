import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Board } from './Components/Board';
import {observe} from "./Components/Game.js";


observe((knightPosition)=> 
  ReactDOM.render(
    <Board knightPosition={knightPosition}/>,
    document.getElementById('root')
  )
) 


serviceWorker.unregister();
