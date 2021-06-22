import { Recipe } from 'types';

interface Props {
  recipe: Recipe;
}
const Tags: React.FC<Props> = ({ recipe }) => {
  return (
    <div className='relative z-10 flex justify-around px-20 py-10 lg:py-3 lg:px-4'>
      {recipe.dairyFree && <span className='text-gray-800 bg-pink-100 tag'>Diary Free</span>}
      {recipe.cheap && <span className='text-red-800 bg-red-100 tag'>Cheap</span>}
      {recipe.vegan && <span className='text-yellow-800 bg-yellow-100 tag'>Vegan</span>}
      {recipe.veryPopular && <span className='text-green-800 bg-green-100 tag'>Popular</span>}
      {recipe.veryHealthy && <span className='text-blue-800 bg-blue-100 tag'>Healthy</span>}
      {recipe.sustainable && <span className='text-indigo-800 bg-indigo-100 tag'>Badge</span>}
      {recipe.glutenFree && <span className='text-indigo-800 bg-purple-100 tag'>Gluten Free</span>}
    </div>
  );
};

export default Tags;
