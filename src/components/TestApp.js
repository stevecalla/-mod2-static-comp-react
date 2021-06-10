// import React, { Component } from "react";
// import TestCheckbox from "./TestCheckbox";

// import characters from '../data.js';
// import TestRenderCards from "./TestRenderCards";
// import TestMap2 from './TestMap2.js';

// const OPTIONS = ["1", "2", "3"];
// const whatever = [{name: "a"}, {name: "b"}, {name: "c"}];
// const characters2 = characters;
// console.log(characters2);
// console.log(characters2[0].name);
// characters2.map(character => console.log(character.name));

// class TestApp extends Component {
//   state = {
//     checkboxes: OPTIONS.reduce(
//     // checkboxes: characters2.reduce(
//       (options, option) => ({
//         ...options,
//         [option]: false
//       }),
//       {}
//     ),
//     abc: characters2,
//   };

//   selectAllCheckboxes = isSelected => {
//     Object.keys(this.state.checkboxes).forEach(checkbox => {
//       // BONUS: Can you explain why we pass updater function to setState instead of an object?
//       this.setState(prevState => ({
//         checkboxes: {
//           ...prevState.checkboxes,
//           [checkbox]: isSelected
//         }
//       }));
//     });
//   };

//   selectAll = () => this.selectAllCheckboxes(true);

//   deselectAll = () => this.selectAllCheckboxes(false);

//   handleCheckboxChange = changeEvent => {
//     const { name } = changeEvent.target;

//     this.setState(prevState => ({
//       checkboxes: {
//         ...prevState.checkboxes,
//         [name]: !prevState.checkboxes[name]
//       },
//       abc: characters2.pop(),
//     }));
//   };

//   handleFormSubmit = formSubmitEvent => {
//     formSubmitEvent.preventDefault();
//     console.log('p=', this.state.checkboxes);
//     // console.log('p=', this.state.abc);
//     // console.log('p=', this.state.abc.length);
//     console.log('s=', Object.keys(this.state.checkboxes));
//     console.log('r=', Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox]));

//     // return (
//       Object.keys(this.state.checkboxes)
//         .filter(checkbox => this.state.checkboxes[checkbox])
//         .forEach(checkbox => {
//           console.log(checkbox, "is selected."); 
//           // console.log(this.state.abc, "is selected.");   
//           return (<TestMap2 card={this.state.abc} />);  
//         });
//     // )
//   };

//   createCheckbox = option => { //how is 'option' passed... see line 67 below
//     console.log('t=', option);

//     return (
//       <TestCheckbox
//         label={option}
//         isSelected={this.state.checkboxes[option]}
//         onCheckboxChange={this.handleCheckboxChange}
//         key={option}
//       />
//     );
//   }

//   createCheckboxes = () => OPTIONS.map(this.createCheckbox);
//   // createCheckboxes = () => whatever.map(test => this.createCheckbox(test.name));
//   // createCheckboxes = () => characters2.map(character => this.createCheckbox(character.name));

//   render() {
//     return (
//       <div className="container">
//         <div className="row mt-5">
//           <div className="col-sm-12">
//             <form onSubmit={this.handleFormSubmit}>
//               {this.createCheckboxes()}

//               <div className="form-group mt-2">
//                 <button
//                   type="button"
//                   className="btn btn-outline-primary mr-2"
//                   onClick={this.selectAll}
//                 >
//                   Select All
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-primary mr-2"
//                   onClick={this.deselectAll}
//                 >
//                   Deselect All
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default TestApp;