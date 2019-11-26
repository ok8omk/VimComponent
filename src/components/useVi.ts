import * as React from "react";
import getIndex from "./getIndex";
import getValue from "./getValue";

type Mode = "INSERT" | "NORMAL";
type State = {
  value: string;
  mode: Mode;
  cursorIndex: number;
};
type Action = {
  key: string;
};
const initialState: State = {
  value: "",
  mode: "INSERT",
  cursorIndex: 0
};

const normalReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.key) {
    case "d": {
      return { ...state, value: "", cursorIndex: getIndex.start(state) };
    }
    case "i": {
      return { ...state, mode: "INSERT" };
    }
    case "a": {
      return { ...state, mode: "INSERT", cursorIndex: getIndex.append(state) };
    }
    case "0": {
      return { ...state, cursorIndex: getIndex.start(state) };
    }
    case "$": {
      return { ...state, cursorIndex: getIndex.end(state) };
    }
    case "A": {
      return {
        ...state,
        mode: "INSERT",
        cursorIndex: getIndex.endAppend(state)
      };
    }
    case "I": {
      return { ...state, mode: "INSERT", cursorIndex: getIndex.start(state) };
    }
    case "h": {
      return { ...state, cursorIndex: getIndex.left(state) };
    }
    case "l": {
      return { ...state, cursorIndex: getIndex.right(state) };
    }
    default: {
      return state;
    }
  }
};

const insertReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.key) {
    case "Escape": {
      return { ...state, mode: "NORMAL", cursorIndex: getIndex.escape(state) };
    }
    case "Backspace": {
      return {
        ...state,
        value: getValue.backspace({ ...state, key: action.key }),
        cursorIndex: getIndex.backspace(state)
      };
    }
    case "Meta":
    case "Control":
    case "Shift":
    case "Tab":
    case "Enter": {
      return state;
    }
    default: {
      return {
        ...state,
        value: getValue.insert({ ...state, key: action.key }),
        cursorIndex: getIndex.right(state)
      };
    }
  }
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (state.mode) {
    case "INSERT": {
      return insertReducer(state, action);
    }
    default: {
      return normalReducer(state, action);
    }
  }
};

const useVi = () => {
  return React.useReducer(reducer, initialState);
};

export default useVi;
