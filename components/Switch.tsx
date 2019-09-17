import React from 'react';
import styled from 'styled-components';

const SwitchStyles = styled.div`
    .react-switch-checkbox {
        visibility: hidden;
        display: none;
    }

    .react-switch-label {
        display: flex;
        // align-items: flex-start;
        align-content: center;
        justify-content: space-between;
        position: relative;
        background: grey;
        width: 100px;
        height: 50px;
        border-radius: 50px;
        transition: 0.5s;
    }

    .react-switch-button {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 45px;
        height: 45px;
        border-radius: 45px;
        background: white;
        transition: 0.5s;
    }

    .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

`;

type SwitchProps = {
    checked: boolean;
    handleThemeChange: (e:React.ChangeEvent) => void
}
const Switch = ({checked=false, handleThemeChange}: SwitchProps) => (
  <SwitchStyles>
    <input className="react-switch-checkbox" id="theme" type="checkbox" checked={checked} onChange={handleThemeChange} />
    <label className="react-switch-label" htmlFor="theme">
      <span className={`react-switch-button`} />
    </label>
  </SwitchStyles>
);

export default Switch;