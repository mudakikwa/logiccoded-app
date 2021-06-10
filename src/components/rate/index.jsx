import React from 'react';
import Waves from './src/waves';
import Close from './src/close';
import { useDispatch, useSelector } from 'react-redux';
import { hideFeedBack } from '../../redux/panelStates';
import Love from './src/InLoveComponent';
import Happy from './src/HappyComponent';
import Mean from './src/MaskGroupComponent';
import Sad from './src/SadComponent';
import VerySad from './src/VerysadComponent';

export default function Rate() {
  const { feedBack } = useSelector((state) => state.panelData);
  const dispatch = useDispatch();
  return (
    <div id="like">
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
          <div className="icons row d-flex justify-content-between">
            <Love />
            <Happy />
            <Mean />
            <Sad />
            <VerySad />
          </div>
        </div>
      </div>
    </div>
  );
}
