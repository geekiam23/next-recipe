const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr className='border-t border-gray-200'>
        <th className='pr-6 text-right table-header max-w-1 '></th>
        <th className='px-6 text-left table-header max-w-3'>
          <span className='lg:pl-2'>Title</span>
        </th>
        <th className='px-6 text-left table-header max-w-5'>Category</th>
        <th className='hidden px-6 text-right table-header md:table-cell max-w-5'>Tags</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
