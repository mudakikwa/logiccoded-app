import React from 'react';
import Python from './src/python.png';
import CheckSquare from './src/check-square.svg';
import Globe from './src/globe.svg';

import QuickFeutures from './quickFeutures/index';

import './index.scss';

export default function Body() {
  return (
    <div className="col-md-11" id="body">
      <h4 className="mx-0 px-0">Rendered codes</h4>
      <div className="row mx-0 px-0">
        <div className="col-md-8 code-indicator px-0 ">
          <div className="row mx-0 code-card">
            <div className="col-md-3 px-0 icon">
              <div
                className="coding-icon"
                style={{ backgroundImage: `url("${Python}")` }}
              />
            </div>
            <div className="col-md-9 px-0">
              <div className="row d-flex justify-content-between mx-0 px-0">
                <div className="col-md-9 px-0">
                  <h5 className="title">creating a component using react</h5>
                </div>
                <div className="col-md-3 px-0 d-flex justify-content-end">
                  <img src={CheckSquare} alt="" className="status" />
                </div>
              </div>
              <div className="row mx-0 px-0">
                <h6 className="px-0 mx-0 description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit.
                </h6>
              </div>
              <div className="row d-flex justify-content-between mx-0 px-0">
                <div className="col-md-6 d-flex justify-content-start px-0">
                  <img src={Globe} alt="" className="source" />
                  <h6 className="source-website">
                    tutorailpoint.com,w3schools
                  </h6>
                </div>
                <div>
                  <h1 className="numbering">01</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0  code-card">
            <div className="col-md-3 px-0 icon">
              <div
                className="coding-icon"
                style={{ backgroundImage: `url("${Python}")` }}
              />
            </div>
            <div className="col-md-9 px-0">
              <div className="row d-flex justify-content-between mx-0 px-0">
                <div className="col-md-9 px-0">
                  <h5 className="title">creating a component using react</h5>
                </div>
                <div className="col-md-3 px-0 d-flex justify-content-end">
                  <img src={CheckSquare} alt="" className="status" />
                </div>
              </div>
              <div className="row mx-0 px-0">
                <h6 className="px-0 mx-0 description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit.
                </h6>
              </div>
              <div className="row d-flex justify-content-between mx-0 px-0">
                <div className="col-md-6 d-flex justify-content-start px-0">
                  <img src={Globe} alt="" className="source" />
                  <h6 className="source-website">
                    tutorailpoint.com,w3schools
                  </h6>
                </div>
                <div>
                  <h1 className="numbering">01</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <QuickFeutures />
        </div>
      </div>
    </div>
  );
}
