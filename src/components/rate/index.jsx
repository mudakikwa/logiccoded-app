import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Close from './src/close';
import Love from './src/InLoveComponent';
import Happy from './src/HappyComponent';
import Mean from './src/MaskGroupComponent';
import Sad from './src/SadComponent';
import VerySad from './src/VerysadComponent';
import Loading from '../loading/index';
import Error from '../error/index';
import Sucess from '../sucess/index';
import Emoji from './singleEmoji';

export default function Rate() {
  const { loading, error, sucess } = useSelector((state) => state.ratingData);
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
            <Emoji dataSet="Loved It" emoji={<Love />} />
            <Emoji dataSet="I am happy" emoji={<Happy />} />
            <Emoji dataSet="Mean" emoji={<Mean />} />
            <Emoji dataSet="I am sad" emoji={<Sad />} />
            <Emoji dataSet="I am very sad" emoji={<VerySad />} />
          </div>
          {loading && (
            <div className="banner">
              <Loading />
            </div>
          )}
          {error && (
            <div className="banner">
              <Error error={error} />
            </div>
          )}
          {sucess && <Sucess text={sucess} />}
        </div>
      </div>
    </div>
  );
}
