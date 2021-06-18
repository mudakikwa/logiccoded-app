import React from 'react'
import GroupComponent from './icons/GroupComponent';
import HideComponent from './icons/HideComponent';
import ScreenMaximizeComponent from './icons/ScreenMaximizeComponent';

export default function Frame() {
  return (
    <div>
      <div className="container-fluid" id="frame">
        <div className="row d-flex justify-content-between">
          <div className="app-title">Logic Coded </div>
          <div className="button">
            <HideComponent />
            <ScreenMaximizeComponent />
            <GroupComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
