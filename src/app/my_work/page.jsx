"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import MyExperience from '../Myexperience/page';

function My_work() {
    const waveText = "Curious mind. Creative hands.";
    const [selected, setSelected] = useState(null);

    const projects = [
        {
            id: 1,
            title: "My Shop",
            image: "/Myworkpic/My shop.png",
            short: "โปรเจกต์ร้านค้าออนไลน์ที่ออกแบบอย่างทันสมัย โดยใช้ HTML, CSS, และ JavaScript",
            description: "นี่คือโปรเจกต์ร้านค้าออนไลน์ที่ออกแบบให้ใช้งานได้ง่ายและทันสมัย ด้วยฟังก์ชันต่างๆ เช่น การเพิ่มสินค้าลงในตะกร้าสินค้าและการชำระเงินผ่านระบบออนไลน์",
            link: "http://127.0.0.1:5500/Mywork/My%20shop/homepage.html",  
        },
        {
            id: 2,
            title: "Task Assigner Website",
            image: "/Myworkpic/Task Assigner Website.png",
            short: "แอปพลิเคชัน Task Assigner ที่สามารถมอบหมายงาน เพิ่ม ลบ และแสดงผลงานต่างๆ แบบง่ายโดยใช้ HTML, CSS, และ JavaScript",
            description: "Task Assigner เป็นเครื่องมือที่ช่วยในการมอบหมายงานและติดตามความคืบหน้าของแต่ละงาน ซึ่งสามารถเพิ่มและลบงานได้ง่าย",
            link: "http://127.0.0.1:5500/Mywork/TaskAssingner.html",  // แก้ไข path ให้ถูกต้อง
        },
        {
            id: 3,
            title: "Todolist",
            image: "/Myworkpic/Todolist.png",
            short: "โปรเจกต์นี้เป็นการสร้าง Todo list ที่สามารถเพิ่ม ลบ และแสดงผลงานต่างๆ โดยใช้ HTML, CSS, และ JavaScript",
            description: "โปรเจกต์นี้ช่วยให้ผู้ใช้งานสามารถจัดการงานต่างๆ ในรูปแบบของรายการที่สามารถเพิ่ม ลบ และแก้ไขได้",
            link: "http://127.0.0.1:5500/Mywork/Todolist.html",  // แก้ไข path ให้ถูกต้อง
        },
        {
            id: 4,
            title: "Future Shop",
            image: "/Myworkpic/Future Shop.png",
            short: "โปรเจกต์ร้านค้าออนไลน์ที่มีระบบจัดการสินค้า และเชื่อมกับ API ภายนอกแสดงสินค้าต่างๆ โดยใช้ HTML, CSS, และ JavaScript",
            description: "Future Shop คือโปรเจกต์ที่ใช้เชื่อมต่อกับ API ภายนอกเพื่อแสดงสินค้าในร้านออนไลน์ โดยมาพร้อมระบบจัดการสินค้าภายใน",
            link: "http://127.0.0.1:5500/Mywork/Future%20Shop/index.html",  // แก้ไข path ให้ถูกต้อง
        },
        {
            id: 5,
            title: "KanBan Board",
            image: "/Myworkpic/KanBan Board.png",
            short: "โปรเจกต์ Kanban board ที่สร้างขึ้นโดยใช้ HTML, CSS, และ JavaScript",
            description: "KanBan Board ช่วยให้ผู้ใช้งานสามารถติดตามงานในรูปแบบของคอลัมน์ต่างๆ ได้อย่างสะดวก",
            link: "http://127.0.0.1:5500/Mywork/KanBan%20Board/KanBan.html",  // แก้ไข path ให้ถูกต้อง
        },
        {
            id: 6,
            title: "My First Website",
            image: "/Myworkpic/My First Website .png",
            short: "เว็บไซต์แรกของผมที่สร้างขึ้นโดยใช้ HTML, CSS และ JavaScript",
            description: "เว็บไซต์แรกที่สร้างขึ้นในฐานะผู้พัฒนาเว็บ ใช้ HTML, CSS และ JavaScript ในการสร้างโครงสร้างและออกแบบ",
            link: "http://127.0.0.1:5500/Mywork/My%20First%20Shop/Class%20Project.html",  // แก้ไข path ให้ถูกต้อง
        }
    ];

    return (
        <>
            <Navbar />
            <main>
                <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Work.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-4xl font-bold flex flex-wrap justify-center gap-x-1">
                            {waveText.split("").map((char, i) => (
                                <span
                                    key={i}
                                    className="animate-bounce bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent drop-shadow"
                                    style={{ animationDelay: `${i * 100}ms` }}  // แก้ไขตรงนี้
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>
                        <p className="text-xl mt-4">I love it...and I’m driven to pursue it.</p>
                    </div>
                </section>


                <section className="py-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
                    <h2 className="text-5xl text-center font-bold mb-4 text-gray-800 drop-shadow-md">✨ My Projects ✨</h2>
                    <p className="text-center text-gray-600 text-lg mb-12">Click on a card to see more details 🎯</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelected(project)}
                                className="group cursor-pointer p-6 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-105 transform hover:bg-white/80"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4 border border-white/40 shadow-md group-hover:shadow-lg transition duration-300"
                                />
                                <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-900 transition duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700 mt-2">{project.short}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {selected && (
                    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-12">
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden relative animate-fadeIn scale-[1.02]">
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-3xl font-bold transition"
                                aria-label="Close"
                            >
                                &times;
                            </button>

                            <div className="w-full md:w-1/2 h-[300px] md:h-auto">
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-full object-cover transition duration-500"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-white">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{selected.title}</h3>
                                    <p className="whitespace-pre-line text-gray-700 text-base leading-relaxed">{selected.description}</p>
                                </div>

                                {selected.link && (
                                    <a
                                        href={selected.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        <FaExternalLinkAlt /> Visit This Project
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <section className="py-32 bg-white text-center min-h-screen flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-semibold mb-8 text-gray-800">My Portfolio</h2>
                    <div className="flex justify-center w-full px-8 md:px-16">
                        <div className="w-full md:w-3/4 lg:w-2/3 text-center">
                            <img
                                src="/Myworkpic/Portfolio.png"
                                alt="Portfolio"
                                className="w-full h-auto rounded-lg mb-6 shadow-2xl transition-transform transform hover:scale-105"
                            />
                            <a
                                href="https://mark-portfolio-now-rv2t.vercel.app/"
                                className="text-2xl font-medium text-blue-500 hover:text-blue-700 transition duration-300"
                            >
                                Mark Portfolio
                            </a>
                            <p className="text-lg text-gray-600 mt-4">
                                Welcome to my personal portfolio! This website is built using React and showcases my skills and projects in web development.
                            </p>
                        </div>
                    </div>
                </section>
                
                <MyExperience/>

            </main>
            <Footer />
        </>
    );
}

export default My_work;

