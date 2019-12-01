import * as React from "react";
import styled from "@emotion/styled";
import { Input } from "./Input";
import { Status } from "./Status";
import useVi from "./useVi";

type StyledProps = {
  width?: number;
  fontSize?: number;
  fontFamilies?: Array<string>;
};

const Container = styled.div`
  border: solid 1px #000;
  font-size: ${(props: StyledProps) => props.fontSize}px;
  width: ${(props: StyledProps) => props.width}px;
  height: 2em;
  display: inline-flex;
  flex-direction: column;
  font-family: ${(props: StyledProps) =>
    props.fontFamilies.map((fontFamily, index) => {
      return index === props.fontFamilies.length - 1
        ? `"${fontFamily}"`
        : `"${fontFamily}", `;
    })};
  background-color: #000;
  color: #fff;
`;

type Props = { name: string } & StyledProps;

/**
 * [Vinput]
 * @param  {string} [name]                         Input name props.
 * @param  {number} [width=500]                    Component width.
 * @param  {number} [fontSize=24]                  Component font size.
 * @param  {string} [fontFamilies=["Inconsolata"]] Component font families. monospace fonts are recommended.
 */

const Vinput: React.FC<Props> = ({
  name,
  width = 500,
  fontSize = 24,
  fontFamilies = ["Inconsolata"]
}) => {
  const [state, dispatch] = useVi();

  const onKeyDown = (event: React.KeyboardEvent) => {
    dispatch({ key: event.key });
  };

  return (
    <Container
      tabIndex={0}
      onKeyDown={onKeyDown}
      width={width}
      fontSize={fontSize}
      fontFamilies={fontFamilies}
    >
      <Input name={name} value={state.value} cursorIndex={state.cursorIndex} />
      <Status mode={state.mode} cursorIndex={state.cursorIndex} />
    </Container>
  );
};

export default Vinput;
