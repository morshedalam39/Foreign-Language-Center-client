import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar  fixed z-20  rounded-t-lg max-w-6xl bg-stone-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <Link to="/">
              <img className="w-8 mx-1 mt-2" src={logo} alt="" />
            </Link>
          </div>
          <Link to="/" className="  text-xl">
            <h2 className="font-bold ">-Language</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleLogOut} className="btn btn-warning btn-sm text-white hover:bg-amber-600 mx-3">
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn btn-warning btn-sm text-white hover:bg-amber-600 mx-3">
              Login
            </Link>
          )}
          {user && (
            <img
              id="img"
              alt=""
              className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              src={user.photoURL}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
