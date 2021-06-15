/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setSucess, setError, setLoading } from '../../redux/ratingData';

const Emoji = (props) => {
  const { dataSet, emoji } = props;
  const dispatch = useDispatch();
  const MUTATION = gql`
    mutation($rating: String!, $userId: String!) {
      AddRating(ratingData: { rating: $rating, userId: $userId }) {
        _id
        userId
        rating
      }
    }
  `;
  const [AddRating, { data, loading, error }] = useMutation(MUTATION, {
    errorPolicy: 'all',
  });
  return (
    <div
      onClick={async (e) => {
        e.preventDefault();
        try {
          dispatch(setError({ value: false }));
          dispatch(setSucess({ value: false }));
          dispatch(setLoading({ value: true }));
          const rating = await AddRating({
            variables: {
              rating: dataSet,
              userId: localStorage.getItem('userId'),
            },
          });
          if (rating) {
            dispatch(setSucess({ value: 'thanks for submitting the rating' }));
            dispatch(setError({ value: false }));
            dispatch(setLoading({ value: false }));
          }
        } catch (e) {
          dispatch(
            setError({ value: e.networkError.result.errors[0].message })
          );
          dispatch(setLoading({ value: false }));
          dispatch(setSucess({ value: false }));
        }
      }}
      style={{ outline: 'none' }}
    >
      {emoji}
    </div>
  );
};

export default Emoji;
