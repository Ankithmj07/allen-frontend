import React from 'react';
import champoinImg from '../../assets/champions.png'
import championMobileImg from '../../assets/championMobile.png'

const Champions: React.FC = () => { // Replace with your actual image path

  return (
    <div className='lg:container bg-[#0f0f0f] mx-auto lg:px-[224px] mt-0 pt-0'>
    <h2 className="text-lg md:text-[24px] px-4 mt-0 md:mt-0 font-bold text-left md:text-center">Meet our Champions</h2>
    <section className="bg-[#0f0f0f] py-2 lg:py-5 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <img
          src={champoinImg}
          alt="Champion"
          className="hidden md:block rounded-xl object-cover mt-2 mb-3"
        />
        <img
          src={championMobileImg}
          alt="Champion"
          className="block md:hidden rounded-xl object-cover mt-2 mb-3"
        />

        {/* CTA Buttons */}
        <div className="flex flex-col w-full md:flex-row justify-center md:justify-between items-center gap-4 md:gap-11 mt-0">
          <button className="bg-[#2E3357] text-white px-6 py-4 rounded-xl w-full md:w-[495px] text-sm md:text-lg font-semibold flex items-center justify-between">
            View JEE Main 2025 Results
            <span className="ml-4">{'>'}</span>
          </button>
          <button className="bg-[#2E3357] text-white px-6 py-4 rounded-xl w-full md:w-[495px] text-sm md:text-lg font-semibold flex items-center justify-between">
            View NEET 2024 Results
            <span className="ml-4">{'>'}</span>
          </button>
        </div>
      </div>
    </section>
    <br/>
    </div>
  );
};

export default Champions;
