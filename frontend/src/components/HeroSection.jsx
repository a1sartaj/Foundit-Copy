// src/components/HeroSection.jsx

import React from "react";
import {
    Search,
    MapPin,
    BriefcaseBusiness,
    ChevronDown,
} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="w-full bg-[#f6f0fb] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">

                {/* HERO CONTENT */}
                <div className="flex items-center justify-between">

                    {/* LEFT IMAGE */}
                    <div className="hidden lg:block w-40">
                        <img
                            src="bumrah.webp"
                            alt="hero"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="flex-1 text-center">

                        {/* TITLE */}
                        <h1 className="text-4xl font-bold text-purple-700">
                            8,00,000+ Jobs In India
                        </h1>

                        {/* SUBTITLE */}
                        <p className="mt-3 text-lg font-semibold text-black">
                            Get Hired by Top Companies
                        </p>

                        {/* SEARCH BAR */}
                        <div className="mt-4 w-full  bg-white shadow-lg  rounded-full border border-purple-100 flex items-center overflow-hidden">

                            {/* SEARCH INPUT */}
                            <div className="flex items-center gap-3 px-4 flex-1 border-r border-gray-200">
                                <Search className="text-gray-400" size={22} />

                                <input
                                    type="text"
                                    placeholder="Search by Skills, Company or Job Title"
                                    className="w-full py-3 outline-none text-lg"
                                />
                            </div>

                            {/* LOCATION */}
                            <div className="hidden md:flex items-center gap-3 px-4 border-r border-gray-200">
                                <MapPin className="text-gray-400" size={20} />

                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="outline-none py-3 w-35"
                                />
                            </div>

                            {/* EXPERIENCE DROPDOWN */}
                            <div className="hidden lg:flex items-center gap-3 px-4 border-r border-gray-200">
                                <BriefcaseBusiness
                                    className="text-gray-400"
                                    size={20}
                                />

                                <select
                                    className="py-3 pr-8 bg-transparent outline-none text-gray-500 cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Experience
                                    </option>

                                    <option value="fresher">Fresher</option>
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                    <option value="5">5 Years</option>
                                    <option value="6">6 Years</option>
                                    <option value="7">7 Years</option>
                                    <option value="8">8 Yea rs</option>
                                    <option value="9">9 Years</option>
                                    <option value="10">10+ Years</option>
                                </select>
                            </div>

                            {/* SEARCH BUTTON */}
                            <button className="bg-purple-700 hover:bg-purple-800 transition text-white font-semibold px-14 py-3 rounded-full m-1">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE DESIGN */}
                    <div className="hidden lg:block">
                        <img src="https://media.foundit.in/public/core/images/wicket.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;