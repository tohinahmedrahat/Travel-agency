import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link to="/" className="focus:bg-white text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/accommodation" className="focus:bg-white text-black">
          Accommodation
        </Link>
      </li>
      <li>
        <Link to="/blog" className="focus:bg-white text-black">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about" className="focus:bg-white text-black">
          About Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn focus:bg-transparent bg-transparent border-none text-black lg:hidden hover:bg-transparent"
          >
            <AiOutlineMenu className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="rounded-lg font-bold normal-case text-xl">
          TRAVELUS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" space-x-5 menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#63ac45] border-none hover:bg-[rgb(113,197,80)]">
          Login
        </button>

        {/* After making Authentication this  content will be unComment */}

        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
