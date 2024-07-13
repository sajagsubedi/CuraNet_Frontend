"use client";
import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavLinks = ({ closeDropDown }: { closeDropDown: () => void }) => {
  const pathname = usePathname();
  const navlinks = [
    {
      text: "Dashboard",
      href: "/patients",
    },
    {
      text: "Appointments",
      href: "/patients/appointments",
    },
    {
      text: "Reports",
      href: "/patients/reports",
    },
    {
      text: "Visits",
      href: "/patients/visits",
    },
    {
      text: "Reviews",
      href: "/patients/reviews",
    },
  ];
  return (
    <>
      {navlinks.map((item, i) => {
        return (
          <li key={i} onClick={closeDropDown}>
            <Link
              href={item.href}
              className={`block py-2 pl-3 pr-4 ${
                pathname !== item.href
                  ? "text-gray-900 hover:bg-blue-300 hover:border-l-4 hover:border-blue-700"
                  : "text-gray-900 bg-blue-300 hover:bg-blue-500 hover:text-white border-l-4 border-blue-700"
              } `}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default function UserDashboard() {
  const [userDropDown, setUserDropDown] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const closeDropDown = () => {
    setNavMenu(false);
    setUserDropDown(false);
  };
  return (
      <nav className="bg-white shadow-sm shadow-gray-200 sticky top-0 z-50">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto py-3">
          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  outline-none "
              onClick={() => setNavMenu(!navMenu)}
            >
              <GiHamburgerMenu className="w-8 h-8"/>
            </button>
            <div className="flex gap-3 md:gap-5 px-3 items-center">
              <button className="w-auto h-full">
                <IoMdNotifications className="text-blue-500 h-7 w-7" />
              </button>
              <div className=" relative">
                <button
                  type="button"
                  className="flex mr-3 text-sm  rounded-full items-center gap-1"
                  onClick={() => setUserDropDown(!userDropDown)}
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="user photo"
                  />
                  
                  <h4 className="font-bold text-gray-600 text-base md:block hidden">
                    John Doe
                  </h4>
                </button>
                {/* Dropdown menu */}
                <div
                  className={`z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg absolute right-0 top-10 max-w-[300px] overflow-hidden
              transition-all duration-300 ease-in-out ${
                !userDropDown ? "h-0" : "h-56"
              }`}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 ">
                      John Doe
                    </span>
                    <span className="block text-sm text-gray-500 truncate ">
                      johndoe@gmail.com
                    </span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Profile
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
            </div>
          </div>
          <div className="items-center justify-between flex w-full  relative  flex-col z-10">
            <div
              className={`absolute h-[100dvh] mt-3 left-0 overflow-hidden box-border transition-all duration-300  shadow-2xl ${
                navMenu ? "w-56" : "w-0"
              }`}
            >
              <ul
                className={`flex flex-col font-medium pt-8 backdrop-blur-md bg-blue-100 bg-opacity-50 h-full box-border gap-3`}
              >
                <NavLinks closeDropDown={closeDropDown} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
