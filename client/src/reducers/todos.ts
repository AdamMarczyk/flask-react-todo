import * as actionTypes from '../actions/types';
import { IState, TGlobalAction } from '../types';

const initialState: IState = [
  {
    id: 1,
    title: 'Be awesome',
    isDone: true,
    category: 'Home'
  }
];

const todos = (state: IState = initialState, action: TGlobalAction) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.type, //TODO: change to title
          isDone: false,
          category: action.type //TODO: change to category
        }
      ];
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case actionTypes.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default todos;
