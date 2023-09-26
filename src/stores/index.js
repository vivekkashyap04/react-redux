import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducer';

let store = configureStore({
    reducer:todosReducer
})

export default store;