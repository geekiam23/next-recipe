import { ReactElement, useEffect, useState } from "react";

import ButtonGroup from "components/ButtonGroup";
import Error from "components/Error";
import RandomRecipeForm from "components/Forms/RandomRecipe";
import Loading from "components/Loading";
import RecipeCard from "components/RecipeCard";
import Table from "components/Table";

const RandomRecipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);

  // useEffect(() => {
  //   fetchRandomRecipes();
  // }, [currentUser]);

  const handleShowTable = () => setShowTable(!showTable);

  // if (loading) return <Loading />;
  // if (error) return <Error />;
  // if (!randomRecipes) return null;

  return (
    <>
      <div className="recipe-container">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Random Recipes
          </h3>
        </div>
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <RandomRecipeForm />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <span className="flex divide-y-4 divide-black divide-opacity-25" />
          {/* {!showTable && <RecipeCard recipes={randomRecipes} />} */}

          {/* {showTable && <Table recipes={randomRecipes} />} */}
        </main>
      </div>
    </>
  );
};

export default RandomRecipes;
