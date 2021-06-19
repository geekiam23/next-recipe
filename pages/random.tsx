import { ReactElement, useState } from 'react';
import ButtonGroup from 'components/ButtonGroup';
import RandomRecipeForm from 'components/Forms/RandomRecipe';
import RecipeCard from 'components/RecipeCard';
import Table from 'components/Table';

const RandomRecipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const handleShowTable = () => setShowTable(!showTable);

  return (
    <>
      <div className='recipe-container'>
        <div className='px-4 py-5 bg-white border-b border-gray-200 sm:px-6'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>Random Recipes</h3>
        </div>
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <RandomRecipeForm setRandomRecipes={setRandomRecipes} />
        <main className='relative z-0 flex-1 overflow-y-auto focus:outline-none'>
          <span className='flex divide-y-4 divide-black divide-opacity-25' />
          {!showTable && <RecipeCard isRandom recipes={randomRecipes} />}

          {showTable && <Table recipes={randomRecipes} />}
        </main>
      </div>
    </>
  );
};

export default RandomRecipes;
