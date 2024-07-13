"use client";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import logo from "@/assets/logo.png";
import Link from "next/link"

const NavLinks = ({ closeDropDown }:{closeDropDown:()=>void }) => {
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
      text: "Our Team",
      href: "/our-team",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Signin",
      href: "/signin",
    },
    {
      text: "Signup",
      href: "/signup",
    },
  ];
  const pathname = usePathname()
  return (
    <>
      {navlinks.map((item, i) => {
        return (
          <li key={i} onClick={closeDropDown}>
            <Link
              href={item.href}
              className={`block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:bg-transparent ${
                pathname !== item.href
                  ? "text-gray-900 hover:bg-blue-200"
                  : "text-white bg-blue-600 hover:bg-blue-700 md:text-blue-600"
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
  const [navMenu, setNavMenu] = useState(false);
  const closeDropDown = () => {
    setNavMenu(false);
  };
  return (
    <nav className="bg-white border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img src={logo.src} className="h-10 mr-3" alt="logo" />
        </Link>
        <div className="flex items-center md:order-2">
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
              navMenu ? "h-80" : "h-0"
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