const Tags = ({ recipe }) => {
  return (
    <div className='z-10 relative flex justify-around py-10 px-20 lg:py-3 lg:px-4'>
      {recipe.dairyFree && <span className='tag bg-pink-100 text-gray-800'>Diary Free</span>}
      {recipe.cheap && <span className='tag  bg-red-100 text-red-800'>Cheap</span>}
      {recipe.vegan && <span className='tag  bg-yellow-100 text-yellow-800'>Vegan</span>}
      {recipe.veryPopular && <span className='tag  bg-green-100 text-green-800'>Popular</span>}
      {recipe.veryHealthy && <span className='tag bg-blue-100 text-blue-800'>Healthy</span>}
      {recipe.sustainable && <span className='tag  bg-indigo-100 text-indigo-800'>Badge</span>}
      {recipe.glutenFree && <span className='tag  bg-purple-100 text-indigo-800'>Gluten Free</span>}
    </div>
  );
};

export default Tags;
