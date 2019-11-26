import { State } from "./types";

type Key = {
  key: string;
};
type StateWithKey = State & Key;
type ValueGetter = (StateWithKey: StateWithKey) => string;

const backspace: ValueGetter = ({ value, mode, cursorIndex }) => {
  return (
    value.slice(0, cursorIndex - 1) + value.slice(cursorIndex, value.length)
  );
};

const insert: ValueGetter = ({ value, mode, cursorIndex, key }) => {
  return (
    value.slice(0, cursorIndex) + key + value.slice(cursorIndex, value.length)
  );
};

const getValue = { backspace, insert };
export default getValue;
