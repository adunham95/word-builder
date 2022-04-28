import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { WordBoard } from './Components/WordBoard/WordBoard';
import { WordProvider } from './Context/WordContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter><WordProvider><App/></WordProvider></BrowserRouter>,
  root
)


serviceWorker.unregister();
