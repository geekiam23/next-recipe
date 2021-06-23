import { ReactElement, useState } from 'react';

import RecipesLayout from '../components/RecipesLayout';
import { useAuth } from 'lib/utils/auth';

const FavoriteRecipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const { userInfo } = useAuth();
  const handleShowTable = (): void => setShowTable(!showTable);

  const data = userInfo?.getUser;
  if (!userInfo?.getUser.recipes) return <div>No Recipes Found</div>;

  return (
    <>
      <RecipesLayout
        recipes={data?.recipes}
        handleShowTable={handleShowTable}
        header='My Recipes'
        showTable={showTable}
        showButtonGroup
      />
    </>
  );
};

export default FavoriteRecipes;
