import React from "react";
import styled from '@emotion/styled';
import { getState, getSelectedColor } from './state';
import useTimeout from './useTimeout';
import { ReactComponent as Raindrop } from './raindrop.svg';

function Droplet({ droplet }) {
  const color = getSelectedColor();
  const [, dispatch] = getState();

  useTimeout(() => {
    //TODO: potentially dont even use pool, work out the height offset and transform the
    // droplet into a full-width div with size as height?
    dispatch({
      type: 'FILL_POOL',
      payload: {
        value: droplet.size * 3,
        color: droplet.color
      }
    });
  }, droplet.duration);

  return (
    <StyledDroplet droplet={droplet}>
      <Raindrop height={droplet.height} width={droplet.width} fill={color.value} />
    </StyledDroplet>
  );
}

const StyledDroplet = styled.div`
  position: absolute;
  animation-name: raindrop;
  animation-timing-function: cubic-bezier(1,0,.91,.19);
  animation-iteration-count: 1;
  left: ${({ droplet }) => `${droplet.offset}px`};
  top: ${({ droplet }) => `-${droplet.height}px`};
  width: ${({ droplet }) => `${droplet.width}px`};
  height: ${({ droplet }) => `${droplet.height}px`};
  animation-duration: ${({ droplet }) => `${droplet.duration}ms`};
  z-index: ${({ droplet }) => droplet.size};
  transition: color 0.3s ease-out;
`;

export default Droplet;