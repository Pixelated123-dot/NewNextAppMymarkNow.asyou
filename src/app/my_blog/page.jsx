"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChild, FaLightbulb, FaLaptopCode, FaTools, FaCode, FaRocket } from "react-icons/fa";


function My_blogPage() {
    const waveText = "My Blog";

    const [clickedCards, setClickedCards] = useState(Array(9).fill(false));

        const resetCards = () => {
        setClickedCards(Array(9).fill(false)); 
        };
    
        // ฟังก์ชันจัดการคลิกการ์ด
        const handleCardClick = (index) => {
        setClickedCards(prevState => {
            const newState = [...prevState];
            newState[index] = true; 
            return newState;
        });
        };

    return (
        <>
        <Navbar />
        <main className="text-white font-sans">
            {/* Hero Section */}
            <section
            className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/AllPicture/intro2.jpg')" }}
            >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap justify-center gap-x-1">
                {waveText.split("").map((char, i) => (
                    <span
                    key={i}
                    className="funky-text"
                    style={{
                        animationDelay: `${i * 150}ms`,
                    }}
                    >
                    {char === " " ? "\u00A0" : char}
                    </span>
                ))}
                </h1>
                <p className="text-xl mt-4 max-w-2xl mx-auto">
                Where creativity meets innovation.
                </p>
            </div>
            </section>

            {/* About Me Section */}
            <section className="text-black py-20 px-6 md:px-16 text-center space-y-10 relative overflow-hidden rounded-xl border-4 border-dashed shadow-xl bg-gradient-to-r from-cyan-300 to-blue-500">
                <div className="relative z-10 bg-white text-black p-8 rounded-xl border-4 border-dashed border-gradient-to-r from-cyan-400 to-blue-600">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg">
                        The Journey Through High School
                    </h2>
                    <p className="text-md leading-relaxed max-w-3xl mx-auto text-gray-800 hover:scale-105 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] transition duration-300">
                        สวัสดีครับ ผมมาร์ค นักเรียนมัธยมปลายที่สนใจด้านเทคโนโลยี เเละการเขียนโปรแกรม
                        <br/>เว็บไซต์นี้รวบรวมผลงานและประสบการณ์ของผมในช่วงมัธยมปลายไว้หวังว่าจะเป็นแรงบันดาลใจให้กับใครหลายคน
                    </p>

                    <div className="w-160 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-6 shadow-lg"></div>
                </div>
            </section>
            
            <div className="space-y-24">
            <div className="bg-white text-black py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img src="/Myblog/1.jpg" alt="Blog 1" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="text-left space-y-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <h3 className="text-3xl font-bold flex items-center gap-3 text-pink-500">
                        <FaChild className="text-pink-400 w-7 h-7" />
                            Beginning of My High School Journey
                        </h3>
                    </div>
                    <h3 className="text-3xl font-bold">เริ่มต้นชีวิต ม.ปลาย</h3>
                    <p className="text-lg leading-relaxed">
                        สวัสดีครับ ผมมาร์ค ปัจจุบันกำลังศึกษา ม.6 สายวิทย์-คณิต ณ โรงเรียนชลราษฎรอำรุง
                        จุดเริ่มต้นของชีวิต ม.ปลาย เต็มไปด้วยความเปลี่ยนแปลง ทั้งเรื่องวิชาการที่เข้มข้น กิจกรรมที่หลากหลายมากขึ้น
                        เเละตารางเวลาที่ต้องจัดให้เป็นระเบียบมากขึ้น เพื่อเตรียมความพร้อมม.ปลาย ในรั้วส้มฟ้าเเห่งนี้
                    </p>
                    </div>
                </div>
                </div>

                {/* Part 2 - Gray */}
                <div className="bg-neutral-100 text-black py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <img src="/Myblog/2.jpg" alt="Blog 2" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="text-left space-y-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <h3 className="text-3xl font-bold flex items-center gap-3 text-yellow-500">
                        <FaLightbulb className="text-yellow-400 w-7 h-7" />
                        Turning Point of Inspiration
                        </h3>
                    </div>
                    <h3 className="text-3xl font-bold">จุดเปลี่ยนแห่งแรงบันดาลใจ</h3>
                    <p className="text-lg leading-relaxed">
                        ตั้งแต่ ม.4 ผมเริ่มสนใจคณิตศาสตร์อย่างจริงจัง และได้ทำโครงงานคณิตศาสตร์บูรณาการจนประสบความสำเร็จในระดับเขต
                        แม้จะไม่มีโอกาสได้ไปแข่งขันในระดับประเทศ เนื่องจากการยกเลิกจัดเเข่งขันโดย สพฐ. ผมกลับได้รับสิ่งที่สำคัญยิ่งกว่ารางวัล
                        นั่นคือการค้นพบว่า คณิตศาสตร์สามารถต่อยอดไปสู่สิ่งที่ใหญ่กว่านั้นได้ จากจุดนั้นเอง ผมเริ่มสนใจด้านคอมพิวเตอรร์เพราะเป็นศาสตร์ที่ผสมผสานคณิตศาสตร์และความคิดสร้างสรรค์ได้อย่างน่าทึ่ง การได้เขียนโปรแกรม การเรียนรู้ภาษาคอมพิวเตอร์ และการคิดเชิงตรรกะ ล้วนเป็นสิ่งที่ผมรู้สึกหลงใหล
                    </p>
                    </div>
                </div>
                </div>

                {/* Part 3 - White */}
                <div className="bg-white text-black py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img src="/Myblog/3.jpg" alt="Blog 3" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="text-left space-y-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <h3 className="text-3xl font-bold flex items-center gap-3 text-blue-600">
                        <FaLaptopCode className="text-blue-500 w-7 h-7" />
                        Opening the World of Computers
                        </h3>
                    </div>
                    <h3 className="text-3xl font-bold">เปิดโลกคอมพิวเตอร์</h3>
                    <p className="text-lg leading-relaxed">
                        จากความหลงใหลในคณิตศาสตร์ ผมเริ่มเข้าสู่โลกของการเขียนโปรแกรม ค้นพบว่าคอมพิวเตอร์คือพื้นที่ที่รวมทั้งตรรกะและความคิดสร้างสรรค์ไว้ด้วยกัน
                        ผมมีโอกาสเข้าร่วมงาน K-Engineer World Tour and Workshop 2024 ซึ่งเป็นอีกจุดเปลี่ยนสำคัญที่ปลุกแรงบันดาลใจของผมให้ลุกโชนยิ่งขึ้น โดยเฉพาะกิจกรรมการต่อแผงวงจร IoT ควบคุมผ่านแอป Blynk ที่ทำให้ผมเห็นภาพชัดเจนว่าผมต้องการเดินบนเส้นทางนี้จริงจัง
                        ด้วยเป้าหมายที่ชัดเจน
                    </p>
                    </div>
                </div>
                </div>

                {/* Part 4 - Gray */}
                <div className="bg-neutral-100 text-black py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <img src="/Myblog/4.jpg" alt="Blog 4" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="text-left space-y-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <h3 className="text-3xl font-bold flex items-center gap-3 text-gray-700">
                        <FaTools className="text-gray-600 w-7 h-7" />
                        Real-World Inspiration
                        </h3>
                    </div>
                    <h3 className="text-3xl font-bold">แรงบันดาลใจจากสนามจริง</h3>
                    <p className="text-lg leading-relaxed">
                        ผมจึงลงสนามสอบ สอวน. คอมพิวเตอร์ และได้ผ่านเข้าค่าย 1 ซึ่งเป็นประสบการณ์ที่เปิดโลกของผมอย่างแท้จริง ผมได้เรียนรู้การเขียนโปรเเกรม รู้จักการทำงานของโค้ดในระดับลึก และเริ่มพัฒนาทักษะด้านนี้ต่อเนื่อง
                        <br/><br/>
                        ผมพยายามพัฒนาตัวเองอยู่เสมอผ่านการเข้าร่วมกิจกรรม Hackathon และอบรมเชิงปฏิบัติการในด้านต่างๆ
                        โดยเฉพาะในสาย AI และ IoT ซึ่งเป็นหัวข้อที่ผมให้ความสนใจเป็นพิเศษ
                        เพื่อยกระดับโปรเจกต์ที่ทำให้มีความสมบูรณ์และใช้งานได้จริงมากยิ่งขึ้น
                    </p>
                    </div>
                </div>
                </div>

                {/* Part 5 - White */}
                <div className="bg-white text-black py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img src="/Myblog/5.jpg" alt="Blog 5" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="text-left space-y-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <h3 className="text-3xl font-bold flex items-center gap-3 text-green-600">
                        <FaCode className="text-green-500 w-7 h-7" />
                        First Step into Website Development
                        </h3>
                    </div>
                    <h3 className="text-3xl font-bold">ก้าวแรกสู่โลกแห่งการพัฒนาเว็บไซต์</h3>
                    <p className="text-lg leading-relaxed">
                        นอกจากด้านวิชาการ ผมยังได้เริ่มต้นเรียนรู้และศึกษาแนวทางการเขียนเว็บไซต์ด้วยตัวเอง
                        จากพื้นฐานภาษา HTML, CSS และ JavaScript จนเริ่มเข้าใจหลักการสำคัญ
                        ผมตั้งเป้าหมายว่าจะต้องเข้าใจสิ่งพื้นฐานให้ดี ก่อนจะต่อยอดไปสู่ React, Tailwind CSS
                        และเฟรมเวิร์กอื่นๆ ที่ซับซ้อนขึ้น
                        <br/><br/>
                        ผมได้ลงมือทำโปรเจกต์จริงผ่านกิจกรรมและค่ายต่างๆ ที่จัดโดย สจล. หลายครั้ง
                        ซึ่งทุกครั้งที่ได้ร่วมลงมือทำ ยิ่งทำให้ผมมั่นใจว่าที่นี่คือสถานที่ที่ผมอยากเติบโตและเรียนรู้ไปอีกขั้น
                    </p>
                    </div>
                </div>
                </div>

                {/* Part 6 - Gray */}
                <div className="bg-neutral-100 text-black py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <img src="/Myblog/6.jpg" alt="Blog 6" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="text-left space-y-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <h3 className="text-3xl font-bold flex items-center gap-4 text-indigo-700">
                        <span className="bg-white/30 backdrop-blur-md p-2 rounded-full shadow-inner">
                            <FaRocket className="text-indigo-600 w-6 h-6" />
                        </span>
                        Looking to the Future
                        </h3>
                    </div>
                    <h3 className="text-3xl font-bold">มองไกลสู่อนาคต</h3>
                    <p className="text-lg leading-relaxed">
                        เป้าหมายของผมคือการเติบโตเป็นนักพัฒนาด้านเทคโนโลยีที่สามารถสร้างนวัตกรรมที่ตอบโจทย์โลกยุคใหม่ได้จริง
                        ผมเชื่อมั่นในความกระหายใคร่รู้ และมองทุก bug ว่าเป็นโอกาสในการเรียนรู้
                        ผมตั้งใจพัฒนาตัวเองให้พร้อมสู่เส้นทางวิศวกรรมคอมพิวเตอร์ในรั้วพระจอมเกล้าลาดกระบัง
                        และต่อยอดความรู้เพื่อคืนกลับสู่สังคมในอนาคต
                    </p>
                    </div>
                </div>
                </div>

            </div>


            {/* My Album Section */}
            <section className="flex justify-center items-center pt-10 pb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white inline-block bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-xl shadow-lg mb-12">
                    My Album
                </h2>
            </section>

            <div className="grid grid-cols-7 grid-rows-6 gap-0">
                    <div><img src="/AllPicture/1.jpg" alt="photo1" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/2.jpg" alt="photo2" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/3.jpg" alt="photo3" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/4.jpg" alt="photo4" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/5.jpg" alt="photo5" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/6.jpg" alt="photo6" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/7.jpg" alt="photo7" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/8.jpg" alt="photo8" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/9.jpg" alt="photo9" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/10.jpg" alt="photo10" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/11.jpg" alt="photo11" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/12.jpg" alt="photo12" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/13.jpg" alt="photo13" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/14.jpg" alt="photo14" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/15.jpg" alt="photo15" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/16.jpg" alt="photo16" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/17.jpg" alt="photo17" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/18.jpg" alt="photo18" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/19.jpg" alt="photo19" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/20.jpg" alt="photo20" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/21.jpg" alt="photo21" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/22.jpg" alt="photo22" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/23.jpg" alt="photo23" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/24.jpg" alt="photo24" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/25.jpg" alt="photo25" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/26.jpg" alt="photo26" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/27.jpg" alt="photo27" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/28.jpg" alt="photo28" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/29.jpg" alt="photo29" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/30.jpg" alt="photo30" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/31.jpg" alt="photo31" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/32.jpg" alt="photo32" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/33.jpg" alt="photo33" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/34.jpg" alt="photo34" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/35.jpg" alt="photo35" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/36.jpg" alt="photo36" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/37.jpg" alt="photo37" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/38.jpg" alt="photo38" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/39.jpg" alt="photo39" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/40.jpg" alt="photo40" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/41.jpg" alt="photo41" className="object-cover w-full h-full" /></div>
                    <div><img src="/AllPicture/42.jpg" alt="photo42" className="object-cover w-full h-full" /></div>
                </div>
    
                <section className="my-album py-20 px-6 md:px-16 bg-white text-center space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white inline-block bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-xl shadow-lg mb-8">
                        My Experience
                    </h2>
                    <div className="flex justify-evenly gap-10">
                        {[0, 1, 2].map((stackIndex) => (
                        <div key={stackIndex} className="card-stack relative w-72 h-96 flex flex-col items-center overflow-hidden">
                            {[0, 1, 2].map((cardIndex) => {
                            const index = stackIndex * 3 + cardIndex;
                            const isClicked = clickedCards[index];

                            return (
                                <div
                                key={index}
                                className={`card absolute w-full h-full top-0 left-0 transition-transform duration-300
                                    ${isClicked ? 'transform translate-y-[-20px]' : ''} 
                                    cursor-pointer rounded-lg`} // เพิ่ม rounded-lg สำหรับมุมโค้งของการ์ด
                                style={{ zIndex: isClicked ? 0 : index + 1 }}
                                onClick={() => handleCardClick(index)}
                                >
                                <img 
                                    src={`AllPicture/Card/${index + 1}.jpg`} 
                                    alt={`image${index + 1}`} 
                                    className="w-full h-full object-cover rounded-lg" // เพิ่ม rounded-lg ที่รูปเพื่อให้มุมโค้ง
                                />
                                </div>
                            );
                            })}
                        </div>
                        ))}
                    </div>
                    {clickedCards.every(card => card) && (
                        <button 
                        onClick={resetCards} 
                        className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg"
                        >
                        Reset Cards
                        </button>
                    )}
                    </section>

            {/* YouTube Section */}
            <section className="py-10 px-6 md:px-16 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white inline-block bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-xl shadow-lg mb-12">
                    My YouTube Channel
                </h2>
                
                <div className="flex justify-center">
                    <a
                    href="https://www.youtube.com/@MyMarkNow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-5xl w-full rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
                    >
                    <img
                        src="/Youtube.png"
                        alt="YouTube Channel Thumbnail"
                        className="w-full h-auto"
                    />
                    <div className="p-6 text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                        My Tech & Robotics Journey
                        </h3>
                        <p className="text-gray-600 text-lg">
                        Click to explore tutorials, projects & fun tech content!
                        </p>
                    </div>
                    </a>
                </div>
            </section>

            <section className="section-spatial py-10 px-6 md:px-16 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white inline-block bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-xl shadow-lg mb-8">
                    My Spatial.io Projects
                </h2>
                <div className="flex justify-center">
                    <a
                    href="https://spatial.io/@MyMarkNow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-5xl w-full rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
                    >
                    <img
                        src="/Spatial.io.png"
                        alt="Spatial.io Project Thumbnail"
                        className="w-full h-auto"
                    />
                    <div className="p-6 text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                        My Virtual Spaces & Interactive Projects
                        </h3>
                        <p className="text-gray-600 text-lg">
                        Click to explore my virtual environments, interactive spaces, and creative designs on Spatial.io!
                        </p>
                    </div>
                    </a>
                </div>
                </section>
        </main>
        <Footer />

        {/* แอนิเมชันแปลกใหม่ */}
        <style jsx>{`
            .funky-text {
            display: inline-block;
            animation: funky 2s infinite ease-in-out;
            }

            @keyframes funky {
            0% {
                transform: rotate(0deg) scale(1);
                color: #ffffff;
            }
            20% {
                transform: rotate(5deg) scale(1.2);
                color: #00ffff;
            }
            40% {
                transform: rotate(-5deg) scale(0.9);
                color: #ff00ff;
            }
            60% {
                transform: rotate(3deg) scale(1.1);
                color: #ffff00;
            }
            80% {
                transform: rotate(-3deg) scale(1);
                color: #00ff88;
            }
            100% {
                transform: rotate(0deg) scale(1);
                color: #ffffff;
            }
            }
        `}</style>
        </>
    );
}

export default My_blogPage;