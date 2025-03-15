import {useState, useEffect} from 'react';
import Todo from "./Components/Todo";
import TodoForm from './Components/TodoForm';
import { TodoItems } from './Utils/variables';

function App() {
  interface Todo {
    text: string;
    completed: boolean;
    id: number;
  };
  
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoItems[]>([]);
  const [status, setStatus] = useState("all");
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler(status);
    saveLocalTodos();
  }, [todos]);

  const filterHandler = (status:string) => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo: Todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo: Todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos") || "[]");
      setTodos(todoLocal);
    }
  };
  return (
    <>
      <div className="App w-full mx-auto">
        <header className="header w-full bg-blue-500 text-white text-center p-4">
          <h1 className="text-lg uppercase">Todo List</h1>
        </header>
        <div className="mx-auto w-full max-w-xl p-4 py-6 w-min-xl justify-center flex flex-col items-center border border-gray-300 border-t-0 rounded-br-lg rounded-bl-lg shadow-lg">
          <TodoForm
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            filterHandler={filterHandler}
          />
          <Todo
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </>
  )
}

export default App
