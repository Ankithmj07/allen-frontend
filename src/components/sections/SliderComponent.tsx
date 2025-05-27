// components/Slider.tsx
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  desktopImage: string;
  mobileImage?: string;
  title: string;
  description?: string;
}

interface SliderProps {
  slides: Slide[];
  desktopWidth?: string; // e.g., "w-[400px]"
  desktopHeight?: string; // e.g., "h-[225px]"
  mobileWidth?: string;
  mobileHeight?: string;
  tabletWidth?: string;
  tabletHeight?:string
  imageClassName?: string; // optional extra styles
}

const SliderComponent: React.FC<SliderProps> = ({
  slides,
  desktopWidth = 'w-full',
  desktopHeight = 'h-[225px]',
  mobileWidth = 'w-full',
  mobileHeight = 'h-[180px]',
  tabletWidth = 'w-full',
  tabletHeight= 'h-[432.8px]',
  imageClassName = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
  
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-[#0f0f0f] overflow-x-auto scrollbar-hide">
      <div className="flex flex-col items-center justify-center text-center pt-6 md:px-2 pb-4">
          <img
            src={
              isMobile && currentSlide.mobileImage
                ? currentSlide.mobileImage
                : isTablet && currentSlide.mobileImage
                ? currentSlide.mobileImage
                : currentSlide.desktopImage
            }
            alt={currentSlide.title}
            className={`
              ${isMobile ? mobileWidth : isTablet ? tabletWidth : desktopWidth}
              ${isMobile ? mobileHeight : isTablet ? tabletHeight : desktopHeight}
              rounded-4xl object-cover transition-all duration-500
              ${imageClassName}
            `}
          />
        </div>


      <div className="flex justify-center mt-0 gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
