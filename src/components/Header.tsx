import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavLinks = ({ closeDropDown }) => {
  const location = useLocation();
  const navlinks = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Dashboard",
      href: "/dashboard",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];
  console.log(location.pathname);
  return (
    <>
      {navlinks.map((item, i) => {
        return (
          <li key={i} onClick={closeDropDown}>
            <Link
              to={item.href}
              className={`block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:bg-transparent ${
                location.pathname !== item.href
                  ? "text-gray-900 hover:bg-blue-100 "
                  : "text-white bg-blue-600 hover:bg-blue-700 md:text-gray-900"
              } md:p-0`}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

function Header() {
  const [userDropDown, setUserDropDown] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [user, setUser] = useState(true);
  const closeDropDown = () => {
    setNavMenu(false);
    setUserDropDown(false);
  };
  return (
    <nav className="bg-white border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10 mr-3" alt="logo" />
        </Link>
        <div className="flex items-center md:order-2">
          {user ? (
            <div className=" relative">
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 "
                onClick={() => setUserDropDown(!userDropDown)}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="user photo"
                />
              </button>
              {/* Dropdown menu */}
              <div
                className={`z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow   absolute right-0 top-5 max-w-[170px] overflow-hidden
              transition-all duration-300 ease-in-out ${
                !userDropDown ? "h-0" : "h-56"
              }`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 ">
                    Sajag Subedi
                  </span>
                  <span className="block text-sm text-gray-500 truncate ">
                    sajagsubedi03@gmail.com
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Patient Pannel
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Billing & Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <a className="rounded-md  py-1 px-2 bg-blue-600 text-white ">
              Login
            </a>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden outline-none "
            onClick={() => setNavMenu(!navMenu)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between flex w-full md:flex md:w-auto md:order-1 relative  flex-col z-10">
          <div
            className={`mt-4  absolute w-full md:static  md:h-auto overflow-hidden box-border transition-all duration-300  shadow-2xl rounded-lg md:shadow-none md:mt-0 ${
              navMenu ? "h-60" : "h-0"
            }`}
          >
            <ul
              className={`flex flex-col font-medium  md:flex-row md:space-x-8 p-4 md:p-0 md:border-0 backdrop-blur-md bg-blue-100 bg-opacity-50 md:bg-transparent md:backdrop-blur-0 h-full box-border`}
            >
              <NavLinks closeDropDown={closeDropDown} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
