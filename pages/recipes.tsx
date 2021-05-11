import { ReactElement, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import ButtonGroup from "../components/ButtonGroup";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Table from "../components/Table";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "lib/utils/queries";

const Recipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const { data, error, loading }= useQuery(GET_ALL_RECIPES)
  const handleShowTable = () => setShowTable(!showTable);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <>
      <div className="recipe-container">
        <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Favorite Recipes
          </h3>
        </div>
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          {data?.recipes.length > 0 && showTable && <Table recipes={data?.recipes} />}

          {data?.recipes.length > 0 && !showTable && <RecipeCard recipes={data?.recipes} />}
        </main>
      </div>
    </>
  );
};

export default Recipes;
