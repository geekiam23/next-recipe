const ImageDescription = ({ item, url }) => {
  return (
    <div key={item.id} className='mt-6 flex mr-5'>
      <div className='flex items-center'>
        <div>
          <img
            className='inline-block h-9 w-9 rounded-full'
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
