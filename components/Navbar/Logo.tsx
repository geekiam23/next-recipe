import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className='flex items-center flex-shrink-0'>
      <Link href='/recipes'>
        <img
          className='w-auto h-8 lg:block'
          src='https://cdn0.iconfinder.com/data/icons/cute-food/376/CuteFood_-_Artboard_Icon_Only-02-512.png'
          alt='Workflow'
        />
      </Link>
    </div>
  );
};

export default Logo;
