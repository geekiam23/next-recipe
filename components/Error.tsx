const Error = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-red-700 opacity-75 flex flex-col items-center justify-center'>
      <h2 className='text-center text-white text-xl font-semibold'>Error...</h2>
      <p className='w-1/3 text-center text-white'>Please naviagate to home page.</p>
    </div>
  );
};

export default Error;
