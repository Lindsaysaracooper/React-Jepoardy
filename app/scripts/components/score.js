import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import store from '../store';



const Score = React.createClass({
  getInitialState: function(){
    return {
      session: store.session.toJSON()
    };
  },
  componentDidMount: function(){
    store.session.get();
    store.session.on('change', () => {
      this.setState({
        session: store.session.toJSON()
      });
    });
  },
  render: function(){
    return(
      <div>
        {this.state.session.score}
      </div>
    )
  }
});



export default Score;
