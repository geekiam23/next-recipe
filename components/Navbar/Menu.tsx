import Link from "next/link"

// import { auth } from "../../config/firebase";
// import { useHistory } from "react-router-dom";
import { useState } from "react";

const Menu = ({ openMenu }) => {
  // const history = useHistory();
  const [error, setError] = useState(null);

  if (!openMenu) return null;

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       history.push("/signin");
  //       setError(null);
  //     })
  //     .catch((e) => setError(e));
  // };

  return (
    <div>
      {error && <div>Sorry, something went wrong. Please try again.</div>}
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
          // onClick={handleSignOut}
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
