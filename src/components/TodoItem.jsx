import { MdDelete } from "react-icons/md";

const TodoItem=({todoName,todoDate, onDeleteClick}) =>{

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger kg-button"
          onClick = {() =>{
            onDeleteClick(todoName, todoDate)
          }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
