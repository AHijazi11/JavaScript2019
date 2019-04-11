import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    isVisible: false,
    color: "",
    todoInput: "",
    todos: ["Finish this assignment", "Read a book"]
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.TOGGLE_TEXT:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case types.SELECT_COLOR:
      return {
        ...state,
        color: action.payload
      };

    case types.SAVE_INPUT:
      return {
        ...state,
        todoInput: action.payload
      };

    case types.ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, state.todoInput]
      };

    default:
      return state;
  }
};

export default reducer;
