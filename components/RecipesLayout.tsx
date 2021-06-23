import { Dispatch, ReactElement, SetStateAction } from 'react';

import RecipeCard from './RecipeCard';
import ButtonGroup from './ButtonGroup';
import Table from './Table';
import RandomRecipeForm from './Forms/RandomRecipe';
import { Recipe } from '../types';

interface Props {
  showTable: boolean;
  recipes: Recipe[];
  handleShowTable: () => void;
  setRandomRecipes?: Dispatch<SetStateAction<Recipe[]>>;
  header: string;
  showButtonGroup?: boolean;
  showRandomForm?: boolean;
  isRandom?: boolean;
}

const RecipesLayout: React.FC<Props> = ({
  showTable,
  recipes,
  handleShowTable,
  header,
  showButtonGroup,
  setRandomRecipes,
  showRandomForm,
  isRandom,
}): ReactElement | null => {
  if (!recipes) return null;

  return (
    <>
      <div className='recipe-container'>
        <div className='px-4 py-5 bg-white border-b border-gray-200 sm:px-6'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>{header}</h3>
        </div>
        {showButtonGroup && <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />}
        {showRandomForm && setRandomRecipes && (
          <RandomRecipeForm setRandomRecipes={setRandomRecipes} />
        )}
        <main className='relative z-0 flex-1 max-h-screen mt-5 overflow-y-auto focus:outline-none'>
          {showTable && <Table recipes={recipes} />}

          {!showTable && <RecipeCard isRandom={isRandom} recipes={recipes} />}
        </main>
      </div>
    </>
  );
};

export default RecipesLayout;
