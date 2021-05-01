import { ReactElement, useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { Link, useLocation } from "react-router-dom";

// import { selectCurrentUser } from "../../redux/user/user.selectors";

// import noUserIcon from "../../assets/no-user.png";
import Bell from "../icons/bell";
import SearchGlass from "../icons/search-glass";
import Logo from "./Logo";
import Menu from "./Menu";
// import { createStructuredSelector } from "reselect";

const Navbar = ({ currentUser }): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  // const location = useLocation();

  // useEffect(() => {
  //   if (!searchQuery) return;
  //   fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setSearchData(data.results));
  // }, [searchQuery]);

  useEffect(() => {
    setOpenMenu(false);
    setSearchQuery("");
    setSearchData([]);
  }, []);
  // useEffect(() => {
  //   setOpenMenu(false);
  //   setSearchQuery("");
  //   setSearchData([]);
  // }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSearch(e);
    }
  };

  return (
    <nav className="bg-gray-100	border-b-2 shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <Logo />
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              <a href="#" className="nav-links">
                Dashboard
              </a>
            </div>
          </div>
          <div className="search-container">
            <div className="relative w-full bg-white max-w-lg z-10">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="icon-container">
                  <SearchGlass size="w-5 h-5" />
                </div>

                <input
                  id="search"
                  name="search"
                  className="search-input"
                  placeholder="Search"
                  type="search"
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyPress={handleKeypress}
                />
              </div>
              <ul
                className="search-results-ind-container"
                onClick={() => {
                  setSearchQuery("");
                  setSearchData(null);
                }}
              >
                {searchData &&
                  searchData.map((recipe) => (
                    // <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                      <li className="p-4 flex">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={recipe.image}
                          alt="image of finished recipe"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {recipe.title}
                          </p>
                        </div>
                      </li>
                    // </Link>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="nav-icon-container nav-button-container"
              aria-expanded="false"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Menu openMenu={openMenu} />
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button className="nav-icon-container nav-bell-container">
              <span className="sr-only">View notifications</span>
              <Bell size="h-6 w-6" />
            </button>

            <div className="ml-4 relative flex-shrink-0">
              <div>
                <button
                  className="nav-icon-container nav-user-icon-container"
                  id="user-menu"
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    // src={currentUser?.photoURL ?? noUserIcon}
                    // src={currentUser?.photoURL ?? null}
                  />
                </button>
              </div>
              <Menu openMenu={openMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// const mapStateToProps = () =>
//   createStructuredSelector({
//     currentUser: selectCurrentUser,
//   });

// export default connect(mapStateToProps)(Navbar);
export default Navbar;
