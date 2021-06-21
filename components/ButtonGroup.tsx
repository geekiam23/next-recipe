import { ReactElement } from 'react';

interface Props {
  showTable: string;
  handleShowTable: () => void;
}

const ButtonGroup = ({ showTable, handleShowTable }: Props): ReactElement => {
  const showTableBkgrd = showTable ? 'bg-white' : 'bg-gray-100';
  const showCardBkgrd = showTable ? 'bg-gray-100' : 'bg-white';

  return (
    <div className='flex justify-end pt-6 pr-6'>
      <span className='relative z-0 inline-flex rounded-md shadow-sm'>
        <button
          onClick={!showTable ? handleShowTable : undefined}
          type='button'
          className={`${showTableBkgrd} btn btn-group rounded-l-md`}
        >
          <svg
            className='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
          </svg>
          Table
        </button>
        <button
          onClick={showTable ? handleShowTable : undefined}
          type='button'
          className={`${showCardBkgrd} btn btn-group -ml-px rounded-r-md `}
        >
          <svg
            className='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
          </svg>
          Card
        </button>
      </span>
    </div>
  );
};

export default ButtonGroup;
