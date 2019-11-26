import { State } from "./types";

type IndexGetter = (state: State) => number;

const right: IndexGetter = ({ value, mode, cursorIndex }) => {
  if (value.length === 0 || cursorIndex !== value.length - 1) {
    return cursorIndex + 1;
  } else {
    return cursorIndex;
  }
};

const left: IndexGetter = ({ value, mode, cursorIndex }) => {
  if (cursorIndex > 0) {
    return cursorIndex - 1;
  } else {
    return cursorIndex;
  }
};

const start: IndexGetter = ({ value, mode, cursorIndex }) => {
  return 0;
};

const end: IndexGetter = ({ value, mode, cursorIndex }) => {
  return value.length - 1;
};

const append: IndexGetter = ({ value, mode, cursorIndex }) => {
  return cursorIndex + 1;
};

const endAppend: IndexGetter = ({ value, mode, cursorIndex }) => {
  return value.length;
};

const escape: IndexGetter = ({ value, mode, cursorIndex }) => {
  if (cursorIndex == value.length) {
    return value.length - 1;
  } else {
    return cursorIndex;
  }
};

const backspace: IndexGetter = ({ value, mode, cursorIndex }) => {
  if (cursorIndex > 0) {
    return cursorIndex - 1;
  } else {
    return 0;
  }
};

const getIndex = {
  right,
  left,
  start,
  end,
  append,
  endAppend,
  escape,
  backspace
};
export default getIndex;
