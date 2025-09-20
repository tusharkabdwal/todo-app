import TodoItem from "./TodoItem";
const TodoItems = ({currentTodoData,onDeleteClick}) => {
  return (
    <div className="items-container">
      {currentTodoData.map((item) => (
        <TodoItem key={item.name} todoName={item.name} todoDate={item.date}onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;