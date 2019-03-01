import React, { useState } from "react";
import { COLORS } from './constants';
import styled from '@emotion/styled';
import { shadow } from './theme';

function ControlPanel({ color, diameter, setColor }) {
    const [hidden, setHidden] = useState(true);

    function toggle() {
        setHidden(!hidden);
    }

    return (
        <StyledControlPanel color={color} diameter={diameter} isHidden={hidden}>
            <button onClick={toggle}>
                <span className="access">Toggle control panel</span>
                <span className="toggle toggle-off">&lt;&lt;</span>
                <span className="toggle toggle-on">&gt;&gt;</span>
            </button>

            <ul className="colors">
                {COLORS.map((color, index) => (
                    <li key={index} onClick={() => setColor(color)}>{color.name}</li>
                ))}
            </ul>
        </StyledControlPanel>
    );
}

const StyledControlPanel = styled.div`
    position: relative;
    width: 200px;
    top: 30px;
    left: 0;
    z-index: 20;
    transition: left 0.3s ease-in-out;
    left: ${({ isHidden }) => isHidden ? '-200px' : '0'};

    button {
        ${shadow};
        border-radius: 0 2px 2px 0;
        appearance: none;
        background: #fff;
        position: absolute;
        right: -60px;
        top: 0;
        width: 60px;
        height: 60px;
        color: #222;
        cursor: pointer;
        z-index: 22;
        padding: 0;
        margin: 0;
        border: 0;

        &:focus {
            outline: 0;
        }

        .access {
            display: none;
        }

        .menu-join {
            display: block;
            width: 62px;
            height: 60px;
            transform: translateX(-12px);
            background: #fff;
        }

        .toggle-off {
            display: ${({ isHidden }) => isHidden ? 'none' : 'block'};
        }

        .toggle-on {
            display: ${({ isHidden }) => isHidden ? 'block' : 'none'};
        }
    }

    .colors {
        ${shadow};
        position: relative;
        border-radius: 2px;
        background: #fff;
        color: #222;
        width: 200px;
        padding: 0;
        margin: 0;
        z-index: 21;
        min-height: 200px;
    }
`;

export default ControlPanel;