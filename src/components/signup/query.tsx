// eslint-disable-next-line import/prefer-default-export
export const MUTATION = `mutation(
    $fullname:String!
    $username: String!
    $email: String!
    $password: String!
    $comfirmPassword: String!
  ) {
    SignUp(
      signUpData: {
        fullname:$fullname
        username: $username
        email: $email
        password: $password
        comfirmPassword: $comfirmPassword
      }
    ) {
      _id
    }
  }`;
