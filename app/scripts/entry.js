import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import GamePage from './components/Game';
import QuestionColumn from './components/QuestionColumn';
import Modal from "./components/Modal";




const GameRouter =(
  <Router history = {hashHistory}>
    <Route path ="/" component = {GamePage}>
        <Route path ="/category:categoryID/question:questionID" component = {Modal}/>
    </Route>
  </Router>
)

ReactDOM.render(GameRouter, document.querySelector('.container'))
