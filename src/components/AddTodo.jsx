
    /* Hook = using of useState */

// import { useState } from "react";
// function AddTodo({addTodoItem}) {

  
//   const [todoName, setTodoName] = useState('');
//   const [todoDate, setTodoDate] = useState('');

//   const handleNameChange = (event) =>{      // method
//     setTodoName(event.target.value);       // set the todod name
//   }
 
//   const handleDateChange = (event) =>{      //method
//     setTodoDate(event.target.value);       // set the todo date
//   }


//   const handleAddButtonClick = (event) => {         // method
//     addTodoItem(todoName, todoDate);
//     event.preventDefault();                       // Submission of form
//     setTodoName("");                     // if we add todoName and the ADD the value got  empty
//     setTodoDate("");                    // if we add todoDate and the ADD the value got  empty
//   }

//   return (
//     <div className="container text-center">
//      <form className="row"                      //using form
//      onSubmit={handleAddButtonClick}>        
//         <div className="col-sm-6">
//           <input type="text" placeholder="Enter Todo Here"
//           value={todoName}                      // for double binding
//           onChange = {handleNameChange}
//           />
//         </div>
//         <div className="col-sm-4">
//           <input type="date"
//           value={todoDate}                // for double binding
//           onChange = {handleDateChange}
//           />
//         </div>
//         <div className="col-sm-2">
//           <button 
//           onSubmit={handleAddButtonClick}
//           className="btn btn-success kg-button"
//          // onClick={handleAddButtonClick}           // anynonums method            
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default AddTodo;





/* Hook =  using of useRef */

import { useRef } from "react";
import { MdAdd } from "react-icons/md";

function AddTodo({addTodoItem}) {


  const todoNameElement = useRef();     // useUef
  const todoDateElement = useRef();     //useRef



  const handleAddButtonClick = (event) => { 
    const todoName = todoNameElement.current.value;     //prop
    const todoDate = todoDateElement.current.value;  
   event.preventDefault()                               // for submission form
    addTodoItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
                    
  }

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClick}>

        <div className="col-sm-6">
          <input type="text"
          ref={todoNameElement}               // pass the reference
          placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-sm-4">
          <input type="date"
          ref={todoDateElement}                 // pass the reference        
         
          />
        </div>
        <div className="col-sm-2">

          <button
          onSubmit={handleAddButtonClick}
          className="btn btn-primary"><MdAdd /></button>
          {/* <button 
          onSubmit={handleAddButtonClick}
          className="btn btn-success kg-button"                     
          >
          </button> */}
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
