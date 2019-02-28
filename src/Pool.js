import React from "react";
import styled from '@emotion/styled';

function Pool({ height, color }) {
    return (
      <StyledPool height={height} color={color.value}></StyledPool>
    );
}

const StyledPool = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition 0.5s height linear, 0.3s background-color ease-out;
    z-index: 10;
    background-color: ${({ color }) => color};
    height: ${({ height }) => `${height}px`};
`;

export default Pool;