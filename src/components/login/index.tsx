/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import LottieWrapper from './lottie';
import Loader from '../signup/src/icons/loader';
import CloudErrorComponent from '../signup/src/CloudErrorComponent';
import { addAuth } from '../../redux/authData';

export default function Login() {
  const history = useHistory();
  const MUTATION = gql`
    mutation($email: String!, $password: String!) {
      Login(loginData: { email: $email, password: $password }) {
        _id
        token
        tokenExpiration
      }
    }
  `;
  const [Login, { loading, data, error }] = useMutation(MUTATION, {
    errorPolicy: 'all',
  });
  const [errorData, seterrorData] = useState(null);
  const dispatch = useDispatch();
  const value = (id) => {
    return document.getElementById(id).value;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, password] = [value('email'), value('password')];
    try {
      const result = await Login({
        variables: {
          email: `${email}`,
          password: `${password}`,
        },
      });
      if (result) {
        if (data) {
          dispatch(
            addAuth({
              id:data.Login._id,
              token: data.Login.token,
              tokenExpiration: data.Login.tokenExpiration,
            })
          );
          history.push('/home');
        }
      }
    } catch (e) {
      seterrorData(e.networkError.result.errors[0].message);
    }
  };
  return (
    <div className="container-fluid" id="signup">
      <div className="row">
        <div className="col-md-5 ">
          <LottieWrapper />
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
                {loading && (
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
                )}
                {error && (
                  <div className="col-md-12">
                    <div className="btn-error">
                      <div className="col-md-1">
                        <CloudErrorComponent />
                      </div>
                      <div className="col-md-10 text">
                        <div>{errorData}</div>
                      </div>
                    </div>
                  </div>
                )}
                <form action="" onSubmit={handleSubmit}>
                  <div className="col-md-12 row forms">
                    <div className="col-md-12">
                      <div className="label">Email Address</div>
                      <input className="input-style" type="email" id="email" />
                    </div>
                    <div className="col-md-12">
                      <div className="label">Password</div>
                      <input
                        className="input-style"
                        type="password"
                        id="password"
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        className="btn btn-primary create-btn"
                        type="submit"
                      >
                        Log In Account
                      </button>
                    </div>
                    <div className="col-md-6">
                      <Link to="/">
                        <div className="btn btn-outline btn-primary login-btn">
                          Create Account
                        </div>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
