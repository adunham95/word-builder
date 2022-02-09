import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { WordBoard } from './Components/WordBoard/WordBoard';
import { WordProvider } from './Context/WordContext';

let root = document.getElementById('root');

ReactDOM.render(
  <WordProvider><WordBoard/></WordProvider>,
  root
)


serviceWorker.unregister();
