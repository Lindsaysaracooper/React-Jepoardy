import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import EachPointBox from './EachPointBox';
import QuestionColumn from './QuestionColumn';
import store from '../store';

const GamePage = React.createClass({
  getInitialState: function(){
    return{
      categories: []
    };

  },
  componentDidMount: function(){
    store.categories.getCategories();
    store.categories.on('add', () => {
      this.setState({categories: store.categories.toJSON()});

    });
  },
  // the below might be a new category component that will pull 5 questions
  render: function(){

    let categoryItems = this.state.categories.map(function(category, i, arr){
      return (
        <div className="column" key={i}>
          <p className="columnTitle">{category.title}</p>
          <QuestionColumn />
        </div>
      )
    });
    console.log(categoryItems);
    return (
      // I want to return 6 columns with categories titles and 5 boxes with values
      <div className = "gameBoard">
        {categoryItems}
        {this.props.children}
      </div>

    )
  }
});


export default GamePage;
