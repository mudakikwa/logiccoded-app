import React from 'react';
import LottieWrapper from "./lottie"
import lottieFile from './60424-web-hosting.json';

export default function Login() {
  return (
    <div className="container-fluid" id="signup">
      <div className="row">
        <div className="col-md-5 ">
          <LottieWrapper
            style={
              ({ position: 'absolute' }, { width: '100%' }, { height: '100vh' })
            }
          />
          <div className="row onboard">
            <div className="col-md-10">
              <h6 className="onboard-title">
                Welcome to Smart Coded a platform to assist developers in coding
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-7 justify-content-center">
          <div className="row  sign-up">
            <div className="col-md-8">
              <h1>Log In Account</h1>
              <h6>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="btn btn-primary d-flex justify-content-between sign-up-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.313"
                      height="34.875"
                      viewBox="0 0 34.313 34.875"
                    >
                      <path
                        id="Icon_awesome-google"
                        data-name="Icon awesome-google"
                        d="M34.313,18.408c0,9.949-6.813,17.03-16.875,17.03a17.438,17.438,0,0,1,0-34.875A16.769,16.769,0,0,1,29.13,5.126L24.384,9.689C18.176,3.7,6.63,8.2,6.63,18A10.923,10.923,0,0,0,17.438,29.011c6.9,0,9.492-4.95,9.9-7.516h-9.9v-6h16.6A15.287,15.287,0,0,1,34.313,18.408Z"
                        transform="translate(0 -0.563)"
                        fill="#d2ded2"
                      />
                    </svg>
                    <span>Login with google</span>
                    <span>i</span>
                  </div>
                </div>
                <div className="col-md-6 other-social">
                  <div className="btn-of-social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="29.239"
                      viewBox="0 0 36 29.239"
                    >
                      <path
                        id="Icon_awesome-twitter"
                        data-name="Icon awesome-twitter"
                        d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                        transform="translate(0 -3.381)"
                        fill="#d2ded2"
                      />
                    </svg>
                  </div>
                  <div className="btn-of-social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30.769"
                      height="30"
                      viewBox="0 0 30.769 30"
                    >
                      <path
                        id="Icon_awesome-github"
                        data-name="Icon awesome-github"
                        d="M10.291,24.718c0,.124-.143.223-.323.223-.2.019-.347-.081-.347-.223,0-.124.143-.223.323-.223C10.13,24.477,10.291,24.576,10.291,24.718Zm-1.929-.279c-.043.124.081.267.267.3a.291.291,0,0,0,.385-.124c.037-.124-.081-.267-.267-.323A.318.318,0,0,0,8.362,24.439Zm2.742-.105c-.18.043-.3.161-.285.3.019.124.18.2.366.161s.3-.161.285-.285S11.284,24.315,11.1,24.334ZM15.186.563A14.875,14.875,0,0,0,0,15.7,15.552,15.552,0,0,0,10.515,30.537c.794.143,1.073-.347,1.073-.751,0-.385-.019-2.506-.019-3.809,0,0-4.342.931-5.254-1.849,0,0-.707-1.805-1.725-2.27,0,0-1.421-.974.1-.955a3.274,3.274,0,0,1,2.395,1.6,3.279,3.279,0,0,0,4.522,1.3A3.448,3.448,0,0,1,12.6,21.71c-3.468-.385-6.966-.887-6.966-6.855A4.7,4.7,0,0,1,7.1,11.2a5.861,5.861,0,0,1,.161-4.212c1.3-.4,4.28,1.675,4.28,1.675a14.655,14.655,0,0,1,7.791,0s2.984-2.084,4.28-1.675a5.858,5.858,0,0,1,.161,4.212,4.822,4.822,0,0,1,1.6,3.654c0,5.986-3.654,6.464-7.121,6.855A3.669,3.669,0,0,1,19.3,24.588c0,2.091-.019,4.677-.019,5.186,0,.4.285.893,1.073.751A15.409,15.409,0,0,0,30.769,15.7C30.769,7.095,23.79.563,15.186.563ZM6.03,21.958c-.081.062-.062.2.043.323.1.1.242.143.323.062.081-.062.062-.2-.043-.323C6.253,21.921,6.11,21.877,6.03,21.958Zm-.67-.5c-.043.081.019.18.143.242a.185.185,0,0,0,.267-.043c.043-.081-.019-.18-.143-.242C5.5,21.375,5.4,21.393,5.36,21.455Zm2.01,2.208c-.1.081-.062.267.081.385.143.143.323.161.4.062.081-.081.043-.267-.081-.385C7.636,23.583,7.45,23.565,7.37,23.664Zm-.707-.912c-.1.062-.1.223,0,.366s.267.2.347.143a.283.283,0,0,0,0-.385C6.923,22.733,6.762,22.671,6.662,22.752Z"
                        transform="translate(0 -0.563)"
                        fill="#d2ded2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-md-12 separator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="570.5"
                    height="14.62"
                    viewBox="0 0 570.5 14.62"
                  >
                    <g
                      id="Group_71"
                      data-name="Group 71"
                      transform="translate(-1025.5 -305.54)"
                    >
                      <g id="Group_70" data-name="Group 70">
                        <path
                          id="Path_70"
                          data-name="Path 70"
                          d="M0,0H269"
                          transform="translate(1025.5 313.5)"
                          fill="none"
                          stroke="#d2ded2"
                          strokeWidth="2"
                        />
                        <path
                          id="Path_69"
                          data-name="Path 69"
                          d="M0,0H244.5"
                          transform="translate(1351.5 313.5)"
                          fill="none"
                          stroke="#d2ded2"
                          strokeWidth="2"
                        />
                        <path
                          id="Path_68"
                          data-name="Path 68"
                          d="M8.06-.78C4.74-.78,2.2-3.44,2.2-7.08v-.16c0-3.6,2.32-6.3,5.82-6.3s5.8,2.78,5.8,6.26v.16C13.82-3.46,11.48-.78,8.06-.78Zm0,.94A6.965,6.965,0,0,0,14.98-7.1v-.16a6.934,6.934,0,0,0-6.96-7.2A6.957,6.957,0,0,0,1.06-7.22v.16A6.971,6.971,0,0,0,8.06.16ZM17.66,0h1.06V-5.8c0-2.78,1.52-3.72,3.54-3.8v-1a3.729,3.729,0,0,0-3.54,2.34v-2.2H17.66Z"
                          transform="translate(1312 320)"
                          fill="#d2ded2"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="col-md-12 row forms">
                  <div className="col-md-12">
                    <div className="label">Password</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-12">
                    <div className="label">Password</div>
                    <input type="text" className="input-style" />
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        By creating an account it mean you are okay with{' '}
                        <a href="">our privacy policy</a> and our default
                        <a href=""> notification settings</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="btn btn-primary create-btn">
                      Log In Account
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="btn btn-outline btn-primary login-btn">
                      Create Account
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
