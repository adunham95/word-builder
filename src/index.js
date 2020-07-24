import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { WordBoard } from './Components/WordBoard/WordBoard';
import { WordProvider } from './Context/WordContext';
import { buildData } from './Functions/FormatData';

let root = document.getElementById('root');

buildData();

ReactDOM.render(
  <WordProvider><WordBoard/></WordProvider>,
  root
)


serviceWorker.unregister();
