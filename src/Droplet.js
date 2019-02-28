import React from "react";
import styled from '@emotion/styled';
import { ReactComponent as Raindrop } from './raindrop.svg';

function Droplet({ droplet }) {
    return (
        <StyledDroplet droplet={droplet}>
            <Raindrop height={droplet.height} width={droplet.width} fill={droplet.color.value} />
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
    fill: ${({ droplet }) => droplet.color.value};
    animation-duration: ${({ droplet }) => `${droplet.duration}ms`};
    z-index: ${({ droplet }) => droplet.size};
    transition: color 0.3s ease-out;
`;

export default Droplet;