import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { FaCalendarCheck ,FaCalendarAlt} from "react-icons/fa";
import { BsFillCalendarWeekFill } from "react-icons/bs";

const NavLinks = ({ closeDropDown }) => {
    const location = useLocation();
    const navlinks = [
        {
            text: "Dashboard",
            href: "/dashboard"
        },
        {
            text: "Appointments",
            href: "/appointments"
        },
        {
            text: "Book Appointment",
            href: "/book-appointment"
        },
        {
            text: "Visits",
            href: "/visits"
        },
        {
            text: "Reviews",
            href: "/reviews"
        }
    ];
    return (
        <>
            {navlinks.map((item, i) => {
                return (
                    <li key={i} onClick={closeDropDown}>
                        <Link
                            to={item.href}
                            className={`block py-2 pl-3 pr-4 ${
                                location.pathname !== item.href
                                    ? "text-gray-900 hover:bg-blue-200"
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
        <>
            <nav className="bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
                    <div className="flex items-center justify-between w-full">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  outline-none "
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
                        <div className="flex gap-3 px-3 items-center">
                            <button className="w-auto h-full">
                                <IoMdNotifications className="text-blue-500 h-7 w-7" />{" "}
                            </button>
                            <div className=" relative">
                                <button
                                    type="button"
                                    className="flex mr-3 text-sm  rounded-full flex items-center gap-1"
                                    onClick={() =>
                                        setUserDropDown(!userDropDown)
                                    }
                                >
                                    <h4 className="font-bold text-gray-600 text-base">
                                        John Doe
                                    </h4>
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="user photo"
                                    />
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    className={`z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow   absolute right-0 top-5 max-w-[300px] overflow-hidden
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
            <main className="w-full pt-10 px-4  md:px-10">
                <section className="flex justify-center md:justify-start">
                    <div className="w-[300px] md:w-[440px] bg-blue-50 drop-shadow-md shadow-gray-300 min-h-[175px] overflow-hidden rounded">
                        <div className="w-full bg-blue-200 p-3 pb-6 flex flex-col justify-start">
                            <h3 className="text-lg font-bold text-blue-600">
                                Welcome Back !
                            </h3>
                            <h5 className="text-base text-blue-500 ml-2">
                                Dashboard
                            </h5>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center p-1 rounded-full bg-blue-50 self-start ml-5 -translate-y-1/2">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="user photo"
                                />
                            </div>
                            <div className="flex w-full justify-between -translate-y-5">
                            <div className="flex flex-col px-2">
                                    <h4 className="text-gray-600 text-base font-medium">
                                        John Doe
                                    </h4>  <h4 className="text-gray-600 text-base">
                                        johndoe@gmail.com
                                    </h4>
                            </div>
                            <div className="px-2">
                            <button className="px-2 py-1 rounded bg-blue-600 text-white font-medium max-w-max">View Profile</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full grid mt-10 grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-5">

                    <div className="bg-gray-50 drop-shadow-md shadow-gray-300 min-h-[125px] overflow-hidden rounded max-w-[500px] flex justify-between p-5"> 
                    <div className="flex flex-col gap-2">
                                    <h4 className="text-gray-600 text-xl md:text:2xl xl:3xl">
                                        Upcoming Appointments
                                    </h4>                 <h4 className="text-gray-900 text-xl font-bold md:2xl xl:3xl">
                                    6
                                    </h4> 
                    </div>
                    <div className="h-full flex items-center justify-end" >
                    <BsFillCalendarWeekFill className='h-7 w-7 text-blue-600'/>
                    </div>   
                    </div>   
                    
                    <div className="bg-gray-50 drop-shadow-md shadow-gray-300 min-h-[125px] overflow-hidden rounded max-w-[500px] flex justify-between p-5"> 
                    <div className="flex flex-col gap-2">
                                    <h4 className="text-gray-600 text-xl md:text:2xl xl:3xl">
                                        Completed Appointments
                                    </h4>                 <h4 className="text-gray-900 text-xl font-bold md:2xl xl:3xl">
                                    183
                                    </h4> 
                    </div>
                    <div className="h-full flex items-center justify-end" >
                    <FaCalendarCheck className='h-7 w-7 text-blue-600'/>
                    </div>   
                    </div>   
                    
                    <div className="bg-gray-50 drop-shadow-md shadow-gray-300 min-h-[125px] overflow-hidden rounded max-w-[500px] flex justify-between p-5"> 
                    <div className="flex flex-col gap-2">
                                    <h4 className="text-gray-600 text-xl md:text:2xl xl:3xl">
                                        Total Appointments
                                    </h4>                 <h4 className="text-gray-900 text-xl font-bold md:2xl xl:3xl">
                                    189
                                    </h4> 
                    </div>
                    <div className="h-full flex items-center justify-end" >
                    <FaCalendarAlt className='h-7 w-7 text-blue-600'/>
                    </div>   
                    </div>   
                    </section>
            </main>
        </>
    );
}
