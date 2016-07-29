import React from 'react';
import EachPointBox from './EachPointBox';


const QuestionColumn = React.createClass({
  render: function(){
    return(

    <ul className = "QuestionColumn">
     <li><EachPointBox value="$200"/></li>
     <li><EachPointBox value="$400"/></li>
     <li><EachPointBox value="$600"/></li>
     <li><EachPointBox value="$800"/></li>
     <li><EachPointBox value="$1000"/></li>
     </ul>

    )
  }
});


export default QuestionColumn;
