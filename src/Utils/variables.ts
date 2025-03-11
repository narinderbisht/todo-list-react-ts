export interface TodoItems{
    text: string;
    completed: boolean;
    id: number;
}
export interface TodosParams{
    todos: TodoItems[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItems[]>>;
    filteredTodos: TodoItems[];
}

export interface TodoFormProps{
    todos: TodoItems[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItems[]>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    filterHandler: (status: string) => void;
}
