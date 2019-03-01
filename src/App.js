import React, { useState } from "react";
import Droplet from './Droplet';
import Pool from './Pool';
import ControlPanel from './ControlPanel';
import useWindowSize from '@rehooks/window-size';
import useInterval from './useInterval';
import styled from '@emotion/styled';
import { COLORS } from './constants';

function App() {
  const windowSize = useWindowSize();
  const generateLeftOffset = (width) => (Math.floor(Math.random() * windowSize.innerWidth) + 1) - (width / 2);
  const getSize = () => Math.floor(Math.random() * 5) + 1;
  const [color, setColor] = useState(COLORS[0]);
  const [diameter, setDiameter] = useState(10);
  const generateDroplet = () => {
    const size = getSize();
    return {
      size,
      color,
      height: (diameter * 1.5) * size,
      width: diameter * size,
      offset: generateLeftOffset(diameter),
      duration: (2000 / size) // milliseconds
    };
  };
  const [fill, setFill] = useState(0);
  const [droplets, setDroplets] = useState(() => [{ ...generateDroplet() }]);

  const fillPool = (drop) => {
    setFill((fill + (drop * 3)));
  };
  const isFull = () => fill >= windowSize.innerHeight;

  useInterval(() => {
    const droplet = generateDroplet();
    setDroplets([
      ...droplets,
      { ...droplet }
    ]);
    fillPool(droplet.size);
  }, isFull() ? null : 200);

  return (
    <StyledDroplets>
      {droplets.map((droplet, index) => (
        <Droplet
          key={index}
          droplet={droplet}
          fillPool={fillPool}
        />
      ))}
    
      <Pool
        color={color}
        height={fill}
      />

      <ControlPanel
        setColor={setColor}
        color={color}
        diameter={diameter}
      />
    </StyledDroplets>
  );
}

const StyledDroplets = styled.div`
  position: relative;
  height: 100vh;
`;

export default App;
