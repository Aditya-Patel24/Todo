import React,{useState} from 'react'
import { useTodo } from '../context/TodoContext';
function TodoForm() {
    const[todo, setTodo] = useState('');
    const { addTodo } = useTodo();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        addTodo({
            todo,
            completed: false
        });
        setTodo('');
    }
    
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
  return (
    <div>
       <form  className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={handleChange}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </div>
  )
}

export default TodoForm
