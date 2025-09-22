import React from 'react';
import HeroSlider from './HeroSlider'
import { useDarkMode } from '../../contexts/DarkModeContext';


const HeroSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#edf2fa]'}`}>
        <div className='container mx-auto lg:px-[40px] xl:px-[130px] 2xl:px-[224px] grid grid-cols-1 lg:grid-cols-2 items-center mt-0 pt-20 md:pt-10'>
            <section className={`py-8 px-6 text-center lg:text-left mt-4 md:mt-15 lg:mt-10 pt-0 ${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'}`}>
              <h1 className="text-xl lg:text-[28px] xl:text-[32px] font-bold leading-tight">
                Get up to 90% scholarship on <br className="hidden lg:block" />
                <span className="">ALLEN Courses</span>
              </h1>
              <p className="text-base font-[600] lg:text-[20px] font-[700] mt-5 lg:mt-12 font-bold">Register for scholarship</p>
              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                <button className="px-4 w-39 font-semibold py-2 border border-blue-500 border-2 rounded-full hover:bg-blue-600 transition-all">
                  Online Courses
                </button>
                <button className="px-4 w-39 font-semibold py-2 border border-blue-500 border-2 rounded-full hover:bg-blue-600 transition-all">
                  Offline Courses
                </button>
              </div>
            </section>
            <div className='w-full'>
                <HeroSlider/>
            </div>
        </div>
        <br/>
    </div>
  );
};

export default HeroSection;