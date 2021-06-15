/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';
import Close from './src/close';
import { hideFeedBack } from '../../redux/panelStates';
import Error from '../error/index';
import Loading from '../loading/index';
import Sucess from '../sucess/index';

export default function FeedBack() {
  let input;
  const ADD_FEEDBACK = gql`
    mutation($userId: String!, $feedback: String!) {
      AddFeedBack(feedBackData: { userId: $userId, feedback: $feedback }) {
        _id
        userId
        feedback
      }
    }
  `;
  const [errorData, seterrorData] = useState(null);
  const [suceess, setsuceess] = useState(null);
  const [AddFeedBack, { data, loading, error }] = useMutation(ADD_FEEDBACK, {
    errorPolicy: 'all',
  });

  const dispatch = useDispatch();
  return (
    <div id="feedback">
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
        </div>
        {suceess && <Sucess text="FeedBack submitted" />}
        {errorData && <Error error={errorData} />}
        {loading && <Loading />}
        <form
          className="form"
          onSubmit={async (e) => {
            e.preventDefault();
            setsuceess(null);
            try {
              const addFeedBack = await AddFeedBack({
                variables: {
                  userId: localStorage.getItem('userId'),
                  feedback: input.value,
                },
              });
              if (addFeedBack) {
                setsuceess(true);
              }
            } catch (errorOccured) {
              if (error) {
                seterrorData(
                  errorOccured.networkError.result.errors[0].message
                );
              }
            }
          }}
        >
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="Type Something"
            ref={(node) => {
              input = node;
            }}
          />
          <div className="row col-md-12 d-flex justify-content-between buttons px-0 mx-0">
            <button className="btn btn-primary" type="submit">
              Send Feedback
            </button>
            <div className="separator">Or</div>
            <div
              className="btn btn-outline-primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(hideFeedBack());
              }}
            >
              Cancel Feed Back
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
