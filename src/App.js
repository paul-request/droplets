import React, { useState } from "react";
import Droplet from './Droplet';
import Pool from './Pool';
import './App.css';

function App() {
  const getSize = () => Math.floor(Math.random() * 5) + 1;
  const [config] = useState({
    droplets: 5,
    color: 'rgb(66, 158, 244)',
    height: 15,
    width: 10
  });
  const [fill, setFill] = useState(0);
  const generateDroplets = () => {
    return Array.from({ length: config.droplets }, () => {
      const size = getSize();
      return {
        size,
        color: config.color,
        height: config.height * size,
        width: config.width * size
      };
    });
  }
  const [droplets] = useState([ ...generateDroplets() ]);

  const fillPool = (drop) => setFill(fill + drop);

  return (
    <div className="droplets">
      {droplets.map((droplet, index) => (
        <Droplet
          key={index}
          index={index}
          droplet={droplet}
          fillPool={fillPool}
        />
      ))}
    
      <Pool color={config.color} height={fill}></Pool>
    </div>
  );
}

export default App;
