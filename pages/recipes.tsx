import { ReactElement, useState } from 'react';
import { useQuery } from '@apollo/client';

import Error from '../components/Error';
import Loading from '../components/Loading';
import RecipesLayout from '../components/RecipesLayout';
import { GET_ALL_RECIPES } from 'lib/utils/queries';

const Recipes = (): ReactElement | null => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const { data, error, loading } = useQuery(GET_ALL_RECIPES);
  const handleShowTable = (): void => setShowTable(!showTable);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <>
      <RecipesLayout
        recipes={data?.recipes}
        handleShowTable={handleShowTable}
        header='All Recipes'
        showTable={showTable}
        showButtonGroup
      />
    </>
  );
};

export default Recipes;
