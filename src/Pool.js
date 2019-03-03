import React from "react";
import styled from '@emotion/styled';
import { getState } from './state';

function Pool() {
  const [{ pool }] = getState();

  return (
    <StyledPool height={pool.height} color={pool.color}></StyledPool>
  );
}

const StyledPool = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transition 0.3s height linear, 0.3s background-color ease-out;
  z-index: 10;
  background-color: ${({ color }) => color};
  height: ${({ height }) => `${height}px`};
`;

export default Pool;