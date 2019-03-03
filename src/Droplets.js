import React, { useState } from "react";
import Droplet from './Droplet';
import Pool from './Pool';
import ControlPanel from './ControlPanel';
import useWindowSize from '@rehooks/window-size';
import useInterval from './useInterval';
import styled from '@emotion/styled';
import { getState } from './state';

function Droplets() {
  const windowSize = useWindowSize();
  const [{ pool }] = getState();
  const [diameter] = useState(10);
  const [droplets, setDroplets] = useState(() => [{ ...generateDroplet() }]);

  function isFull() {
    return pool.height >= windowSize.innerHeight;
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
    </StyledDroplets>
  );
}

const StyledDroplets = styled.div`
  position: relative;
  height: 100vh;
`;

export default Droplets;
