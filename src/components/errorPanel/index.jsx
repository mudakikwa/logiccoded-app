/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { remote } from 'electron';
import WarningIcon from './icons';
import GroupComponent from './icons/GroupComponent';
import { hideShutDown } from '../../redux/panelStates';

export default function ErrorPanel() {
  const dispatch = useDispatch();
  const getWindow = () => remote.BrowserWindow.getFocusedWindow();
  return (
    <div>
      <div className="container-fluid" id="close-panel">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-5">
              <div className="d-flex justify-content-between">
                <div className="title">Information Notification</div>
                <GroupComponent />
              </div>
              <div className="row mx-0">
                <div className="col-md-4">
                  <WarningIcon />
                </div>
                <div className="col-md-8 ">
                  <div className="panel-title">
                    Creating A Component Using React
                  </div>
                  <div className="panel-desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam
                  </div>
                  <div className="d-flex justify-content-between">
                    <div
                      className="btn btn-quit"
                      onClick={(e) => {
                        e.preventDefault();
                        getWindow().close();
                      }}
                    >
                      Quit Now
                    </div>
                    <div
                      className="btn btn-cancel"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(hideShutDown());
                      }}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
