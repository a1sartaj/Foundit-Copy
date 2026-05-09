import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

const companies = [
    {
        name: "Capgemini",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
    },
    {
        name: "Quess",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Quess_Logo.png",
    },
    {
        name: "LTM",
        logo: "https://dummyimage.com/180x80/ffffff/ff5c5c&text=LTM",
    },
    {
        name: "ICICI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
    },
    {
        name: "Xoriant",
        logo: "https://www.xoriant.com/cdn/ff/F71b10FRNa0RU2jATbQpCPM8vDUBGt8N8AkCT1IeuVg/1692609954/public/Xoriant-Logo_0.png",
    },
    {
        name: "Cognizant",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
    },
    {
        name: "Infosys",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
    {
        name: "TCS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
        name: "Wipro",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
        name: "HCL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
        name: "Accenture",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        name: "Adobe",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    },
    {
        name: "Flipkart",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Flipkart_logo_%282026%29.svg",
    },
    {
        name: "Paytm",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg",
    },
    {
        name: "Zoho",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/ZOHO_logo_2023.svg",
    },
    {
        name: "Tech Mahindra",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
        name: "Deloitte",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
        name: "EY",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
];

const FeaturedCompanies = () => {
    return (
        <section className="py-14 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-10">
                    Featured Companies
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {companies.map((company, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-22 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center p-5">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-h-12 object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedCompanies;