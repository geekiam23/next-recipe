import { ReactElement, useState } from 'react';

import RecipesLayout from 'components/RecipesLayout';
import { Recipe } from 'types';

const RandomRecipes = (): ReactElement | null => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);
  const handleShowTable = (): void => setShowTable(!showTable);

  return (
    <>
      <RecipesLayout
        recipes={randomRecipes}
        handleShowTable={handleShowTable}
        header='Random Recipes'
        showTable={showTable}
        setRandomRecipes={setRandomRecipes}
        showButtonGroup
        showRandomForm
        isRandom
      />
    </>
  );
};

export default RandomRecipes;
