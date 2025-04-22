'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/next.svg'
import Image from 'next/image'
import { FaHome, FaBlog, FaBriefcase, FaEnvelope, FaInfoCircle, FaLaptopCode } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className="w-full top-0 left-0 z-10 bg-transparent text-black px-6 py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-4 hover:text-yellow-300 transition duration-300">
                        <Link href="http://localhost:3000/">
                            <Image src={Logo} width={100} height={100} alt="NextJS Logo" />
                        </Link>
                        <h1 className="text-2xl font-semibold hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
                            MyMarkNow.asyou
                        </h1>
                    </div>

                    <ul className="flex gap-4 items-center">
                        <li>
                            <Link
                                href="/about/main"
                                className="flex items-center gap-2 text-xl border border-white px-4 py-2 bg-white/10 hover:bg-white/30 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] transition duration-300"
                            >
                                <FaInfoCircle /> About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my_blog"
                                className="flex items-center gap-2 text-xl border border-white px-4 py-2 bg-white/10 hover:bg-white/30 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] transition duration-300"
                            >
                                <FaBlog /> My Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my_work"
                                className="flex items-center gap-2 text-xl border border-white px-4 py-2 bg-white/10 hover:bg-white/30 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] transition duration-300"
                            >
                                <FaBriefcase /> My Work
                            </Link>
                        </li>

                        
                        <li>
                            <Link
                                href="https://mark-portfolio-now-rv2t.vercel.app/"
                                className="flex items-center gap-2 text-xl border border-white px-4 py-2 bg-white/10 hover:bg-white/30 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] transition duration-300"
                            >
                                <FaLaptopCode /> Portfolio
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 text-xl border border-white px-4 py-2 bg-white/10 hover:bg-white/30 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] transition duration-300"
                            >
                                <FaEnvelope /> Contact
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar