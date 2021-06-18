import gql from 'graphql-tag';

export const GET_ALL_RECIPES = gql`
  query recipes {
    recipes {
      id
      title
      summary
      cuisines {
        name
      }
      occasions {
        name
      }
      diets {
        name
      }
      dishTypes {
        name
      }
    }
  }
`;

export const GET_RANDOM_RECIPES = gql`
  query randomRecipes($number: String, $tags: [String!]) {
    randomRecipes(number: $number, tags: $tags)  {
      id
      title
      summary
      cuisines 
      occasions
      diets
      dishTypes
      image
      servings
      readyInMinutes
      aggregateLikes
    }
  }
`;

export const GET_USER_QUERY = gql`
query getUser($id: String!) {
  getUser(id: $id) {
    id
    email
    recipes {
      id
      title
      summary
      imageUrl
    }
  }
}
`;

export const LOGIN_MUTATION = gql`
  mutation SignMeIn($email: String!, $password: String!) {
    signInMutation(email: $email, password: $password) {
      token
      success
      errors {
        message
      }
      user {
        id
      }
    }
}
`

export const LOGOUT_MUTATION = gql`
  mutation SignMeOut {
    signOutMutation {
      success
      errors {
        message
      }
    }
}
`