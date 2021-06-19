import { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_RECIPE } from 'lib/utils/queries';
import { useRouter } from 'next/dist/client/router';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Recipe = (): ReactElement => {
  const router = useRouter()
  const { data, error, loading } = useQuery(GET_RANDOM_RECIPE, {
    variables: {
      id: router?.query?.id
    }
  });
  const recipe = data?.getRandomRecipe

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <div className='relative py-8 bg-gray-1'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
          <div className='relative sm:pb-8 sm:pt-16 lg:py-0'>
            <div
              aria-hidden='true'
              className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
            >
              <svg
                className='absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12'
                width='404'
                height='392'
                fill='none'
                viewBox='0 0 404 392'
              >
                <defs>
                  <pattern
                    id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                    x='0'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x='0'
                      y='0'
                      width='4'
                      height='4'
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width='404' height='392' fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)' />
              </svg>
            </div>
            <div className='recipe-image-container'>
              <div className='relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl'>
                <img
                  className='absolute inset-0 object-cover w-full h-full'
                  src={recipe?.image || '/food-placeholder.jpeg'}
                  alt='image of finished recipe'
                />
              </div>
            </div>

            // TODO: Connect tags to api
            {/* <Tags recipe={recipe} /> */}

            <div className='relative z-10 grid flex-wrap grid-cols-2 px-20 lg:py-3 lg:px-4'>
              {recipe?.extendedIngredients?.map(ingredient => {
                return (
                  <div key={ingredient.id} className='flex items-center mb-5 mr-5'>
                    <div>
                      <img
                        className='inline-block rounded-full h-9 w-9'
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        alt='image of ingredient'
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                        {ingredient.original}
                      </p>
                      <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                        ({ingredient.aisle})
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='border-t-4 border-black-100'>
              // TODO: Connect instructions to api
              {/* {recipe?.analyzedInstructions[0]?.steps.map(step => (
                <Instructions key={step.number} step={step} />
              ))} */}
            </div>
          </div>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-12 sm:pt-16 lg:pt-20'>
              <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                {recipe?.title}
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <div dangerouslySetInnerHTML={{ __html: recipe?.summary }} />
              </div>
            </div>

            <div className='mt-10'>
              <div className='grid grid-cols-2 gap-x-4 gap-y-8'>
                <div className='pt-6 border-t-2 border-gray-100'>
                  <dt className='text-base font-medium text-gray-500'>Total Time</dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {recipe?.readyInMinutes}
                  </dd>
                </div>

                <div className='pt-6 border-t-2 border-gray-100'>
                  <dt className='text-base font-medium text-gray-500'>Weight Watchers</dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {recipe?.weightWatcherSmartPoints}
                  </dd>
                </div>

                <div className='pt-6 border-t-2 border-gray-100'>
                  <dt className='text-base font-medium text-gray-500'>Likes</dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {recipe?.aggregateLikes}
                  </dd>
                </div>

                <div className='pt-6 border-t-2 border-gray-100'>
                  <dt className='text-base font-medium text-gray-500'>Servings</dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {recipe?.servings}
                  </dd>
                </div>

                <div className='pt-6 border-t-2 border-gray-100'>
                  <dt className='text-base font-medium text-gray-500'>Likes</dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {recipe?.aggregateLikes}
                  </dd>
                </div>

                <div className='pt-6 border-t-2 border-gray-100'>
                  <dt className='text-base font-medium text-gray-500'>Health Score</dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {recipe?.pricePerServing}
                  </dd>
                </div>
              </div>
              <div className='py-6 border-t-4 border-gray-100'>
                <dt className='text-base font-medium text-gray-500'>Wine Pairings</dt>
                <dd className='text-3xl tracking-tight text-gray-900 capitalize'>
                  {recipe?.winePairing?.pairedWines?.join(' , ')}
                </dd>
              </div>
              <div className='py-6 border-t-2 border-gray-100'>
                <dt className='text-base font-medium text-gray-500'>Suggested Wines</dt>
                <dd className='text-3xl tracking-tight text-gray-900 capitalize'>
                  {recipe?.winePairing?.productMatches?.length > 0 &&
                    recipe?.winePairing?.productMatches?.map(product => {
                      return (
                        <div key={product?.id} className='py-5'>
                          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                            <div className='sm:col-span-2'>
                              <dt className='text-sm font-medium text-gray-500'>Wine</dt>
                              <a href={product?.link} className='mt-1 text-sm text-gray-900'>
                                {product?.title}
                              </a>
                            </div>
                            <div className='sm:col-span-1'>
                              <dt className='text-sm font-medium text-gray-500'>Average Rating</dt>
                              <dd className='mt-1 text-sm text-gray-900'>
                                {product?.averageRating.toFixed(2)}
                              </dd>
                            </div>
                            <div className='sm:col-span-1'>
                              <dt className='text-sm font-medium text-gray-500'>
                                Number of Reviews
                              </dt>
                              <dd className='mt-1 text-sm text-gray-900'>{product?.ratingCount}</dd>
                            </div>
                            <div className='sm:col-span-1'>
                              <dt className='text-sm font-medium text-gray-500'>Price</dt>
                              <dd className='mt-1 text-sm text-gray-900'>{product?.price}</dd>
                            </div>
                            <div className='sm:col-span-2'>
                              <dt className='text-sm font-medium text-gray-500'>Desciption</dt>
                              <dd className='mt-1 text-sm text-gray-900'>{product?.description}</dd>
                            </div>
                          </dl>
                        </div>
                      );
                    })}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
