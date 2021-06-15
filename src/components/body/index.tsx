import React from 'react';
import Python from './src/python.png';
import CheckSquare from './src/check-square.svg';
import ReactIcon from './src/react.svg';
import Django from './src/django.svg';
import boostrap from './src/boostrap.svg';
import vue from './src/vue.svg';
import ruby from './src/ruby.svg';

import QuickFeutures from './quickFeutures/index';

import './index.scss';

export default function Body() {
  return (
    <div className="col-md-11" id="body">
      <div className="row mx-0 px-0">
        <div className="col-md-8 ">
          <h4 className="mx-0 px-0">Rendered codes</h4>
          <div className="code-indicator">
            <div className="row mx-0 code-card">
              <div className="col-md-2 px-0 icon">
                <div className="coding-icon">
                  <img src={ReactIcon} alt="" />
                </div>
              </div>
              <div className="col-md-10 px-0">
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
                  </h6>
                </div>
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-6 d-flex justify-content-start px-0" />
                  <div>
                    <h1 className="numbering">01</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 code-card">
              <div className="col-md-2 px-0 icon">
                <div className="coding-icon">
                  <img src={Django} alt="" />
                </div>
              </div>
              <div className="col-md-10 px-0">
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-9 px-0">
                    <h5 className="title">Django Project Setup</h5>
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
                  </h6>
                </div>
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-6 d-flex justify-content-start px-0" />
                  <div>
                    <h1 className="numbering">02</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 code-card">
              <div className="col-md-2 px-0 icon">
                <div className="coding-icon">
                  <img src={boostrap} alt="" />
                </div>
              </div>
              <div className="col-md-10 px-0">
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-9 px-0">
                    <h5 className="title">Boostrap Container</h5>
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
                  </h6>
                </div>
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-6 d-flex justify-content-start px-0" />
                  <div>
                    <h1 className="numbering">03</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 code-card">
              <div className="col-md-2 px-0 icon">
                <div className="coding-icon">
                  <img src={vue} alt="" />
                </div>
              </div>
              <div className="col-md-10 px-0">
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-9 px-0">
                    <h5 className="title">Vue Component Setup</h5>
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
                  </h6>
                </div>
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-6 d-flex justify-content-start px-0" />
                  <div>
                    <h1 className="numbering">04</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 code-card">
              <div className="col-md-2 px-0 icon">
                <div className="coding-icon">
                  <img src={ruby} alt="" />
                </div>
              </div>
              <div className="col-md-10 px-0">
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-9 px-0">
                    <h5 className="title">Ruby On Rails Put Request</h5>
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
                  </h6>
                </div>
                <div className="row d-flex justify-content-between mx-0 px-0">
                  <div className="col-md-6 d-flex justify-content-start px-0" />
                  <div>
                    <h1 className="numbering">05</h1>
                  </div>
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
