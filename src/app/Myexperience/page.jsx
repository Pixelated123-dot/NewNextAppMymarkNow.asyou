"use client";
import React, { useState } from "react";

const experiences = [
    {
        image: "/Myexperience/POSN.jpg",
        alt: "POSN",
        caption: "POSN Computer 1",
    },
    {
        image: "/Myexperience/KMITL.jpg",
        alt: "KMITL",
        caption: "KMITL INNOVATION EXPO 2024",
    },
    {
        image: "/Myexperience/workshop kmitl.jpg",
        alt: "Workshop-KMITL",
        caption: "Workshop KMITL Electronic Circuits",
    },
    {
        image: "/Myexperience/Math Camp.jpg",
        alt: "Math-Camp-KMITL",
        caption: "Math Camp KMITL",
    },
    {
        image: "/Myexperience/Math Project.jpg",
        alt: "Math-Project",
        caption: "Math Project about Umbrella",
    },
    {
        image: "/Myexperience/buu.jpg",
        alt: "BUU",
        caption: "Lab and Project about Material Science",
    },
    ];

    function MyExperience() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Slider */}
        <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {experiences.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full relative">
                <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
                />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/70 px-6 py-2 rounded-lg shadow-md text-black text-lg font-semibold">
                {item.caption}
                </div>
            </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-3 rounded-full shadow-md transition z-10"
            aria-label="Previous"
        >
            &#10094;
        </button>

        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-3 rounded-full shadow-md transition z-10"
            aria-label="Next"
        >
            &#10095;
        </button>
        </section>
    );
}

export default MyExperience;