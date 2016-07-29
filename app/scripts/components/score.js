import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import store from '../store';


const Score = React.createClass({
  getInitialState: function(){
    return{
      score: []
    },
      console.log(store.categories);
    componentDidMount: function(){

      // store.categories.getCategories();
      // store.categories.on('add', () => {
      //   this.setState({categories: store.categories.toJSON()});
      });
    },

});


export default Score;
