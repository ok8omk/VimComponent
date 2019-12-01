import * as React from "react";
import styled from "@emotion/styled";
import { Mode } from "./types";

type StatusType = {
  mode: Mode;
};

const StyledWrapper = styled.div`
  height: 1em;
  color: #fff;
  caret-color: #fff;
  background-color: #000;
`;

export const Status: React.FC<StatusType> = ({ mode }) => {
  return <StyledWrapper>--{mode}--</StyledWrapper>;
};
