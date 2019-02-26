import React, { useState } from "react";
import useWindowSize from '@rehooks/window-size';
import './Droplet.css';
import { ReactComponent as Raindrop } from './raindrop.svg';
import useInterval from './useInterval';

function Droplet({ droplet, index, fillPool }) {
    // Using keyframes means the drop is always 100vh, whereas it shouldbe 100vh - height of pool
    // Need to get pool height here to work out drop height, so maybe from stlre like in article
    // Then compare it, and if it is >= to window height, then set interval to null

    const [drip, setDrip] = useState(droplet);
    const windowSize = useWindowSize();
    const generateLeftOffset = () => Math.floor(Math.random() * windowSize.innerWidth) + 1;
    const [leftOffset, setLeftOffset] = useState(generateLeftOffset());
    const duration = 2000 / drip.size;
    // TODO remove once we get the pool height from store in here
    const [count, setCount] = useState(0);

    useInterval(() => {
        fillPool(drip.size);
        setLeftOffset(generateLeftOffset());
        setCount(count + 1);
    }, count > 10 ? null : duration);

    return (
        <div
            className="droplet"
            style={{
                left: `${leftOffset}px`,
                top: `-${drip.height}px`,
                width: `${drip.width}px`,
                height: `${drip.height}px`,
                fill: drip.color,
                animationDuration: `${duration}ms`
            }}
        >
            <Raindrop height={drip.height} width={drip.width} fill={drip.color} />
        </div>
    );
}

export default Droplet;