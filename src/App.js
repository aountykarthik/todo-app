// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-title">TODO App</h1>
          <p className="app-subtitle">
            {todos.length === 0
              ? 'No tasks yet. Add one below!'
              : `${completedCount} of ${todos.length} tasks completed`}
          </p>
        </div>

        <TodoForm addTodo={addTodo} />

        {todos.length > 0 && (
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        )}

        {todos.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">📝</span>
            <p>Your task list is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
