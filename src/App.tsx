import { Todo } from "./types/Todo";
import React from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: Todo[]) => setTodos(data));
  }, []);

  return (
    <div className="App">
      <TodoItem
        id="123"
        completed={true}
        title="todo test"
        style={{ border: "1px solid black" }}
      />
      <NewTodoForm handleClick={addTodo} />
    </div>
  );
}

export default App;
