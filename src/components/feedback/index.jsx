import React from 'react';
import Waves from './src/waves';
import Close from './src/close';
import { useDispatch, useSelector } from 'react-redux';
import { hideFeedBack } from '../../redux/panelStates';

export default function FeedBack() {
  const { feedBack } = useSelector((state) => state.panelData);
  const dispatch = useDispatch();
  return (
    <div id="feedback">
      <div className="panel">
        <div className="title">
          <div className="close">
            <Close />
          </div>
          <h3>Tell us something</h3>
          <h6 className="col-md-7 px-0">
            If you have something interesting you can tell use please feel free
            to send feedback
          </h6>
        </div>
        <div className="form">
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="Type Something"
          />
        </div>
        <div className="row col-md-12 d-flex justify-content-between buttons px-0 mx-0">
          <div className="btn btn-primary">Send Feedback</div>
          <div className="separator">Or</div>
          <div
            className="btn btn-outline-primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(hideFeedBack());
            }}
          >
            Cancel Feed Back
          </div>
        </div>
      </div>
    </div>
  );
}
