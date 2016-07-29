import Backbone from 'backbone';


export default Backbone.Model.extend({
  id:'id',
  urlRoot:`http://jservice.io/api/clues?`,
  defaults: {
    question: '',
    value: '',
    answer:''
  },


});
