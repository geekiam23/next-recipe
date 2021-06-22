import Link from 'next/link';

import Star from '../icons/star';
import CircleMinus from '../icons/circle-minus';
import { Recipe } from 'types';

interface Props {
  recipe: Recipe;
}

const TableBody: React.FC<Props> = ({ recipe }) => {
  // TODO: Connect favorites to api
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
      <td className='max-w-1'>
        <div
          className='flex-shrink-0 px-4'
          aria-hidden='true'
          // onClick={() => handleFavs(recipe)}
        >
          {recipe?.favorite ? (
            <Star size='w-5' fill='yellow' />
          ) : (
            <CircleMinus size='w-5' fill='red' />
          )}
        </div>
      </td>
      <td className='text-gray-900 table-data'>
        <div className='flex items-center space-x-3 lg:pl-2'>
          <div className='truncate hover:text-gray-600'>
            <Link as={`/recipe/${recipe?.id}`} href='/recipe/[id]'>
              <span>{recipe?.title}</span>
            </Link>
          </div>
        </div>
      </td>
      <td className='overflow-hidden text-gray-500 table-data'>
        <div className='flex items-center space-x-2 max-w-0'>
          <div className='flex flex-shrink-0 -space-x-1 md:w-full'>
            {recipe?.cuisines?.map(c => c.name).join(', ')}
          </div>
        </div>
      </td>
      <td className='hidden text-right text-gray-500 table-data md:table-cell'>
        {recipe?.diets?.map(d => d.name).join(', ')}
      </td>
    </tr>
  );
};

export default TableBody;
