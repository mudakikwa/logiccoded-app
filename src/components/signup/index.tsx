import React from 'react';

export default function SignUp() {
  return (
    <div className="container-fluid" id="signup">
      <div className="row">
        <div className="col-md-5 onboard">
          <div className="row">
            <div className="col-md-10">
              <h6 className="onboard-title">
                Welcome to Smart Coded a platform to assist developers in coding
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-7 justify-content-center sign-up">
          <div className="row">
            <div className="col-md-8">
              <h1>Sign Up</h1>
              <h6>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="btn btn-primary d-flex justify-content-between">
                    Signup with google
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col">
                    <img src="" alt="" />
                  </div>
                  <div className="col">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="img" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="label">Full Name</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-6">
                    <div className="label">Username</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-12">
                    <div className="label">Email Address</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-12">
                    <div className="label">Password</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-12">
                    <div className="label">Comfirm Password</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-12">
                    <div className="chech-box" />
                    <div className="label">
                      By creating an account mean you are kay with our privacy
                      policy and our default notification settings
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="btn btn-primary">Create An Account</div>
                  </div>
                  <div className="col-md-6">
                    <div className="btn btn-outline btn-primary">
                      Log In Account
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
