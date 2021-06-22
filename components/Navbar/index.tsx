import { ReactElement, useEffect, useState } from 'react';

import { Recipe } from 'types';
import Bell from '../icons/bell';
import SearchGlass from '../icons/search-glass';
import Logo from './Logo';
import Menu from './Menu';

interface SyntheticEvent {
  target: EventTarget;
  keyCode: number;
  preventDefault(): void;
}
interface ChangeEvent {
  target: EventTarget;
  preventDefault(): void;
}

const Navbar = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchData, setSearchData] = useState<Recipe[] | null>([]);

  useEffect(() => {
    setOpenMenu(false);
    setSearchQuery('');
    setSearchData([]);
  }, []);
  // }, [location]);

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  const handleSearch = (event: ChangeEvent): void => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleKeypress = (event: SyntheticEvent): void => {
    if (event.keyCode === 13) {
      handleSearch(event);
    }
  };

  return (
    <nav className='bg-gray-100 border-b-2 shadow'>
      <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex px-2 lg:px-0'>
            <Logo />
            <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
              <a href='#' className='nav-links'>
                Dashboard
              </a>
            </div>
          </div>
          <div className='search-container'>
            <div className='relative z-10 w-full max-w-lg bg-white'>
              <label htmlFor='search' className='sr-only'>
                Search
              </label>
              <div className='relative'>
                <div className='icon-container'>
                  <SearchGlass size='w-5 h-5' />
                </div>

                <input
                  id='search'
                  name='search'
                  className='search-input'
                  placeholder='Search'
                  type='search'
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyPress={handleKeypress}
                />
              </div>
              <ul
                className='search-results-ind-container'
                onClick={() => {
                  setSearchQuery('');
                  setSearchData(null);
                }}
              >
                {/* TODO: Add next Link */}
                {searchData &&
                  searchData.map(recipe => (
                    // <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                    <li key={recipe.id} className='flex p-4'>
                      <img
                        className='w-10 h-10 rounded-full'
                        src={recipe.image}
                        alt='image of finished recipe'
                      />
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>{recipe.title}</p>
                      </div>
                    </li>
                    // </Link>
                  ))}
              </ul>
            </div>
          </div>
          <div className='flex items-center lg:hidden'>
            <button
              className='nav-icon-container nav-button-container'
              aria-expanded='false'
              onClick={toggleMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <Menu openMenu={openMenu} toggleMenu={toggleMenu} />
          </div>
          <div className='hidden lg:ml-4 lg:flex lg:items-center'>
            <button className='nav-icon-container nav-bell-container'>
              <span className='sr-only'>View notifications</span>
              <Bell size='h-6 w-6' />
            </button>

            <div className='relative flex-shrink-0 ml-4'>
              <div>
                <button
                  className='nav-icon-container nav-user-icon-container'
                  id='user-menu'
                  aria-haspopup='true'
                  onClick={toggleMenu}
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='w-8 h-8 rounded-full'
                    // src={currentUser?.photoURL ?? noUserIcon}
                    // src={currentUser?.photoURL ?? null}
                  />
                </button>
              </div>
              <Menu openMenu={openMenu} toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
