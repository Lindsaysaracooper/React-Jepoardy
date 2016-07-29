import React from 'react';
import { Link, hashHistory } from 'react-router'


class Modal extends React.Component {
  clickHandler: function(e){
    console.log("you did it biatch")
  },
   constructor () {
     super();
     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
   }
   openModal () { this.setState({open: true}); }
   closeModal () { this.setState({open: false}); }

   render () {
     return (
       <div className="modal-container">
            <h1 className = "categoryTitle"> The Category Name </h1>
              <p className = "questionCopy"> This is the question </p>
              <input type="button" name="Answer" value="Speak Answer"></input>
              <input type="button" name="Pass" value="Pass"></input>
              <input type="text" name="Answer" placeholder="Answer"></input>
             <button onClick={this.clickHandler}>Close</button>
           </div>

     );
   }
 }

// const Modal = React.createClass({
//     render: function() {
//         return
//         <div className="modal-container">
//           <div className = "modal">
//             <h1 className = "categoryTitle">
//               <p className = "questionCopy">
//               <input type="button" name="Answer" value="Speak Answer"></input>
//               <input type="button" name="Pass" value="Pass"></input>
//                 <input type="text" name="Answer" placeholder="Answer"></input>
//               </p>
//             </h1>
//           </div>
//         </div>
//     }
//
// });
//
// export default Modal;
//
//
// const Modal = React.createClass({
//      super();
//      this.openModal = this.openModal.bind(this);
//      this.closeModal = this.closeModal.bind(this);
//    }
//
//    openModal () { this.setState({open: true}); }
//
//    closeModal () { this.setState({open: false}); }
//
//    render () {
//      return (
//        return
//        <div className="modal-container">
//          <div className = "modal">
//            <h1 className = "categoryTitle">
//              <p className = "questionCopy">
//              <input type="button" name="Answer" value="Speak Answer"></input>
//              <input type="button" name="Pass" value="Pass"></input>
//                <input type="text" name="Answer" placeholder="Answer"></input>
//              </p>
//            </h1>
//          </div>
//        </div>
//      );
//    }
//  }

export default Modal;
