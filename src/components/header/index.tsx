import React from 'react';

import './index.scss';

import Logo from './src/logo.svg';

export default function Header() {
  return (
    <div className="container-fluid" id="header">
      <div className="row d-flex justify-content-between">
        <div className="col-md-2 px-0">
          <img src={Logo} alt="logic coded icon" />
        </div>
        <div className="col-md-2 ">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-end px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
              >
                <g
                  id="Group_11"
                  data-name="Group 11"
                  transform="translate(-1638.287 -30.457)"
                >
                  <g
                    id="Icon_feather-settings"
                    data-name="Icon feather-settings"
                    transform="translate(1638.787 30.957)"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M21.682,17.591A4.091,4.091,0,1,1,17.591,13.5,4.091,4.091,0,0,1,21.682,17.591Z"
                      transform="translate(-2.591 -2.591)"
                      fill="none"
                      stroke="#D2DED2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M26.591,20.591a2.25,2.25,0,0,0,.45,2.482l.082.082a2.729,2.729,0,1,1-3.859,3.859l-.082-.082a2.268,2.268,0,0,0-3.845,1.609v.232a2.727,2.727,0,0,1-5.455,0V28.65a2.25,2.25,0,0,0-1.473-2.059,2.25,2.25,0,0,0-2.482.45l-.082.082a2.729,2.729,0,1,1-3.859-3.859l.082-.082a2.268,2.268,0,0,0-1.609-3.845H4.227a2.727,2.727,0,1,1,0-5.455H4.35a2.25,2.25,0,0,0,2.059-1.473,2.25,2.25,0,0,0-.45-2.482l-.082-.082A2.729,2.729,0,1,1,9.736,5.986l.082.082a2.25,2.25,0,0,0,2.482.45h.109a2.25,2.25,0,0,0,1.364-2.059V4.227a2.727,2.727,0,1,1,5.455,0V4.35a2.268,2.268,0,0,0,3.845,1.609l.082-.082a2.729,2.729,0,1,1,3.859,3.859l-.082.082a2.25,2.25,0,0,0-.45,2.482v.109a2.25,2.25,0,0,0,2.059,1.364h.232a2.727,2.727,0,0,1,0,5.455H28.65a2.25,2.25,0,0,0-2.059,1.364Z"
                      transform="translate(-1.5 -1.5)"
                      fill="none"
                      stroke="#D2DED2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-4 d-flex justify-content-end px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.205"
                height="31.22"
                viewBox="0 0 31.205 31.22"
              >
                <g
                  id="Icon_feather-feather"
                  data-name="Icon feather-feather"
                  transform="translate(-2.293 -2.487)"
                >
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M30.36,18.36A9.005,9.005,0,1,0,17.625,5.625L7.5,15.75V28.5H20.25Z"
                    fill="none"
                    stroke="#D2DED2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M24,12,3,33"
                    fill="none"
                    stroke="#D2DED2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M26.25,22.5H13.5"
                    fill="none"
                    stroke="#D2DED2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            <div className="col-md-4 d-flex justify-content-end px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.996"
                height="31"
                viewBox="0 0 27.996 31"
              >
                <g
                  id="Icon_feather-power"
                  data-name="Icon feather-power"
                  transform="translate(-3.993 -2.5)"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M27.537,9.96a13.5,13.5,0,1,1-19.092,0"
                    transform="translate(0 -0.001)"
                    fill="none"
                    stroke="#D2DED2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M18,3V18"
                    transform="translate(-0.002)"
                    fill="none"
                    stroke="#D2DED2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
