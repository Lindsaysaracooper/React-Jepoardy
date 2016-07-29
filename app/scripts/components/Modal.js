import React from 'react';
import { Link, hashHistory } from 'react-router';
import store from "../store";

const Modal = React.createClass({

  modalClickHandler:function(e){
    hashHistory.push('/');
},

   openModal () { this.setState({open: true}); },
   closeModal () { this.setState({open: false}); },

getInitialState: function(){
    return {category: {}};

},


   render: function () {
     let category=store.categories.get(this.props.params.categoryID);
     let question = category.get('clues').filter((question, i, arr) => {
     if (String(question.id) === this.props.params.questionID){
       return question
     }
   });
     return (
       <div className="modal-container">
            <h1 className = "categoryTitle"> {category.get('title')} </h1>
              <p className = "questionCopy"> {question[0].question}</p>
              <input className ="answerBox" type="text" name="Answer" placeholder="Answer"></input>
              <button className = "button" onClick={this.modalClickHandler}>Submit</button>
              <button className = "button" onClick={this.modalClickHandler}>Pass</button>
             <button className = "button" onClick={this.modalClickHandler}>Close</button>
           </div>

     );
   }
 });

//






export default Modal;
