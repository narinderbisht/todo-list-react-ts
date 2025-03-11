import { MouseEvent, ChangeEvent, useState } from 'react';
import { TodoFormProps } from '../Utils/variables';

const TodoForm = ({ todos, setTodos, setStatus, filterHandler }: TodoFormProps) => {
  const [inputText, setInputText] = useState("");
  const[error, setError] = useState(false);
  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!inputText){
      setError(true);
      return;
    }
    setError(false);
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const changeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    filterHandler(e.target.value);

  };
  return (<>
    {error && <div className="error">Please enter a todo</div>}
    <div className="form w-full p-4 md:flex md:gap-x-4">
      
      <input type="text" className="todo-input float-start md:w-1/2 w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm" value={inputText} onChange={inputTextHandler} />

      <button className="todo-button float-end w-1/6 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-center" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i> Add
      </button>
       
      <select name="todos" className="filter-todo md:w-1/3 w-full md:mt-0  mt-4 border border-gray-300 rounded-lg bg-gray-50 text-sm p-2"
      onChange={changeStatus}
      >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
      </select>
        
    </div>
    </>
  )
}
export default TodoForm