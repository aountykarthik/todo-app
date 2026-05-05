// src/components/TodoItem.js
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-check-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        title="Delete task"
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
