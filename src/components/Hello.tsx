import * as React from "react";
import styled from "@emotion/styled";

const Header = styled.h1`
  color: black;
`;

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <Header>
    Hello from {props.compiler} and {props.framework}!
  </Header>
);
