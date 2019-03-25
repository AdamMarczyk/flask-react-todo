import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/types';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const header = (numberOfTodos: number) => (
  <h2>Number of todos: {numberOfTodos}</h2>
);

interface IOwnProps {
  fetchTodos: () => null;
  todos: any;
}

class App extends Component<IOwnProps> {
  public render() {
    return (
      <Fragment>
        <TodoForm />
        <TodoList header={header} todos={this.props.todos} />
        <button onClick={this.handleClick}>Save todos</button>
      </Fragment>
    );
  }

  componentDidMount = () => {
    this.props.fetchTodos();
  };

  private handleClick = () => {
    axios.post('/api/save');
  };
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodos: () => dispatch({ type: actionTypes.FETCH_TODOS })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
