/**
 * Refactor this presentation components so that is using the props that is is getting
 * from its container. The container has already been completed for you.
 * @see src/components/Todo/TodoContainer.js
 *
 * As a bonus, see if you can get and set user input from the store as well
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class Todo extends Component {
  // state = {
  //   todos: []
  // };
  // setUserInput = userInput => {
  //   this.setState({ userInput: userInput });
  // };
  /**
   * This will be passed down from the container as props instead
   * (but you still need to prevent the form from submitting and pass up user input)
   */
  // addTodo = e => {
  //   e.preventDefault();
  //   this.setState({
  //     todos: [...this.state.todos, this.props.userinput]
  //   });
  //   this.props.setUserInput("");
  // };
  /**
   * This will be passed down from the container as props instead
   * (but you still need to pass up the todo index)
   */
  // deleteTodo = todoIndex => {
  //   this.setState({
  //     todos: this.state.todos.filter((item, index) => {
  //       return index !== todoIndex;
  //     })
  //   });
  // };
  render() {
    return (
      <div className="mt-4">
        <h1 className="h3">Todo List</h1>
        <form className="form-group" onSubmit={e => e.preventDefault()}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter text"
              aria-label="Enter text"
              aria-describedby="button-add"
              value={this.props.userinput}
              onChange={e => {
                this.props.setUserInput(e.target.value);
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="subimit"
                id="button-add"
                onClick={this.props.addTodo}
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {/* The todos will be passed down as props */}
          {this.props.todos.map((text, index) => {
            const key = `todo-item-${index}`;
            return (
              <ListItem
                deleteTodo={() => this.props.deleteTodo(index)}
                todoIndex={index}
                key={key}
              >
                {text}
              </ListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
