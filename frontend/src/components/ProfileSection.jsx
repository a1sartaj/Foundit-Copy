// src/components/ProfileSection.jsx

import React from "react";
import {
    ArrowRight,
    Bookmark,
    BriefcaseBusiness,
    MapPin,
    Zap,
} from "lucide-react";

const jobs = [
    {
        title: "Package Consultant-...",
        company: "IBM",
        experience: "2-4 yrs",
        location: "Bengaluru, India",
        posted: "Posted 6 days ago",
    },
    {
        title: "Industry Consultant-Life...",
        company: "IBM",
        experience: "Fresher",
        location: "Bengaluru, India",
        posted: "Posted a day ago",
    },
    {
        title: "Strategy Consultant-Cloud...",
        company: "IBM",
        experience: "3-5 yrs",
        location: "Singapore",
        posted: "Posted a day ago",
    },
    {
        title: "SAP UI5/Fiori Dev",
        company: "IBM",
        experience: "4-7 yrs",
        location: "Egypt",
        posted: "Posted 2 days ago",
    },
];

const ProfileSection = () => {
    return (
        <section className="bg-[#f7f7f7] py-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT CARD */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">

                        <h2 className="text-xl font-bold text-black">
                            Urgent! Your profile is not visible!
                        </h2>

                        <p className="text-base text-gray-500 mt-1">
                            Add missing information now to begin your job search
                        </p>

                        {/* INNER CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                            {/* PROFILE SCORE */}
                            <div className="bg-linear-to-br from-orange-100  rounded-2xl p-5 flex flex-col items-center justify-center">
                                <div className="w-24 h-24 rounded-full border-8 border-green-400 flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-green-500">
                                            100%
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Basic
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 font-semibold">
                                    Profile Score
                                </p>
                            </div>

                            {/* ADD RESUME */}
                            <div className="shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                                <div>
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                        +20%
                                    </span>

                                    <h3 className="mt-6 text-lg font-semibold">
                                        Add Resume
                                    </h3>
                                </div>

                                <ArrowRight className="text-purple-700" />
                            </div>

                            {/* ADD SUMMARY */}
                            <div className="shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                                <div>
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                        +9%
                                    </span>

                                    <h3 className="mt-6 text-lg font-semibold">
                                        Add Summary
                                    </h3>
                                </div>

                                <ArrowRight className="text-purple-700" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">

                        <div className="flex items-center justify-between">
                            <h3 className="text-base text-gray-500 font-medium">
                                Profile analytics (Last 30 days)
                            </h3>

                            <ArrowRight className="text-purple-700" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">

                            <div className="shadow-md rounded-xl p-6">
                                <h2 className="text-4xl font-bold">9</h2>

                                <p className="text-gray-500 mt-2">
                                    Profile Viewed
                                </p>
                            </div>

                            <div className="shadow-md rounded-xl p-6">
                                <h2 className="text-4xl font-bold">6</h2>

                                <p className="text-gray-500 mt-2">
                                    Recruiter Actions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* JOB SECTION */}
                <div className="mt-10">

                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">
                            Jobs based on 'Preference'
                        </h2>

                        <button className="text-purple-700 font-semibold hover:underline">
                            View all
                        </button>
                    </div>

                    {/* JOB CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
                            >

                                {/* TITLE */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-medium line-clamp-1">
                                            {job.title}
                                        </h3>

                                        <p className="text-gray-600 text-base mt-1">
                                            {job.company}
                                        </p>
                                    </div>

                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                                        <span className="text-purple-700 font-bold">
                                            I
                                        </span>
                                    </div>
                                </div>

                                {/* DETAILS */}
                                <div className="mt-2 space-y-2 text-gray-600">

                                    <div className="flex items-center gap-2">
                                        <BriefcaseBusiness size={18} />
                                        <span>{job.experience}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} />
                                        <span>{job.location}</span>
                                    </div>
                                </div>

                                {/* TAG */}
                                <div className="mt-2">
                                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">
                                        Early Applicant
                                    </span>
                                </div>

                                {/* BUTTONS */}
                                <div className="flex items-center gap-3 mt-6">

                                    <button className="flex-1 text-base border rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                                        <Bookmark size={14} />
                                        Save
                                    </button>

                                    <button className="flex-1 text-base  bg-purple-100 text-purple-700 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-purple-200 transition">
                                        <Zap size={14} />
                                        Quick Apply
                                    </button>
                                </div>

                                {/* POSTED */}
                                <p className="text-xs text-gray-400 mt-2 text-right">
                                    {job.posted}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;