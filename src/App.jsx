import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import styles from "./App.module.css";
import { useState, useRef } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const todoData = [
    {
      name: "Study",
      date: "toady",
    },
  ];

  const [currentTodoData, setTodoData] = useState(todoData); //define state

  /* this method is for ADD TODO ITEMS */
  const addTodoItem = (itemName, itemDate) => {
    setTodoData((currentTodoData) => [           //functional update
      ...currentTodoData,
      { name: itemName, date: itemDate },
    ]);
  };

  /* this method is for FOR DELETE TODO ITEM */
  const handleDeleteButton = (itemName, itemDate) => {
    const newTodoItems = currentTodoData.filter(
      (item) => item.name !== itemName,
      (item) => item.date !== itemDate
    );
    setTodoData(newTodoItems);
  };

  return (
    <div className="todo">
    <center className={styles.todoContainer}>
      <AppName></AppName>

      <AddTodo addTodoItem={addTodoItem}></AddTodo>

      <TodoItems
        currentTodoData={currentTodoData}
        onDeleteClick={handleDeleteButton}
      ></TodoItems>

      <WelcomeMessage currentTodoData={currentTodoData}></WelcomeMessage>
    </center>
    </div>
  );
}

export default App;
