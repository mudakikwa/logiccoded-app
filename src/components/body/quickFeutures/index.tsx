import React from 'react';
import Server from './src/server.svg';
import './index.scss';

export default function QuickFeutures() {
  return (
    <div className="row" id="quickFeutures">
      <div className="col-md-12">
        <h5>Quick feutures</h5>
        <div className="btn btn-primary">
          <span>
            <img src={Server} alt="" className="server-image" />
          </span>
          <span>Launch live server</span>
        </div>
        <h5>Quick settings</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div><div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div><div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <h5 className="consumption">Consumption Rate</h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="315"
          height="315"
          viewBox="0 0 315 315"
        >
          <g
            id="Group_16"
            data-name="Group 16"
            transform="translate(-1442 -685)"
          >
            <g
              id="Ellipse_8"
              data-name="Ellipse 8"
              transform="translate(1442 685)"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="4 18"
            >
              <circle cx="157.5" cy="157.5" r="157.5" stroke="none" />
              <circle cx="157.5" cy="157.5" r="147.5" fill="none" />
            </g>
            <text
              id="_70_"
              data-name="70%"
              transform="translate(1517 875)"
              fill="#7171ff"
              fontSize="83"
              fontFamily="NotoSans-Bold, Noto Sans"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                70%
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
