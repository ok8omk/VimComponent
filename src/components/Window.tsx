import * as React from "react";
import styled from "@emotion/styled";
import { Input } from "./Input";
import { Status } from "./Status";
import useVi from "./useVi";

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

export const Window: React.FC = () => {
  const [state, dispatch] = useVi();

  const onKeyDown = (event: React.KeyboardEvent) => {
    console.log(event.key);
    dispatch({ key: event.key });
  };

  return (
    <Container tabIndex={0} onKeyDown={onKeyDown}>
      <Input value={state.value} cursorIndex={state.cursorIndex} />
      <Status mode={state.mode} cursorIndex={state.cursorIndex} />
    </Container>
  );
};
