import axios from 'axios';
import * as actionTypes from './types';

let nextTodoId = 0;
export const addTodo = (title: string, category: string) => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  title,
  category
});

export const toggleTodo = (id: number) => ({
  type: actionTypes.TOGGLE_TODO,
  id
});

export const deleteTodo = (id: number) => ({
  type: actionTypes.DELETE_TODO,
  id
});

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');
  dispatch({
    type: actionTypes.FETCH_TODOS,
    payload: res.data
  });
};
