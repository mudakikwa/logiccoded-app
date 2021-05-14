// eslint-disable-next-line import/prefer-default-export
export const MUTATION = `mutation(
    $username: String!
    $email: String!
    $password: String!
    $comfirmPassword: String!
  ) {
    SignUp(
      signUpData: {
        username: $username
        email: $email
        password: $password
        comfirmPassword: $comfirmPassword
      }
    ) {
      _id
    }
  }`;
