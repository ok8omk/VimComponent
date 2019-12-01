import * as React from "react";
import styled from "@emotion/styled";

type Mode = "INSERT" | "NORMAL";

type StatusType = {
  mode: Mode;
  cursorIndex: number;
};

const StyledWrapper = styled.div`
  height: 1em;
  font-size: 24px;
  color: #fff;
  font-family: "Inconsolata", monospace;
  caret-color: #fff;
  background-color: #000;
`;

export const Status: React.FC<StatusType> = ({ mode, cursorIndex }) => {
  return <StyledWrapper>--{mode}--</StyledWrapper>;
};
