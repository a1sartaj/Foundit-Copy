// src/components/Footer.jsx

import React from "react";

import {
    ChevronDown,
    Phone,
    Mail,
    Download,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

const footerLinks = [
    "Job Categories",
    "Employers",
    "Job Seekers",
    "Career Advice",
    "Company Info",
    "IT Jobs",
    "Non IT Jobs",
];

const Footer = () => {
    return (
        <footer className="bg-[#171235] text-white py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}
                    <div className="space-y-2 border-r border-white/10 pr-10">
                        {footerLinks.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border-b border-white/10 pb-5 cursor-pointer hover:text-purple-300 transition"
                            >
                                <p className="text-base">
                                    {item}
                                </p>

                                <ChevronDown size={20} />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-2">

                        {/* COUNTRY */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <h3 className="text-xl font-medium">
                                Selected Country
                            </h3>

                            <select className="bg-transparent border border-white rounded-md px-4 py-2 outline-none">
                                <option className="text-black">
                                    India
                                </option>

                                <option className="text-black">
                                    USA
                                </option>

                                <option className="text-black">
                                    Canada
                                </option>
                            </select>
                        </div>

                        {/* PHONE */}
                        <div className="border-t border-white/10 pt-6 flex items-center gap-4 flex-wrap text-base">
                            <Phone size={20} />

                            <p className="text-base">
                                Toll No: +91 80 6985 7811 |
                                Toll Free No: 1800-419-6666
                            </p>
                        </div>

                        {/* EMAIL */}
                        <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                            <Mail size={20} />

                            <p className="text-base">
                                info@foundit.in
                            </p>
                        </div>

                        {/* DOWNLOAD */}
                        <div className="border-t border-white/10 pt-6 flex items-center gap-4 flex-wrap">
                            <Download size={20} />

                            <div className="flex items-center gap-4 flex-wrap">
                                <p className="text-base font-medium">
                                    Download The App
                                </p>

                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="app store"
                                    className="h-10"
                                />

                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="play store"
                                    className="h-10"
                                />
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div className="border-t border-white/10 pt-6 flex items-center gap-6 flex-wrap">

                            <h3 className="text-base font-medium">
                                Stay Connected
                            </h3>

                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition">
                                    <FaFacebookF size={16} />
                                </div>

                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition">
                                    <FaInstagram size={16} />
                                </div>

                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition">
                                    <FaLinkedinIn size={16} />
                                </div>

                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition">
                                    <FaYoutube size={16} />
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM LINKS */}
                        <div className="border-t border-white/10 pt-6">

                            <div className="flex flex-wrap gap-3 text-base">
                                <a href="/">Security & Fraud</a>
                                <span>|</span>

                                <a href="/">Privacy Notice</a>
                                <span>|</span>

                                <a href="/">Terms of Use</a>
                                <span>|</span>

                                <a href="/">Beware of Fraudsters</a>
                                <span>|</span>

                                <a href="/">Be Safe</a>
                                <span>|</span>

                                <a href="/">Complaints</a>
                            </div>

                            {/* COPYRIGHT */}
                            <p className="mt-6 text-base text-white/80">
                                © 2026 foundit | All rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;