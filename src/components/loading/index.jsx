import React from 'react';
import Loader from '../signup/src/icons/loader';

export default function Loading() {
  return (
    <div>
      <div className="col-md-12">
        <div className="btn-loading">
          <div className="col-md-1">
            <Loader />
          </div>
          <div className="col-md-10 text">
            <div>Loading </div>
          </div>
        </div>
      </div>
    </div>
  );
}
