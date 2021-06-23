import Link from 'next/link';
import Star from './icons/star';
import CircleMinus from './icons/circle-minus';
import { Recipe } from 'types';

interface Props {
  isRandom?: boolean;
  recipes: Recipe[];
}

const RecipeCard: React.FC<Props> = ({ isRandom, recipes }) => {
  const pageUrl = isRandom ? '/random/[id]' : '/recipe/[id]';

  return (
    <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12'>
      <div className='space-y-12'>
        <ul className='recipe-card-list'>
          {recipes?.map(recipe => {
            const imageUrl = recipe?.image || recipe?.imageUrl;

            return (
              <li key={recipe.id}>
                <Link
                  href={{
                    pathname: pageUrl,
                    query: { id: recipe.id },
                  }}
                >
                  <a>
                    <div className='h-full space-y-4 border rounded-lg'>
                      <div className='bg-gray-50 aspect-w-3 aspect-h-2 '>
                        <img
                          className='object-fill mx-auto rounded-lg shadow-lg max-h-52'
                          src={imageUrl || '/food-placeholder.jpeg'}
                          alt='image of finished recipe'
                        />
                      </div>

                      <div className='space-y-2'>
                        <div className='space-y-1 text-lg font-medium leading-6'>
                          <h3>{recipe.title}</h3>
                          <p className='text-sm'>Likes: {recipe.aggregateLikes}</p>
                        </div>
                      </div>
                      <div className='text-sm'>
                        {/* <div className="text-sm" onClick={() => handleFavs(recipe)}> */}
                        {recipe?.favorite ? (
                          <Star size='w-5' fill='yellow' />
                        ) : (
                          <CircleMinus size='w-5' fill='red' />
                        )}
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
