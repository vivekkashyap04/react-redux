// src/components/AddTodoForm.js

import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
