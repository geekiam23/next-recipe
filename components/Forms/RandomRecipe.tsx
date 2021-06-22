import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';

import { Recipe } from '../../types';
import { CUISINES, DIETS, INTOLERANCES, MEAL_TYPES } from '../../lib/utils/constants';
import { GET_RANDOM_RECIPES } from 'lib/utils/queries';

interface Props {
  setRandomRecipes: (data: Recipe[]) => void;
}

const RandomRecipeForm: React.FC<Props> = ({ setRandomRecipes }) => {
  const [showOptions, setShowOptions] = useState(true);
  const [getRecipes] = useLazyQuery(GET_RANDOM_RECIPES, {
    onCompleted: data => setRandomRecipes(data.randomRecipes),
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      getRecipes({
        variables: {
          tags: Object.values(values).join(', ').toLowerCase(),
          number: '2',
          // add in form
        },
      });
      setShowOptions(false);
    },
  });

  return (
    <div className='px-4 py-10 overflow-hidden bg-white sm:px-6 lg:px-8'>
      <div className='relative flex flex-col mx-auto'>
        <button
          onClick={() => setShowOptions(!showOptions)}
          type='button'
          className='self-end justify-center w-1/6 text-center rounded-md btn btn-group'
        >
          Show Options
        </button>
        {showOptions && (
          <form onSubmit={formik.handleSubmit}>
            <h2 className='mt-6 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl'>
              Diets
            </h2>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              {DIETS.map(diet => {
                return (
                  <div key={diet.key}>
                    <label className='inline-flex items-center'>
                      <input
                        name='diet'
                        onChange={formik.handleChange}
                        value={diet.title}
                        type='checkbox'
                        className='form-checkbox'
                      />
                      <span className='ml-2'>{diet.title}</span>
                    </label>
                    <div className='mt-4 ml-8 text-gray-400'>{diet.description}</div>
                  </div>
                );
              })}
            </div>
            <h2 className='mt-6 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl'>
              Meal Types
            </h2>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              {MEAL_TYPES.map(mealType => {
                return (
                  <div key={mealType.key}>
                    <label className='inline-flex items-center'>
                      <input
                        name='mealType'
                        onChange={formik.handleChange}
                        value={mealType.title}
                        type='checkbox'
                        className='form-checkbox'
                      />
                      <span className='ml-2'>{mealType.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h2 className='mt-6 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl'>
              Cuisines
            </h2>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              {CUISINES.map(cuisine => {
                return (
                  <div key={cuisine.key}>
                    <label className='inline-flex items-center'>
                      <input
                        name='cuisine'
                        onChange={formik.handleChange}
                        value={cuisine.title}
                        type='checkbox'
                        className='form-checkbox'
                      />
                      <span className='ml-2'>{cuisine.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h2 className='mt-6 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl'>
              Intolerances
            </h2>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              {INTOLERANCES.map(intolerance => {
                return (
                  <div key={intolerance.key}>
                    <label className='inline-flex items-center'>
                      <input
                        name='intolerance'
                        onChange={formik.handleChange}
                        value={intolerance.title}
                        type='checkbox'
                        className='form-checkbox'
                      />
                      <span className='ml-2'>{intolerance.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            <div className='sm:col-span-2'>
              <button
                type='submit'
                className='inline-flex items-center justify-center w-full py-3 mt-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Lets talk
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RandomRecipeForm;
