import Link from "next/link"
import { useAuth } from "../../lib/utils/auth.js"

const Menu = ({ openMenu }) => {
  const { signOut } = useAuth()

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
        {/* <Link to="/" className="nav-user-menu-items" role="menuitem">
          Recipes
        </Link> */}
        
        <div
          onClick={() => signOut()}
          className="nav-user-menu-items"
          role="menuitem"
        >
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Menu;
