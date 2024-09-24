import { useEffect, useState } from 'react';
import { TodoProvider } from './context/TodoContext';
import './App.css';
import { TodoForm, TodoItem } from './components';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
            )
        );
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
            <div className="bg-[#1d1d1d] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-5 text-white">
                    <h1 className="text-3xl font-bold text-center mb-6 mt-2">Todos by Aditya Patel</h1>
                    <div className="mb-6">
                        <TodoForm />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
