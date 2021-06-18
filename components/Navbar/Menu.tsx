import Link from "next/link"
import { useAuth } from "../../lib/utils/auth.js"

const Menu = ({ openMenu, toggleMenu }) => {
  const { signOut, isSignedIn } = useAuth()
  
  const handleSignOut = () => {
    signOut()
    toggleMenu()
  }

  if (!openMenu) return null;
  return (
    <div>
      <div
        className="nav-user-menu-container"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <Link href="/landing">
          <a className="nav-user-menu-items" role="menuitem">
            Settings
          </a>
        </Link>
        {isSignedIn ? 
          <div
            onClick={handleSignOut}
            className="nav-user-menu-items"
            role="menuitem"
          >
            Sign out
          </div>
        :
          <Link href="/session">
            <a className="nav-user-menu-items" role="menuitem">
              Sign In
            </a>
          </Link>
        }
      </div>
    </div>
  );
};

export default Menu;
