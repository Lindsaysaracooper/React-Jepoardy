import React from 'react';
import EachPointBox from './EachPointBox';


const QuestionColumn = React.createClass({
  render: function(){
    return(

    <ul className = "QuestionColumn">
     <li><EachPointBox
            value="$200"
            id= {this.props.category}
            question = {this.props.questions[0]}/></li>
     <li><EachPointBox
            value="$400"
            id= {this.props.category}
            question = {this.props.questions[1]}/></li>
     <li><EachPointBox
            value="$600"
            id= {this.props.category}
            question = {this.props.questions[2]}/></li>
     <li><EachPointBox
            value="$800"
            id= {this.props.category}
            question = {this.props.questions[3]}/></li>
     <li><EachPointBox
            value="$1000"
            id= {this.props.category}
            question = {this.props.questions[4]}/></li>
     </ul>

    )
  }
});


export default QuestionColumn;
