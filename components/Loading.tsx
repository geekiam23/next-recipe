const Loading: React.FC = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-75'>
      <h2 className='text-xl font-semibold text-center text-white'>Loading...</h2>
      <p className='w-1/3 text-center text-white'>
        This may take a few seconds, please dont close this page.
      </p>
    </div>
  );
};

export default Loading;
