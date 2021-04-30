import React from 'react';

import './index.scss';

import Activity from './src/activity.svg';
import Cloud from './src/cloud.svg';
import Grid from './src/grid.svg';
import Heart from './src/heart.svg';
import PlusCircle from './src/plus-circle.svg';
import Send from './src/send.svg';
import ProfileImg from './src/profile.jpg';

export default function SideBar() {
  return (
    <div className="col-md-1 px-0" id="sidebar">
      <div className="all-elements">
        <div className="row">
          <img src={Activity} alt="acrtivity icon" />
        </div>
        <div className="row">
          <img src={Cloud} alt="acrtivity icon" />
        </div>
        <div className="row">
          <img src={Grid} alt="acrtivity icon" />
        </div>
        <div className="row">
          <img src={Heart} alt="acrtivity icon" />
        </div>
        <div className="row">
          <img src={PlusCircle} alt="acrtivity icon" />
        </div>
        <div className="row">
          <img src={Send} alt="acrtivity icon" />
        </div>
        <div className="row">
          <h6 className="px-0 mx-0">Nikita Belov</h6>
        </div>
        <div className="row">
          <div
            className="rounded-circle profile-image"
            style={{ backgroundImage: `url("${ProfileImg}")` }}
          />
        </div>
      </div>
    </div>
  );
}
