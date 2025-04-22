import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-inner">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-8 text-center">
                    <p className="text-sm md:text-base font-light tracking-wide">
                        © 2024 <span className="text-white font-semibold hover:text-yellow-300 transition duration-500">MyMarkNow.asyou</span> All rights reserved.
                    </p>
                    <div className="flex gap-10 text-xl">
                        <a href="https://www.facebook.com/markh.phuw.nay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition" >
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/mar.kp15uwanai/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/Pixelated123-dot" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                            <FaGithub />
                        </a>
                        <a href="mailto:phuwanaimark24@gmail.com" className="hover:text-red-400 transition">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

