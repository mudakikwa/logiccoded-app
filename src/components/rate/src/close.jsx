import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideRate } from '../../../redux/panelStates';

export default function Close() {
  const dispatch = useDispatch();
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.828"
        height="20.828"
        viewBox="0 0 20.828 20.828"
        onClick={(e) => {
          e.preventDefault();
          dispatch(hideRate());
        }}
      >
        <g
          id="Group_72"
          data-name="Group 72"
          transform="translate(-1267.722 -408.722)"
        >
          <line
            id="Line_13"
            data-name="Line 13"
            y2="25.456"
            transform="translate(1269.136 410.136) rotate(-45)"
            fill="none"
            stroke="#d2ded2"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <line
            id="Line_14"
            data-name="Line 14"
            y2="25.456"
            transform="translate(1287.136 410.136) rotate(45)"
            fill="none"
            stroke="#d2ded2"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}
