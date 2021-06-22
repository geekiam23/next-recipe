import { Ent } from 'types';

interface Props {
  item: Ent;
  url: string;
}

const ImageDescription: React.FC<Props> = ({ item, url }) => {
  return (
    <div key={item.id} className='flex mt-6 mr-5'>
      <div className='flex items-center'>
        <div>
          <img
            className='inline-block rounded-full h-9 w-9'
            src={url + item.image}
            alt='image of ingredient or tool'
          />
        </div>
        <div className='ml-3'>
          <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>{item.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageDescription;
