import { addTodo, deleteTodo, fetchTodos, toggleTodo } from './actions';

export interface ITodo {
  id: number;
  title: string;
  isDone: boolean;
  category: string;
}

export type IState = ITodo[];

type IAddTodoAction = ReturnType<typeof addTodo>;
type IDeleteTodoAction = ReturnType<typeof deleteTodo>;
type IToggleTodoAction = ReturnType<typeof toggleTodo>;
type IFetchTodosAction = ReturnType<typeof fetchTodos>;

export type TGlobalAction =
  | IAddTodoAction
  | IDeleteTodoAction
  | IToggleTodoAction
  | IFetchTodosAction;
