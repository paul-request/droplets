import React, { useState } from "react";
import ColorSelector from './ColorSelector';
import styled from '@emotion/styled';
import { shadow, access } from './theme';

function ControlPanel() {
  const [hidden, setHidden] = useState(true);

  function toggle() {
    setHidden(!hidden);
  }

  return (
    <StyledControlPanel isHidden={hidden}>
      <StyledToggleButton isHidden={hidden} onClick={toggle}>
        <span className="access">Toggle control panel</span>
        <span className="toggle toggle-off">&lt;&lt;</span>
        <span className="toggle toggle-on">&gt;&gt;</span>
      </StyledToggleButton>

      <StyledControlPanelOptions>
        <h2 className="option-title">Droplet color</h2>
        <ColorSelector></ColorSelector>
      </StyledControlPanelOptions>
    </StyledControlPanel>
  );
}

const StyledControlPanel = styled.section`
  position: relative;
  width: 150px;
  top: 30px;
  left: 0;
  z-index: 20;
  transition: left 0.3s ease-in-out;
  left: ${({ isHidden }) => isHidden ? '-150px' : '0'};
`;

const StyledToggleButton = styled.button`
  ${shadow};
  border-radius: 0 2px 2px 0;
  appearance: none;
  background: #fff;
  position: absolute;
  right: -60px;
  top: 0;
  width: 60px;
  height: 62px;
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
    ${access};
  }

  .toggle {
    border-radius: 0 2px 2px 0;
    position: relative;
    display: block;
    width: 60px;
    height: 62px;
    transform: translateX(-4px);
    background: #fff;
    padding: 0 0 0 4px;
    line-height: 62px;
  }

  .toggle-off {
    display: ${({ isHidden }) => isHidden ? 'none' : 'block'};
  }

  .toggle-on {
    display: ${({ isHidden }) => isHidden ? 'block' : 'none'};
  }
`;

const StyledControlPanelOptions = styled.section`
  ${shadow};
  position: relative;
  border-radius: 2px;
  background: #fff;
  color: #222;
  width: 150px;
  padding: 16px;
  margin: 0;
  z-index: 21;

  .option-title {
    ${access};
  }
`;

export default ControlPanel;