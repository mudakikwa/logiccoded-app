import React from 'react';
import CloudErrorComponent from '../signup/src/CloudErrorComponent';

export default function Error(props) {
  const { error } = props;
  return (
    <div>
      <div className="col-md-12">
        <div className="btn-error">
          <div className="col-md-1">
            <CloudErrorComponent />
          </div>
          <div className="col-md-10 text">
            <div>{error}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
