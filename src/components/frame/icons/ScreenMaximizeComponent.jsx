/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 * */

import React from 'react';
import { remote } from 'electron';

const ScreenMaximizeComponent = () => {
  const getWindow = () => remote.BrowserWindow.getFocusedWindow();
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      onClick={(e) => {
        e.preventDefault();
        const window = getWindow();
        window.isMaximized() ? window.unmaximize() : window.maximize();
      }}
    >
      <defs>
        <style>
          {
            '.a{fill:none;stroke:#d2ded2;stroke-linecap:square;stroke-miterlimit:10;stroke-width:2px;}'
          }
        </style>
      </defs>
      <g transform="translate(-4 -4)">
        <path
          className="a"
          d="M5,10.926V6.852A1.852,1.852,0,0,1,6.852,5h4.074"
        />
        <path
          className="a"
          d="M43,5h4.074a1.852,1.852,0,0,1,1.852,1.852v4.074"
          transform="translate(-23.926)"
        />
        <path
          className="a"
          d="M48.926,43v4.074a1.852,1.852,0,0,1-1.852,1.852H43"
          transform="translate(-23.926 -23.926)"
        />
        <path
          className="a"
          d="M10.926,48.926H6.852A1.852,1.852,0,0,1,5,47.074V43"
          transform="translate(0 -23.926)"
        />
        <rect
          className="a"
          width={10.37}
          height={5.926}
          transform="translate(9.815 12.037)"
        />
      </g>
    </svg>
  );
};

export default ScreenMaximizeComponent;
