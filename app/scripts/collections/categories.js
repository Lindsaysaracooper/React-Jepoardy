import Backbone from 'backbone';
import Category from '../models/category';
import $ from 'jquery';


export default Backbone.Collection.extend({
  model: Category,
  url: 'http://jservice.io/api/clues?',
  getCategories: function() {

    [11508, 11590, 11509, 11510, 11511].forEach((id, i, arr) => {
      $.ajax({
        type:'GET',
        url:`http://jservice.io/api/category?id=${id}?`,
        success: (data) => {
          this.add(data)
          this.trigger('update');
          // console.log(this.state);
        }
      })

    })

  }

});
