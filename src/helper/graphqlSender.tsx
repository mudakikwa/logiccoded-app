import axios from 'axios';
// import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const queryData = async (mutation, variablesData) => {
  const data = JSON.stringify({
    query: mutation,
    variables: variablesData,
  });

  const config = {
    method: 'post',
    url: 'http://127.0.0.1:4000/graphql',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const request = await axios(config);
    if (request) {
      return { data: JSON.stringify(request.data), error: null };
    }
  } catch (error) {
    return { data: null, error: error.response.data.errors[0].message };
  }
};
