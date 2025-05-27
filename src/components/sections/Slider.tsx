import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911179/m6l4kbtrdldjtbbzuyrk.webp?_upload_ref=ic_img_tool&__ar__=1.78',
    title: 'First Slide',
    description: 'This is the first slide',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1745222201/algooaqu0aioqkysfkd5.png?_upload_ref=ic_img_tool&__ar__=1.78',
    title: 'Second Slide',
    description: 'This is the second slide',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911254/tjoxygcum0qc6gp9lxuw.webp?_upload_ref=ic_img_tool&__ar__=1.78',
    title: 'Third Slide',
    description: 'This is the third slide',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911357/o5vw0mvt9ovusu2l8lqe.webp?_upload_ref=ic_img_tool&__ar__=1.78',
    title: 'Third Slide',
    description: 'This is the third slide',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911428/wpslqk3e1lpalk1hsqid.webp?_upload_ref=ic_img_tool&__ar__=1.78',
    title: 'Third Slide',
    description: 'This is the third slide',
  }
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center px-4 pt-6 pb-4">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="w-[400px] max-w-md h-[225px] rounded-lg object-cover transition-all duration-500"
        />
      </div>

      {/* Dot Controls */}
      <div className="flex justify-center mt-0 gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
