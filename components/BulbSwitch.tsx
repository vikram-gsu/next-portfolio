import React from 'react';
import styled from 'styled-components';

type SwitchStylesProps = {
  checked: boolean;
};
const SwitchStyles = styled.div<SwitchStylesProps>`
  padding-right: 2em;
  .react-switch-checkbox {
    visibility: hidden;
    display: none;
  }

  .react-switch-label {
    svg {
      // transform: scale(0.5);
      fill: ${props => (props.checked ? props.theme.dark : props.theme.light)};
    }
    @media (max-width: 1300px) {
      width: 50px;
      height: 25px;
      border-radius: 25px;
    }
    @media (max-width: 700px) {
      width: 50px;
      height: 25px;
      border-radius: 25px;
    }
  }
`;
type SwitchProps = {
  checked: boolean;
  handleThemeChange: (e: React.ChangeEvent) => void;
};
const BulbSwitch = ({ checked, handleThemeChange }: SwitchProps) => {
  return (
    <SwitchStyles checked={checked}>
      <input
        className="react-switch-checkbox"
        id="theme"
        type="checkbox"
        checked={checked}
        onChange={handleThemeChange}
      />
      <label className="react-switch-label" htmlFor="theme">
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="5rem"
          height="5rem"
        >
          <g>
            <path
              d="M374.031,241.75c-6.671-54.43-49.629-97.28-104.076-103.813c-4.688-0.535-9.402-0.803-14.121-0.804
				c-48.118,0.074-91.444,29.154-109.742,73.657c-18.298,44.503-7.957,95.649,26.193,129.548c18.16,17.391,28.56,41.357,28.857,66.5
				v13.733h109.714v-13.804c0.083-24.667,10.118-48.256,27.831-65.424c26.754-25.813,39.84-62.686,35.343-99.589V241.75z"
            />
            <path d="M256,512c11.62-0.013,21.975-7.335,25.862-18.286h-51.723C234.025,504.665,244.38,511.987,256,512z" />
            <path
              d="M210.286,466.286c0.007,5.047,4.096,9.136,9.143,9.143h73.143c5.047-0.007,9.136-4.096,9.143-9.143v-27.429h-91.429
				V466.286z"
            />
            {checked && (
              <g>
                <path
                  d="M256,82.286c10.099,0,18.286-8.187,18.286-18.286V18.286C274.286,8.187,266.099,0,256,0s-18.286,8.187-18.286,18.286V64
				C237.714,74.099,245.901,82.286,256,82.286z"
                />
                <path
                  d="M101.679,127.54c7.236,6.911,18.626,6.911,25.862,0c3.43-3.429,5.357-8.081,5.357-12.931
				c0-4.85-1.927-9.502-5.357-12.931L95.214,69.357C91.786,65.927,87.135,64,82.286,64s-9.5,1.927-12.929,5.357
				C65.927,72.785,64,77.436,64,82.286s1.927,9.5,5.357,12.929L101.679,127.54z"
                />
                <path
                  d="M82.286,256c0-10.099-8.187-18.286-18.286-18.286H18.286C8.191,237.724,0.01,245.905,0,256
				c0.01,10.095,8.191,18.276,18.286,18.286H64C74.099,274.286,82.286,266.099,82.286,256z"
                />
                <path
                  d="M119.356,379.699c-6.32-1.689-13.06,0.126-17.677,4.761l-32.321,32.326c-3.43,3.428-5.357,8.079-5.357,12.929
				s1.927,9.5,5.357,12.929c7.234,6.911,18.623,6.911,25.857,0l32.326-32.321c4.634-4.617,6.45-11.357,4.761-17.677
				S125.676,381.388,119.356,379.699z"
                />
                <path
                  d="M410.321,384.46c-4.617-4.634-11.357-6.45-17.677-4.761s-11.256,6.625-12.945,12.945s0.126,13.06,4.761,17.677
				l32.326,32.321c7.234,6.911,18.623,6.911,25.857,0c3.43-3.428,5.357-8.079,5.357-12.929s-1.927-9.5-5.357-12.929L410.321,384.46z
				"
                />
                <path
                  d="M493.714,237.714H448c-10.099,0-18.286,8.187-18.286,18.286s8.187,18.286,18.286,18.286h45.714
				c10.099,0,18.286-8.187,18.286-18.286S503.813,237.714,493.714,237.714z"
                />
                <path
                  d="M410.321,127.54l32.321-32.326c4.619-4.619,6.423-11.351,4.732-17.661c-1.691-6.31-6.619-11.238-12.929-12.929
				c-6.31-1.691-13.042,0.113-17.661,4.732l-32.326,32.321c-3.43,3.429-5.357,8.081-5.357,12.931c0,4.85,1.927,9.502,5.357,12.931
				C391.695,134.451,403.086,134.451,410.321,127.54z"
                />
              </g>
            )}
          </g>
        </svg>
      </label>
    </SwitchStyles>
  );
};

export default BulbSwitch;