import React, { useState } from "react";
import { COLORS } from './constants';
import styled from '@emotion/styled';

function ControlPanel({ color, diameter, setColor }) {
    const [hidden, setHidden] = useState(true);

    function toggle() {
        setHidden(!hidden);
    }

    return (
        <StyledControlPanel color={color} diameter={diameter} isHidden={hidden}>
            <button onClick={toggle}>Toggle control panel</button>

            <ul className="colors">
                {COLORS.map((color, index) => (
                    <li key={index} onClick={() => setColor(color)}>{color.name}</li>
                ))}
            </ul>
        </StyledControlPanel>
    );
}

const StyledControlPanel = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    

    .colors {
        position: absolute;
        background: #fff;
        color: #222;
        width: 200px;
        height: 200px;
        left: -200px;
        top: 30px;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.15);
        transoition: left 0.3s ease-in-out;
        left: ${({ isHidden }) => isHidden ? '-200px' : '0'};
    }
`;

export default ControlPanel;