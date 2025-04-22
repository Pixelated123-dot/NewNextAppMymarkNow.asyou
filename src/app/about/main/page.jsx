"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WheelOfFortune from "../wheel";
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaUserAlt, FaCogs, FaCode, FaCodeBranch, FaPhp, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import Image from "next/image";

export default function Page() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const images = [
        "/pic/1.jpg", "/pic/2.jpg", "/pic/3.jpg", "/pic/4.jpg", "/pic/5.jpg",
        "/pic/6.jpg", "/pic/7.jpg", "/pic/8.jpg", "/pic/9.jpg", "/pic/10.jpg", "/pic/11.jpg"
    ];
    const [flipped, setFlipped] = useState(false);
    const handleClick = () => setFlipped(!flipped);

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    const waveText = "WELCOME";

    return (
        <div className="bg-gradient-to-b from-white via-gray-100 to-gray-300 text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover transition-all duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url(${images[carouselIndex]})`,
                        filter: "grayscale(10%) brightness(0.8)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h1 className="text-6xl font-extrabold drop-shadow-xl flex space-x-2 hover:text-yellow-200">
                        {waveText.split("").map((char, i) => (
                            <span
                                key={i}
                                className="inline-block animate-wave"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                    <p className="text-xl md:text-2xl mt-4 animate-fade-in-up delay-100 hover:text-blue-200 transition">
                        Take a little time to savour life
                        <br /> one footstep at a time...
                    </p>
                </div>
            </section>

            {/* About Me Section */}
            <section className="relative py-25 text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
                    style={{
                        backgroundImage: "url('/pic/intro-hero.jpg')",
                        filter: "blur(3px) brightness(0.75)",
                    }}
                />
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center items-center">
                    <h1 className="text-4xl font-bold mb-6 hover:text-yellow-300">Phuwanai Aphichitpongchai</h1>
                    <p className="text-lg mb-8">
                        Hello! I'm Mark, a passionate high school student with a deep love for
                        technology, robotics, and creative problem-solving.
                    </p>
                </div>
            </section>

            {/* My Story */}
            <section className="relative py-20 bg-gradient-to-r from-white via-gray-100 to-gray-300">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 items-center gap-10">
                    <div className="md:w-1/2">
                        <div className="w-[500px] h-[500px] cursor-pointer" onClick={handleClick}>
                            <Image
                                src={flipped ? "/pic/Me2.jpg" : "/pic/Me1.jpg"}
                                alt="Click to flip"
                                width={400}
                                height={400}
                                className="rounded-3xl shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-6 bg-white/30 backdrop-blur-xl rounded-3xl shadow-lg border border-white/60">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center hover:text-yellow-500">
                            <FaUserAlt className="mr-2 text-blue-500" /> About Me
                        </h2>
                        <p className="text-lg text-gray-700 mb-4 border-b border-gray-300 pb-4">
                            <strong className="hover:text-blue-600 transition">Hello! I'm Mark,</strong> นักเรียนมัธยมปลายที่มีความหลงใหลในเทคโนโลยี, หุ่นยนต์, และการแก้ปัญหาที่สร้างสรรค์ ผมชอบการสร้างสิ่งที่ทำให้ชีวิตสะดวกขึ้น — ไม่ว่าจะเป็นหุ่นยนต์หรือเว็บแอปพลิเคชัน
                        </p>
                        <p className="text-lg text-gray-700 mb-4 border-b border-gray-300 pb-4">
                            <strong className="hover:text-green-600 transition">I believe</strong> ว่าเทคโนโลยีมีพลังในการแก้ปัญหาจริงและทำให้ชีวิตดีขึ้นสำหรับทุกคน ไม่ว่าจะเป็นการดีบักโปรแกรมที่ติดขัดหรือการระดมความคิดกับทีม ผมสนุกกับทุกส่วนของกระบวนการสร้างสรรค์ของโปรมเเกรม
                        </p>
                        <p className="text-lg text-gray-700 mb-4 border-b border-gray-300 pb-4">
                            <strong className="hover:text-orange-600 transition">I’m constantly exploring new skills</strong> ตั้งแต่การพัฒนาเว็บไซต์ไปจนถึงการทำงานกับไมโครคอนโทรลเลอร์ — และผมรักการท้าทายตัวเองด้วยโปรเจกต์ที่ผลักดันขีดจำกัดของผม เป้าหมายของผมไม่ใช่แค่การเป็นนักเขียนโค้ดที่ดีขึ้น แต่ยังเป็นผู้พัฒนาที่ดีขึ้น
                        </p>
                        <p className="text-lg text-gray-700 pb-4">
                            <strong className="hover:text-indigo-600 transition">Outside of tech,</strong> ผมชอบสังเกตวิธีการทำงานของสิ่งต่างๆ จัดระเบียบกระบวนการทำงานให้ราบรื่นที่สุด และบางครั้งก็เข้าสู่โลกของศิลปะและการออกแบบดิจิทัล ผมเป็นคนที่ชื่นชอบการสื่อสารที่ชัดเจน ไอเดียที่สร้างสรรค์ และชอบท้าทายกับการแก้ปัญหาที่ยาก
                        </p>
                    </div>
                </div>
            </section>

            {/* Skill Section */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">My Skill Set</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
                        <SkillIcon icon={<FaPython />} />
                        <SkillIcon icon={<FaJsSquare />} />
                        <SkillIcon icon={<FaHtml5 />} />
                        <SkillIcon icon={<FaCss3Alt />} />
                        <SkillIcon icon={<FaGithub />} />
                        <SkillIcon icon={<FaDatabase />} />
                        <SkillIcon icon={<FaPhp />} />
                        <SkillIcon icon={<FaReact />} />
                        <SkillIcon icon={<FaJava />} />
                    </div>
                </div>
            </section>


            <WheelOfFortune />
            <Footer />

            {/* Animation CSS รวมในไฟล์เดียว */}
            <style jsx>{`
                @keyframes wave {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-wave {
                    animation: wave 1.2s ease-in-out infinite;
                    display: inline-block;
                }

                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

const SkillIcon = ({ icon }) => {
    return (
        <div className="text-6xl text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-110">
            {icon}
        </div>
    );
};
