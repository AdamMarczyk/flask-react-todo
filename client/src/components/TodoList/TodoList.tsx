import React, { Component, Fragment, ReactElement } from 'react';
import { ITodo } from '../../types';
import TodoListItem from '../TodoListItem';

interface IOwnProps {
  header: (numberOfTodos: number) => ReactElement<{}>;
  todos: ITodo[];
}

export default class TodoList extends Component<IOwnProps> {
  public render() {
    const { todos, header } = this.props;
    return (
      <Fragment>
        {header(todos.length)}
        <ul>
          {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </Fragment>
    );
  }
}
