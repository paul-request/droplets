import React, { useState } from "react";
import Droplet from './Droplet';
import Pool from './Pool';
import ControlPanel from './ControlPanel';
import useWindowSize from '@rehooks/window-size';
import useInterval from './useInterval';
import useScreenHeight from './useScreenHeight';
import styled from '@emotion/styled';
import { getState } from './state';

function Droplets() {
  const windowSize = useWindowSize();
  const screenHeight = useScreenHeight();
  const [{ pool }, dispatch] = getState();
  const [diameter] = useState(10);
  const [droplets, setDroplets] = useState(() => [{ ...generateDroplet() }]);

  function isFull() {
    return pool.height >= screenHeight;
  }

  function generateLeftOffset(width) {
    return (Math.floor(Math.random() * windowSize.innerWidth) + 1) - (width / 2);
  }

  function getSize() {
    return Math.floor(Math.random() * 5) + 1;
  }

  function generateDroplet() {
    const size = getSize();

    return {
      size,
      height: (diameter * 1.5) * size,
      width: diameter * size,
      offset: generateLeftOffset(diameter),
      duration: (2000 / size) // milliseconds
    };
  };

  function reset() {
    dispatch({ type: 'RESET_POOL' });
    setDroplets([]);
  }

  useInterval(() => {
    const droplet = generateDroplet();

    setDroplets([
      ...droplets,
      { ...droplet }
    ]);
  }, isFull() ? null : 200);

  return (
    <StyledDroplets>
      {droplets.map((droplet, index) => (
        <Droplet
          key={index}
          droplet={droplet}
        />
      ))}
      
      <Pool />

      <ControlPanel />
      
      <StyledButton
        onClick={() => reset()}
      >
        Reset
      </StyledButton>
    </StyledDroplets>
  );
}

const StyledDroplets = styled.div`
  position: relative;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
`;

const StyledButton = styled.button`
  z-index: 10;
  background: #fff;
  color: #000;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 3px 6px;
  margin: 0;
  position: absolute;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export default Droplets;
