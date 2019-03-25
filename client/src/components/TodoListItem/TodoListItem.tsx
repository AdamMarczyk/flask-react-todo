import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/types';
import { ITodo } from '../../types';

interface IOwnProps {
  todo: ITodo;
  toggleTodo: (id: number) => null;
  deleteTodo: (id: number) => null;
}

class TodoListItem extends Component<IOwnProps> {
  public render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          data-todo-id={todo.id}
          checked={todo.isDone}
          onChange={this.handleToggleDone}
        />
        {todo.title}, {todo.category}{' '}
        <button color="white" data-todo-id={todo.id} onClick={this.handleClick}>
          delete
        </button>
      </li>
    );
  }

  private handleToggleDone = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { dataset }
    } = event;
    const todoId = parseInt(dataset.todoId as string, 10);

    this.props.toggleTodo(todoId);
  };

  private handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { dataset }
    } = event;
    const todoId = parseInt(dataset.todoId as string, 10);

    this.props.deleteTodo(todoId);
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleTodo: (id: number) => dispatch({ type: actionTypes.TOGGLE_TODO, id }),
    deleteTodo: (id: number) => dispatch({ type: actionTypes.DELETE_TODO, id })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoListItem);
