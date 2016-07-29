import React from 'react';
import { Link, hashHistory } from 'react-router'
import modal from './Modal';


// This is the individual box that shows the value of each category

const EachPointBox = React.createClass({
  pointClickHandler:function(e){
    hashHistory.push(`/category${this.props.id}/question${this.props.question.id}`);

  },
render: function(){
  return(
    <input
      className= "questionButton"
      type= "button"
      value={this.props.value}
      onClick={this.pointClickHandler}/>
  )
}

});
//   getInitialState: function (){
//     return{
//       value:'',
//       id: ''
//     }
//   },
//
//   componentDidMount: function (){
//     $.ajax({
//       type:'GET',
//       url: `http://jservice.io/api/clues?`
//     });
//     success: (data)=> {
//
//
//     }
//   })
// });
// render: function (){
//   return (
//     <div>
//
//     </div>
//   )
// }


// console.log(this.props);
export default EachPointBox;
