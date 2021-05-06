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