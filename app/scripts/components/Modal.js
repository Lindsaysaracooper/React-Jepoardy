import React from 'react';
import { Link, hashHistory } from 'react-router';
import store from "../store";

const Modal = React.createClass({
  getInitialState: function (){
    return{
      userRight: null,
    }
  },

  modalClickHandler:function(e){
    hashHistory.push('/');
},
  answerClickHandler: function(e){
    e.preventDefault();
    let scoreboard;
    let initialValue=store.session.get('score')
    let points;
    let answerValue = this.refs.answer.value;

    if (this.state.question.answer === answerValue){
      this.setState({userRight:true});
      points = Number(initialValue += answerValue)
      store.session.set('score', points)
      console.log('YAS QUEEN');

    } else {
       this.setState({userRight: false});
       points = Number(initialValue -= answerValue)
       store.session.set('score', points)
     }
   },


   openModal () { this.setState({open: true}); },
   closeModal () { this.setState({open: false}); },

getInitialState: function(){
    return {question: {}};
},

componentDidMount: function (){
  let category=store.categories.get(this.props.params.categoryID);
  let question = category.get('clues').filter((question, i, arr) => {
    if (String(question.id) === this.props.params.questionID){
      return question
    }

  });
  this.setState({
    question: question[0]
  })
},


   render: function () {
     let category=store.categories.get(this.props.params.categoryID);

console.log(this.state.question.answer);

     return (

       <div className="modal-container">
            <h1 className = "categoryTitle"> {category.get('title')} </h1>
              <p className = "questionCopy"> {this.state.question.question}</p>
              <input className ="answerBox" ref="answer" type="text" name="Answer" placeholder="Answer"></input>
              <button className = "button" onClick={this.answerClickHandler}>Submit</button>
              <button className = "button" onClick={this.modalClickHandler}>Pass</button>
             <button className = "button" onClick={this.modalClickHandler}>Close</button>
           </div>

     );
   },

 });

//






export default Modal;
