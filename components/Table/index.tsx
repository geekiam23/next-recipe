import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ recipes }) => {
  return (
    <div className='mt-8 sm:block'>
      <div className='inline-block min-w-full overflow-x-scroll align-middle border border-gray-200'>
        <table className='min-w-full'>
          <TableHeader />
          {recipes?.map(recipe => (
            <tbody className='bg-white divide-y divide-gray-100' key={recipe.id}>
              <TableBody recipe={recipe} />
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
