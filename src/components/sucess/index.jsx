import React from 'react';
import Done from './icons/done_all';

export default function Sucess(props) {
  const { text } = props;
  return (
    <div>
      <div className="col-md-12 px-0">
        <div className="btn-success">
          <div className="col-md-1">
            <Done />
          </div>
          <div className="col-md-10 text">
            <div>{text} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
