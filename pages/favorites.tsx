import { ReactElement, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import ButtonGroup from "../components/ButtonGroup";
import Table from "../components/Table";
import { useAuth } from "lib/utils/auth";

const Recipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const {userInfo} = useAuth()
  const handleShowTable = () => setShowTable(!showTable);

  const data = userInfo?.getUser
  if (!userInfo?.getUser.recipes) return <div>No Recipes Found</div>;

  return (
    <>
      <div className="recipe-container">
        <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            My Recipes
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
