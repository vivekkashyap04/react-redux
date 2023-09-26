// src/components/TodoList.js

import React from 'react';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
