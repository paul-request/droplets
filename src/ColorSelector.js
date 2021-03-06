import React from "react";
import styled from '@emotion/styled';
import { getState } from './state';


function ColorSelector() {
  const [{ colors }, dispatch] = getState();

  function setColor(color) {
    dispatch({
      type: 'SELECT_COLOR',
      payload: { ...color }
    });
  }

  return (
    <StyledColorList>
      {colors.map((color, index) => (
        <StyledColor key={index} color={color.value} selected={color.selected}>
          <button type="button" onClick={() => setColor(color)}>{color.name}</button>
        </StyledColor>
      ))}
    </StyledColorList>
  );
}

const StyledColorList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledColor = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;

  & ~ li {
    margin-left: 10px;
  }

  button {
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    text-indent: -9999em;
    width: 30px;
    height: 30px;
    border: 0;
    appearance: none;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ color, selected }) => selected ? '#222' : color};
    background-color: ${({ color }) => color};
    opacity: ${({ selected }) => selected ? 1 : 0.5};
  }
`;

export default ColorSelector;