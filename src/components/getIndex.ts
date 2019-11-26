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

const nextWord: IndexGetter = ({ value, mode, cursorIndex }) => {
  const pattern = /\s+\w/;
  const match = pattern.exec(value.slice(cursorIndex, value.length));

  if (match === null) {
    return cursorIndex;
  } else {
    return match.index + cursorIndex + 1;
  }
};

const nextWORD: IndexGetter = ({ value, mode, cursorIndex }) => {
  const pattern = /\s+\S/;
  const match = pattern.exec(value.slice(0, value.length));

  if (match === null) {
    return cursorIndex;
  } else {
    return match.index + cursorIndex + 1;
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
  backspace,
  nextWord,
  nextWORD
};
export default getIndex;
