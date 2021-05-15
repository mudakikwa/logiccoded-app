// eslint-disable-next-line import/prefer-default-export
export const MUTATION = `mutation(
    $email: String!
    $password: String!
  ) {
    Login(
      loginData: {
        email:$email
        password:$password
      }
    ) {
      _id
    }
  }`;
