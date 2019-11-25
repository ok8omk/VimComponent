import * as React from "react";
import styled from "@emotion/styled";

type Type = {
  value: string;
  cursorIndex: number;
};

const Wrapper = styled.div`
  width: 100%;
  height: 1em;
  font-size: 24px;
`;

const Cursor = styled.span`
  background-color: #fff;
  color: #000;
`;

const ValueWithCursor: React.FC<Type> = ({ value, cursorIndex }) => {
  if (value.length === 0) return <Cursor>&nbsp;</Cursor>;
  return (
    <>
      {Array.prototype.map.call(value, (x: string, index: number) => {
        if (index == cursorIndex) {
          return <Cursor>{x}</Cursor>;
        } else {
          return x;
        }
      })}
      {cursorIndex === value.length && <Cursor>&nbsp;</Cursor>}
    </>
  );
};

export const Input: React.FC<Type> = ({ value, cursorIndex }) => {
  return (
    <Wrapper>
      <ValueWithCursor value={value} cursorIndex={cursorIndex} />
    </Wrapper>
  );
};
