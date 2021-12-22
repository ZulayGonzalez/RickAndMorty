import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Router from './Router';
import Inicio from './Pages/Inicio';

const WintRouter=document.getElementById('root');
  render(
   <BrowserRouter>
   <App/>
   </BrowserRouter>, WintRouter);  