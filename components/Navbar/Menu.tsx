import Link from 'next/link';
import { useAuth } from '../../lib/utils/auth.js';

interface Props {
  openMenu: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<Props> = ({ openMenu, toggleMenu }) => {
  const { signOut, isSignedIn } = useAuth();

  const handleSignOut = (): void => {
    signOut();
    toggleMenu();
  };

  if (!openMenu) return null;
  return (
    <div>
      <div
        className='nav-user-menu-container'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu'
      >
        <Link href='/landing'>
          <div className='cursor-pointer nav-user-menu-items' role='menuitem'>
            Home
          </div>
        </Link>
        <Link href='/random'>
          <div className='cursor-pointer nav-user-menu-items' role='menuitem'>
            Random Recipes
          </div>
        </Link>
        <Link href='/recipes'>
          <div className='cursor-pointer nav-user-menu-items' role='menuitem'>
            My Recipes
          </div>
        </Link>
        {isSignedIn ? (
          <div onClick={handleSignOut} className='nav-user-menu-items ' role='menuitem'>
            Sign out
          </div>
        ) : (
          <Link href='/session'>
            <div className='cursor-pointer nav-user-menu-items' role='menuitem'>
              Sign In
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
