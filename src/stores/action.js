import {ADD_TODO,DELETE_TODO,TOGGLE_TODO } from './actionType'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: new Date().getTime(),
    text,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});