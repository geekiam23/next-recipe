import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ recipes }) => {
  return (
    <div className='mt-8 sm:block'>
      <div className='align-middle inline-block min-w-full border border-gray-200 overflow-x-scroll'>
        <table className='min-w-full'>
          <TableHeader />
          {recipes?.map((recipe: any) => (
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
