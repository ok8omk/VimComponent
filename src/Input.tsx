import * as React from "react";
import styled from "@emotion/styled";

type ValueWithCursorProps = {
  value: string;
  cursorIndex: number;
};

const Wrapper = styled.div`
  width: 100%;
  height: 1em;
`;

const Cursor = styled.span`
  background-color: #fff;
  color: #000;
`;

const ValueWithCursor: React.FC<ValueWithCursorProps> = ({
  value,
  cursorIndex
}) => {
  if (value.length === 0) return <Cursor>&nbsp;</Cursor>;
  return (
    <>
      {Array.prototype.map.call(value, (x: string, index: number) => {
        if (index == cursorIndex) {
          if (x == " ") {
            return <Cursor>&nbsp;</Cursor>;
          } else {
            return <Cursor>{x}</Cursor>;
          }
        } else {
          if (x == " ") {
            return <>&nbsp;</>;
          } else {
            return <>{x}</>;
          }
        }
      })}
      {cursorIndex === value.length && <Cursor>&nbsp;</Cursor>}
    </>
  );
};

type Props = {
  name: string;
} & ValueWithCursorProps;

export const Input: React.FC<Props> = ({ name, value, cursorIndex }) => {
  return (
    <Wrapper>
      <ValueWithCursor value={value} cursorIndex={cursorIndex} />
      <input type="hidden" name={name} value={value} />
    </Wrapper>
  );
};
