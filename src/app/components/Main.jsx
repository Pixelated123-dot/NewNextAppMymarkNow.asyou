'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const images = [
    '/Main1.jpg',
    '/Main2.jpg',
    '/Main3.jpg',
    '/Main4.jpg',
    '/Main5.jpg',
    '/Main6.jpg',
    '/Main7.jpg',
]

function Main() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src={images[index]}
                alt="Background"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/40">
                <Link href="/about/main">
                    <div className="relative group cursor-pointer">
                        <Marquee gradient={false} speed={90} className="text-4xl md:text-6xl font-bold drop-shadow-lg relative z-10 overflow-hidden">
                            Welcome to MyMarkNow.asyou
                        </Marquee>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-0 group-hover:opacity-40 group-hover:shine blur-xl" />
                    </div>
                </Link>

                <p className="text-lg md:text-2xl mt-4 drop-shadow-md z-20 relative">
                    Your journey into creativity starts here. <br/> <strong>By Phuwanai Aphichitpongchai</strong>
                </p>
            </div>

            <style jsx>{`
                .group:hover span {
                    animation: shine 2.0s linear infinite;
                }

                @keyframes shine {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Main