import { useContext, createContext } from "react";
export const TodoContext = createContext(
    {
        todos: [
            { id: 1, todo: "Todo 1", completed: false },
        ],
        addTodo: () => { },
        deleteTodo: () => { },
        updateTodo: () => { },
        toggleComplete: () => { },
    }
);
export const useTodo = () => useContext(TodoContext);
// You can write any both are similar
// export const useTodo = () => { 
//     return useContext(TodoContext)
// }
export const TodoProvider = TodoContext.Provider