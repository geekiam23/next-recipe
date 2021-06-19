import { ReactElement } from 'react';

const TableHeader = (): ReactElement => {
  return (
    <thead>
      <tr className='border-t border-gray-200'>
        <th className='table-header pr-6 max-w-1 text-right '></th>
        <th className='table-header px-6 max-w-3 text-left'>
          <span className='lg:pl-2'>Title</span>
        </th>
        <th className='table-header px-6 max-w-5 text-left'>Category</th>
        <th className='table-header hidden md:table-cell max-w-5 px-6 text-right'>Tags</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
