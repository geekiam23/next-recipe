import ImageDescription from './ImageWDescription';

const Instructions = ({ step }) => {
  const url = 'https://spoonacular.com/cdn/ingredients_100x100/';
  const equipmentUrl = 'https://spoonacular.com/cdn/equipment_100x100/';

  return (
    <div className='flex z-10 relative px-20 lg:px-4 pt-6'>
      <div className='mr-4 flex-shrink-0'>
        <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500'>
          <span className='text-lg font-medium leading-none text-white'>{step.number}</span>
        </span>
      </div>
      <div>
        <h2 className='text-lg font-bold'>{step.step}</h2>
        <div className='flex flex-wrap'>
          {step?.equipment?.map(equipment => (
            <ImageDescription key={equipment.id} item={equipment} url={equipmentUrl} />
          ))}
          {step?.ingredients?.map(ingredient => (
            <ImageDescription
              key={ingredient.id + ingredient.localizedName}
              item={ingredient}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
