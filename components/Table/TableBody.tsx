import { ReactElement } from "react";
// import { Link } from "react-router-dom";
import Star from "../icons/star";
import CircleMinus from "../icons/circle-minus";

const TableBody = (): ReactElement => {
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
    <tr>
      <td className="max-w-1">
        <div
          className="flex-shrink-0 px-4"
          aria-hidden="true"
          onClick={() => handleFavs(recipe)}
        >
          {recipe.favorite ? (
            <Star size="w-5" fill="yellow" />
          ) : (
            <CircleMinus size="w-5" fill="red" />
          )}
        </div>
      </td>
      <td className="table-data text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div className="truncate hover:text-gray-600">
            <Link to={`/recipe/${recipe.id}`}>
              <span>{recipe.title}</span>
            </Link>
          </div>
        </div>
      </td>
      <td className="table-data text-gray-500 overflow-hidden">
        <div className="flex items-center space-x-2 max-w-0">
          <div className="flex flex-shrink-0 md:w-full -space-x-1">
            {recipe.cuisines.join(", ")}
          </div>
        </div>
      </td>
      <td className="table-data hidden md:table-cell text-gray-500 text-right">
        {recipe.diets.join(", ")}
      </td>
    </tr>
  );
};

export default TableBody;
