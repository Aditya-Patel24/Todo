import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import './App.css'
import { TodoForm, TodoItem } from './components';

function App() {
const [todos, setTodos] = useState([]);
const addTodo = (todo) => {
    setTodos([{ id: Date.now(), ...todo }, ...todos]);
}
const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
}
const updateTodo = (id, todo) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, todo } : todo));
}
const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
}
useEffect(()=>{
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
    }
},[]);
useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
}
,[todos]);
  return (
    <>
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
<div className="bg-[#1d1d1d] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todos by Aditya Patel</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
</TodoProvider>
    </>
  )
}

export default App
