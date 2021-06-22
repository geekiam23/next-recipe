import { Step } from 'types';
import ImageDescription from './ImageWDescription';

interface Props {
  step: Step;
}

const Instructions: React.FC<Props> = ({ step }) => {
  const url = 'https://spoonacular.com/cdn/ingredients_100x100/';
  const equipmentUrl = 'https://spoonacular.com/cdn/equipment_100x100/';

  return (
    <div className='relative z-10 flex px-20 pt-6 lg:px-4'>
      <div className='flex-shrink-0 mr-4'>
        <span className='inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full'>
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
