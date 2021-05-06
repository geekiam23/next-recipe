import { ReactElement } from "react";
import Link from 'next/link'
import Star from "./icons/star";
import CircleMinus from "./icons/circle-minus";

const RecipeCard = ({ recipes }): ReactElement => {
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
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12">
      <div className="space-y-12">
        <ul className="recipe-card-list">
          {recipes?.map((recipe: any) => (
            <li key={recipe.id}>
              <Link as={`/recipe/${recipe.id}`} href="/recipe/[id]">
                <a>
                  <div className="h-full space-y-4 border rounded-lg">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover rounded-lg shadow-lg"
                        src={recipe.image}
                        alt="image of finished recipe"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{recipe.title}</h3>
                        <p className="text-sm">Likes: {recipe.aggregateLikes}</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      {/* <div className="text-sm" onClick={() => handleFavs(recipe)}> */}
                      {recipe?.favorite ? (
                        <Star size="w-5" fill="yellow" />
                      ) : (
                        <CircleMinus size="w-5" fill="red" />
                      )}
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
