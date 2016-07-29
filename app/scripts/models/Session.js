import Backbone from 'backbone';
import React from 'react';


const Session =  Backbone.Model.extend({
  defaults:{
    score: 0
  }
});

export default Session;
