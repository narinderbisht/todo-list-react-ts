import {useEffect, useState} from 'react'
import TodoForm from '../Components/TodoForm'
import Todo from '../Components/Todo'
import { TodoItems } from '../Utils/variables'

const TodoApp = () => {
    
    const [todos, setTodos] = useState<TodoItems[]>([]);
    const [filteredTodos, setFilteredTodos] = useState<TodoItems[]>([]);
    const [status, setStatus] = useState("all");

    const filterHandler = (status: string) => {
        if (status == 'completed') {
            setFilteredTodos(todos.filter(todo => todo.completed === true));
        } else if (status == 'uncompleted') {
            setFilteredTodos(todos.filter(todo => todo.completed === false));
        }
        else {
            setFilteredTodos(todos);
        }
    };
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos') || '[]');
            setTodos(todoLocal);
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    useEffect(() => {
        getLocalTodos();
    }, []);
    useEffect(() => {
        filterHandler(status);
        saveLocalTodos();
    }, [todos]);

  return (
    
        <div className="w-full max-w-xl mx-auto border-1 border-gray-300 rounded-lg shadow-lg text-center p-4">
            <h2 className="text-lg font-semibold uppercase">Todo List</h2>
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
    
  ) 
}

export default TodoApp