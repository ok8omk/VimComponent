import * as React from "react";
import styled from "@emotion/styled";
import { Input } from "./Input";
import { Status } from "./Status";

const Container = styled.div`
  border: solid 1px #000;
  font-size: 24px;
  width: 50vw;
  height: 2em;
  display: inline-flex;
  flex-direction: column;
  font-family: "Inconsolata", monospace;
  background-color: #000;
  color: #fff;
`;

type Mode = "INSERT" | "NORMAL";

export const Window: React.FC = () => {
  const [mode, setMode] = React.useState<Mode>("INSERT");
  const [value, setValue] = React.useState<string>("");
  const [cursorIndex, setCursorIndex] = React.useState<number>(0);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const key = event.key;
    switch (mode) {
      case "INSERT": {
        onInsert(key);
        break;
      }
      case "NORMAL": {
        onNormal(key);
        break;
      }
    }
  };

  const onInsert = (key: string) => {
    switch (key) {
      case "Escape": {
        if (cursorIndex == value.length) {
          setCursorIndex(value.length - 1);
        }
        setMode("NORMAL");
        break;
      }
      case "Backspace": {
        setValue(
          value.slice(0, cursorIndex - 1) +
            value.slice(cursorIndex, value.length)
        );
        if (cursorIndex > 0) {
          setCursorIndex(cursorIndex - 1);
        }
        break;
      }
      case "Meta":
      case "Control":
      case "Shift":
      case "Enter": {
        break;
      }
      default: {
        setValue(
          value.slice(0, cursorIndex) +
            key +
            value.slice(cursorIndex, value.length)
        );
        setCursorIndex(cursorIndex + 1);
      }
    }
  };

  const onNormal = (key: string) => {
    switch (key) {
      case "d": {
        setValue("");
        setCursorIndex(0);
        break;
      }
      case "i": {
        setMode("INSERT");
        break;
      }
      case "0": {
        setCursorIndex(0);
        break;
      }
      case "$": {
        setCursorIndex(value.length - 1);
        break;
      }
      case "I": {
        setMode("INSERT");
        setCursorIndex(value.length);
        break;
      }
      case "h": {
        if (cursorIndex > 0) {
          setCursorIndex(cursorIndex - 1);
        }
        break;
      }
      case "l": {
        if (cursorIndex < value.length - 1) {
          setCursorIndex(cursorIndex + 1);
        }
        break;
      }
    }
  };

  return (
    <Container tabIndex={0} onKeyDown={onKeyDown}>
      <Input value={value} cursorIndex={cursorIndex} />
      <Status mode={mode} cursorIndex={cursorIndex} />
    </Container>
  );
};
