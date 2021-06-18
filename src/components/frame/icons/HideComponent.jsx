/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * */

import React from 'react';
import { remote } from 'electron';

const HideComponent = () => {
  const getWindow = () => remote.BrowserWindow.getFocusedWindow();
  return (
    <svg
      width={23.558}
      height={22.828}
      viewBox="0 0 23.558 22.828"
      onClick={(e) => {
        e.preventDefault();
        getWindow().minimize();
      }}
    >
      <defs>
        <style>
          {
            '.a,.b{fill:none;stroke:#d2ded2;stroke-miterlimit:10;stroke-width:2px;}.b{stroke-linecap:square;}'
          }
        </style>
      </defs>
      <g transform="translate(0.061 -0.586)">
        <path
          className="a"
          d="M6.268,18.591a19.756,19.756,0,0,1-4.97-4.6,1.384,1.384,0,0,1-.006-1.693C2.736,10.4,6.639,6,11.72,6a10.389,10.389,0,0,1,5.447,1.691"
          transform="translate(0 -1.143)"
        />
        <path
          className="b"
          d="M22.714,10.923A21.611,21.611,0,0,1,25.279,13.7a1.384,1.384,0,0,1,0,1.7c-1.464,1.894-5.4,6.293-10.418,6.293A9.174,9.174,0,0,1,12,21.222"
          transform="translate(-3.141 -2.549)"
        />
        <path
          className="a"
          d="M11.261,17.316a4.286,4.286,0,1,1,6.059-6.064"
          transform="translate(-2.571 -2.285)"
        />
        <path
          className="b"
          d="M19.945,15A4.289,4.289,0,0,1,15,19.94"
          transform="translate(-3.998 -3.714)"
        />
        <line className="b" y1={20} x2={20} transform="translate(1.716 2)" />
      </g>
    </svg>
  );
};

export default HideComponent;
