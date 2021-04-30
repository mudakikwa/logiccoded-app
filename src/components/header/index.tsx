import React from 'react';

import './index.scss';

import Logo from './src/logo.svg';
import Settings from './src/settings.svg';
import Power from './src/power.svg';
import Feather from './src/feather.svg';

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
              <img src={Settings} alt="setting icon" />
            </div>
            <div className="col-md-4 d-flex justify-content-end px-0">
              <img src={Feather} alt="setting icon" />
            </div>
            <div className="col-md-4 d-flex justify-content-end px-0">
              <img src={Power} alt="setting icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
