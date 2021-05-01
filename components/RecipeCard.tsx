import { ReactElement } from "react";
// import { Link } from "react-router-dom";
import Star from "./icons/star";
import CircleMinus from "./icons/circle-minus";
// import { connect } from "react-redux";
// import {
//   addRecipeToFavorites,
//   removeRecipeFromFavorites,
// } from "../redux/user/user.actions";

const RecipeCard = (): ReactElement => {
  // const handleFavs = (recipe) => {
  //   const isExistingFavorite = currentUser.favorites.includes(
  //     recipe.id.toString()
  //   );

  //   if (isExistingFavorite) {
  //     removeRecipeFromFavorites(recipe);
  //     return;
  //   }
  //   addRecipeToFavorites(recipe);
  // };

  return (
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
      <div className="space-y-12">
        <ul className="recipe-card-list">
          {recipes?.map((recipe: any) => (
            <li key={recipe.id}>
              <div className="space-y-4 border rounded-lg h-full">
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={recipe.image}
                      alt="image of finished recipe"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{recipe.title}</h3>
                      <p className="text-sm">Likes: {recipe.aggregateLikes}</p>
                    </div>
                  </div>
                </Link>
                <div className="text-sm" onClick={() => handleFavs(recipe)}>
                  {recipe?.favorite ? (
                    <Star size="w-5" fill="yellow" />
                  ) : (
                    <CircleMinus size="w-5" fill="red" />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
