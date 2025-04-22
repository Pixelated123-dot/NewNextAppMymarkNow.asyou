"use client"
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col bg-gradient-to-tr from-white to-blue-50">
                <main className="flex flex-col md:flex-row max-w-6xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-2xl gap-12 flex-grow mb-10">
                    {/* Left Section */}
                    <section className="flex-1 space-y-6">
                        <h2 className="text-5xl font-bold text-gray-800">Contact Us</h2>
                        <p className="text-lg text-gray-600">
                            We’d love to hear from you! Whether it's through the form, an email, or a good old-fashioned phone call, we’re here to help. Your questions and feedback matter to us!
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-orange-500" />
                                <strong>064-991-53xx</strong>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-orange-500" />
                                <strong>info@phuwanaimark24@gmail.com</strong>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-orange-500" />
                                <strong>68 Santi Kasem Road, San Suk Subdistrict, Mueang District, Chonburi Province, 20130</strong>
                            </div>
                            <div>
                                <img src="/MyMarkNow.asyou.png" alt="Contact" className="w-[1400px] md:w-[1600px] shadow-2xl transition-transform hover:scale-105" />
                            </div>
                        </div>
                    </section>

                    {/* Right Section - Contact Form */}
                    <section className="flex-1">
                        <form className="space-y-6 bg-white p-6 rounded-2xl shadow-xl border border-white/20">

                            {/* Name */}
                            <div className="flex gap-4">
                                <div className="flex items-center bg-white/50 hover:bg-white/70 transition-all rounded-full px-4 py-2 shadow-md focus-within:ring-2 ring-blue-300 w-full">
                                    <FaUser className="text-gray-500 mr-3" />
                                    <input type="text" placeholder="First Name" className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500" required />
                                </div>
                                <div className="flex items-center bg-white/50 hover:bg-white/70 transition-all rounded-full px-4 py-2 shadow-md focus-within:ring-2 ring-blue-300 w-full">
                                    <FaUser className="text-gray-500 mr-3" />
                                    <input type="text" placeholder="Last Name" className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500" required />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center bg-white/50 hover:bg-white/70 transition-all rounded-full px-4 py-2 shadow-md focus-within:ring-2 ring-blue-300">
                                <FaEnvelope className="text-gray-500 mr-3" />
                                <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500" required />
                            </div>

                            {/* Phone */}
                            <div className="flex items-center bg-white/50 hover:bg-white/70 transition-all rounded-full px-4 py-2 shadow-md focus-within:ring-2 ring-blue-300">
                                <FaPhone className="text-gray-500 mr-3" />
                                <input type="text" placeholder="Phone (optional)" className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500" />
                            </div>

                            {/* Message */}
                            <div className="flex items-start bg-white/50 hover:bg-white/70 transition-all rounded-2xl px-4 py-2 shadow-md focus-within:ring-2 ring-blue-300">
                                <FaCommentDots className="text-gray-500 mt-2 mr-3" />
                                <textarea placeholder="Your Message" className="bg-transparent outline-none w-full h-32 text-gray-800 placeholder-gray-500 resize-none" required />
                            </div>

                            {/* Checkbox */}
                            <label className="flex items-start gap-3 text-sm text-gray-700">
                                <input type="checkbox" required className="mt-1 accent-orange-500" />
                                <span>I agree to the terms and conditions.</span>
                            </label>

                            {/* Submit Button */}
                            <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:scale-105 transition-all duration-300">
                                <FaCheckCircle />
                                Submit
                            </button>
                        </form>
                    </section>
                </main>
            </div>
        <Footer />
        </>
    )
}

export default ContactPage