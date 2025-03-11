import Sortable from 'sortablejs';
import { TodoItems, TodosParams } from '../Utils/variables';

function Todo({ todos, setTodos, filteredTodos }: TodosParams) {
    if (filteredTodos.length) {
        const sortableElement = document.querySelector('.sortablejs-custom');
        if (sortableElement instanceof HTMLElement) {
            Sortable.create(sortableElement, {
                animation: 150,
                handle: ".sortablejs-custom-handle",
                /*
                chosenClass: "sortable-chosen",
                ghostClass: "sortable-ghost",
                dragClass: "sortable-drag",
                
                onEnd: function (evt) {
                    if (evt.oldIndex !== undefined && evt.newIndex !== undefined) {
                        const item = todos[evt.oldIndex];
                        todos.splice(evt.oldIndex, 1);
                        todos.splice(evt.newIndex, 0, item);
                        setTodos([...todos]);
                    }
                }*/
            });
        }
    }
  return (
      <div className="w-full p-4">
          <h2 className="text-lg font-semibold">Todo List</h2>
          <p className="text-sm text-gray-500">You have {todos.length} todos</p>
          
          <ul className="todo-list border border-gray-200 rounded-lg mt-4 list-group js-sortable sortablejs-custom">
              {filteredTodos.map((todo: TodoItems) => (
                  <li key={todo.id} className={`todo ${todo.completed ? "completed" : ""} w-full px-4 py-2 border-b border-gray-200 rounded-t-lg flex justify-between items-center gap-x-4 list-group-item`}>
                      <span><i className="sortablejs-custom-handle cursor-auto fas fa-arrows-alt"></i> {todo.text}</span>
                      <div className="flex gap-x-4">
                          {todo.completed ? <span className="text-green-500">Completed</span> :
                          <button className="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2" onClick={() => {
                              setTodos(
                                  todos.map((item: TodoItems) => {
                                      if (item.id === todo.id) {
                                          return {
                                              ...item,
                                              completed: !item.completed,
                                          };
                                      }
                                      return item;
                                  })
                              );
                          }}>
                            <i className='fas fa-check'></i>
                          </button>
                            }
                          <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg w-full px-5 py-1" onClick={() => {
                              setTodos(todos.filter((item: TodoItems) => item.id !== todo.id));
                          }}>
                              <i className='fas fa-trash'></i>
                          </button>
                      </div>
                  </li>))
                }
          </ul>
    </div>
  )
}

export default Todo