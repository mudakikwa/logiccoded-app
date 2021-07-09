import { url } from 'inspector';
import React from 'react';
import Language from './language';

import background from './src/back.jpg';
import TitleIcon from './src/titleIcon';
import CodeIcons from './src/codeIcons';
// languages
import javascript from './src/ionic-logo-javascript.svg';
import python from './src/simple-python.svg';
import java from './src/awesome-java.svg';
import react from './src/awesome-react.svg';
import vue from './src/awesome-vuejs.svg';

export default function AddCode() {
  const languagesList = [javascript, python, java, react, vue];
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
              <h6>Add code that you wish to share here</h6>
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
                <textarea
                  className="control code"
                  id="code-title"
                  placeholder="Lorem ipsum dolor sit amet, consetetur."
                />
              </div>
              <div className="programmming-languages">
                <h3>Choose The language</h3>
                <h6>Coding language used in code</h6>
                <div className="row mx-0 d-flex justify-content-between w-100">
                  {languagesList.map((language, count) => {
                    return <Language logo={language} key={count} />;
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
