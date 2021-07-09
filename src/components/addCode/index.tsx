import { url } from 'inspector';
import React from 'react';
import background from './src/back.jpg';
import TitleIcon from './src/titleIcon';
import CodeIcons from './src/codeIcons';

export default function AddCode() {
  return (
    <div>
      <div className="container-fluid px-0" id="add-code">
        <div className="row">
          <div className="col-md-6">
            <div
              className="back-mg"
              style={{ backgroundImage: `url("${background}")` }}
            />
            <img src="" alt="" />
          </div>
          <div className="col-md-6 add-code-form">
            <form action="" className="form-data">
              <h3>Add code</h3>
              <h6>
                Add code that you wish to share here
              </h6>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <TitleIcon />
                  </div>
                </div>
                <input
                  type="text"
                  className="control"
                  id="code-title"
                  placeholder="Lorem ipsum dolor sit amet, consetetur."
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <CodeIcons />
                  </div>
                </div>
                <input
                  type="text"
                  className="control code"
                  id="code-title"
                  placeholder="Lorem ipsum dolor sit amet, consetetur."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
