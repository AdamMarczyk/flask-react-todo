import React, { ChangeEvent, Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/types';

interface IOwnProps {
  addTodo: (title: string, category: string) => null;
}

interface IState {
  todoTitle: string;
  todoCategory: string;
}

class TodoForm extends Component<IOwnProps, IState> {
  public state = {
    todoTitle: '',
    todoCategory: ''
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.todoTitle}
          onChange={this.handleTodoTitleChange}
          placeholder="Add new todo..."
        />
        <input
          type="text"
          value={this.state.todoCategory}
          onChange={this.handleTodoCategoryChange}
          placeholder="Add new category..."
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    this.props.addTodo(this.state.todoTitle, this.state.todoCategory);

    this.setState({
      todoTitle: '',
      todoCategory: ''
    });
  };

  private handleTodoTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      todoTitle: value
    });
  };

  private handleTodoCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      todoCategory: value
    });
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (title: string, category: string) =>
      dispatch({ type: actionTypes.ADD_TODO, title, category })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
