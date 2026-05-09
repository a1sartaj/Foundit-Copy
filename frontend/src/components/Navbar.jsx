import React, { useEffect, useRef, useState } from "react";
import {
    Bell,
    ShoppingCart,
    Menu,
    ChevronDown,
    Settings,
    LogOut,
} from "lucide-react";


const navItems = [
    {
        title: "Jobs",
        dropdown: ["IT Jobs", "Remote Jobs", "Fresher Jobs", "Walk-in Jobs"],
    },
    {
        title: "Career Solutions",
        dropdown: ["Resume Writing", "Mock Interview", "Career Guidance"],
    },
    {
        title: "Prep",
        dropdown: ["Aptitude", "Coding", "Interview Questions"],
    },
    {
        title: "Learn",
        dropdown: ["Web Development", "React", "MERN Stack"],
    },
    {
        title: "Career Advice",
        dropdown: ["Salary Tips", "Resume Tips", "Interview Tips"],
    },
];

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [profile, setProfile] = useState(false)

    const ref = useRef()

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setProfile(false)
            }
        }

        if (open) {
            window.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-10">

                    {/* LOGO */}
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-700 cursor-pointer">
                        foundit
                    </h1>

                    {/* NAV LINKS */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(index)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {/* NAV LINK */}
                                <button className="flex items-center gap-1 text-gray-700 hover:text-purple-700 hover:underline  font-medium transition">
                                    {item.title}
                                    <ChevronDown size={16} />
                                </button>

                                {/* DROPDOWN */}
                                <div
                                    className={`absolute top-10 left-0 w-56  bg-white shadow-xl rounded-xl p-4 border border-gray-100 transition-all duration-300 ${activeDropdown === index
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-2"
                                        }`}
                                >
                                    <div className="flex flex-col gap-3">
                                        {item.dropdown.map((dropItem, i) => (
                                            <a
                                                key={i}
                                                href="/"
                                                className="text-gray-600 hover:bg-purple-50 px-2 py-1 rounded-lg  transition-all duration-200"
                                            >
                                                {dropItem}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-5">

                    {/* NOTIFICATION */}
                    <button className="relative">
                        <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />

                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center">
                            2
                        </span>
                    </button>

                    {/* CART */}
                    <button>
                        <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>

                    {/* PROFILE */}
                    <div onClick={() => setProfile(!profile)} className="relative" ref={ref}>
                        <div className="flex items-center gap-3 bg-purple-50 p-1 rounded-full cursor-pointer ">

                            {/* AVATAR */}
                            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700">
                                SA
                            </div>

                            {/* NAME */}
                            <div className="hidden md:block">
                                <p className="text-sm font-medium t50-gray-800">
                                    Hi, Sartaj A...
                                </p>
                            </div>

                            <ChevronDown className="w-4 h-4 text-gray-600" />
                        </div>

                        {profile && (
                            <ul className="absolute w-48 md:w-full drop-shadow-xl  top-12 right-0 md:left-0 bg-white rounded-md p-4" >
                                <li className="flex items-center  gap-2 px-2 py-2 hover:bg-purple-50 rounded-md" >
                                    <div className="w-6 h-6 rounded-full text-xs bg-purple-200 flex items-center justify-center font-semibold text-purple-700">SA</div>
                                    <p className="text-base" >View Profile</p>
                                </li>

                                <li className="flex items-center  gap-2 px-2 py-2 hover:bg-purple-50 rounded-md" >
                                    <Settings className="w-6 h-6" />
                                    <p className="text-base" >My Account</p>
                                </li>

                                <li className="flex items-center  gap-2 px-2 py-2 hover:bg-purple-50 rounded-md" >
                                    <LogOut className="w-6 h-6" />
                                    <p className="text-base" >Logout</p>
                                </li>
                            </ul>
                        )}

                    </div>

                    {/* MOBILE MENU */}
                    <button className="lg:hidden">
                        <Menu className="w-7 h-7 text-gray-700" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;