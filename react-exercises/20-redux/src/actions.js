import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT
  };
};

export const toggle = () => {
  return {
    type: types.TOGGLE_TEXT
  };
};

export const pickColor = color => {
  return {
    type: types.SELECT_COLOR,
    payload: color
  };
};

export const setInput = todoInput => {
  return {
    type: types.SAVE_INPUT,
    payload: todoInput
  };
};

export const addTodo = e => {
  e.preventDefault();
  return {
    type: types.ADD_TASK,
    payload: e
  };
};
