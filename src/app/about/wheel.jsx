import React, { useState } from 'react';
import { motion } from 'framer-motion';

function WheelOfFortune() {
    const images = [
        { src: '/Wheel/buu.jpg', label: 'BUU Camp' },
        { src: '/Wheel/KMITL.jpg', label: 'KMITL Workshop' },
        { src: '/Wheel/Math Camp.jpg', label: 'Math Camp' },
        { src: '/Wheel/Math Project.jpg', label: 'Math Project' },
        { src: '/Wheel/POSN.jpg', label: 'POSN' },
        { src: '/Wheel/rac.jpg', label: 'RAC' },
        { src: '/Wheel/workshop kmitl.jpg', label: 'Workshop at KMITL' },
    ];

    const [spin, setSpin] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const segmentAngle = 360 / images.length;

    const handleSpin = () => {
        if (spinning) return;

        setSpinning(true);

        const selectedIndex = Math.floor(Math.random() * images.length);
        const angleToStop = selectedIndex * segmentAngle;
        const extraSpins = 5 * 360;
        const targetSpin = spin + extraSpins + angleToStop;

        setSpin(targetSpin);

        setTimeout(() => {
            setSelectedImage(images[selectedIndex]);
            setSpinning(false);

            setTimeout(() => {
                setSelectedImage(null);
            }, 5000);
        }, 3000);
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 relative overflow-hidden">
            {/* วงล้อแบบ fixed image */}
            <motion.img
                src="https://github.com/facebook/react/wiki/react-logo-1000-transparent.png"
                alt="Wheel"
                className="w-96 h-96 object-contain z-10"
                style={{ transformOrigin: 'center' }}
                animate={{ rotate: spin }}
                transition={{ duration: 3, ease: 'easeOut' }}
            />

            {/* ปุ่มหมุน */}
            <button
                onClick={handleSpin}
                disabled={spinning}
                className={`mt-10 px-6 py-3 rounded-lg text-white shadow-md transition ${
                    spinning ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {spinning ? 'Spinning...' : 'Spin the Wheel'}
            </button>

            {/* ภาพรางวัลขนาดใหญ่พร้อมคำอธิบาย */}
            {selectedImage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-40 px-4 text-center">
                    <div className="bg-white p-6 rounded-xl border-8 border-blue-500 shadow-2xl max-w-[90vw]">
                        <img
                            src={selectedImage.src}
                            alt="Selected"
                            className="w-[50vw] max-w-[600px] h-auto rounded-lg object-cover"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-800">{selectedImage.label}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WheelOfFortune;
