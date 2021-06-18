/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * */

import React from 'react';
import { useDispatch } from 'react-redux';
import { hideShutDown } from '../../../redux/panelStates';

const GroupComponent = () => {
  const dispatch = useDispatch();
  return (
    <svg
      width={20.828}
      height={20.828}
      viewBox="0 0 20.828 20.828"
      onClick={(e) => {
        e.preventDefault();
        dispatch(hideShutDown())
      }}
    >
      <defs>
        <style>
          {
            '.a{fill:none;stroke:#d2ded2;stroke-linecap:round;stroke-width:2px;}'
          }
        </style>
      </defs>
      <g transform="translate(-1267.722 -408.722)">
        <line
          className="a"
          y2={25.456}
          transform="translate(1269.136 410.136) rotate(-45)"
        />
        <line
          className="a"
          y2={25.456}
          transform="translate(1287.136 410.136) rotate(45)"
        />
      </g>
    </svg>
  );
};

export default GroupComponent;
