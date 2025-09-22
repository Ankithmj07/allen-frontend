import React from "react";
import cupImg from '../../assets/cup.png';
import badgeImg from '../../assets/badge.png';
import TopperImg from '../../assets/TopperBanner.png';
import { useDarkMode } from '../../contexts/DarkModeContext';

const CoachingSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={` ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#fff]'}`}>
    <div className={`lg:container mx-auto lg:px-[0px] xl:px-[130px] 2xl:px-[224px] mt-10 pt-0`}>
    <section className={`${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'} px-4 py-12`}>
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 max-w-7xl mx-auto">

        {/* Left Content */}
        <div className="flex-[0.9]">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Online Coaching for <span className="text-[#2F80ED]">NEET</span>
          </h2>

          <div className={`space-y-6 text-sm md:text-lg lg:text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-[#494A4A]'}`}>
            <p className="flex gap-3 items-start leading-6">
                <img src={cupImg} alt="trophy" className="hidden lg:block w-[11%]" />
                <span className="ml-2 tracking-wide">
                  NEET Online Coaching by ALLEN is perfect for students focused on{" "}
                  <span className="text-[#2F80ED] font-semibold">achieving their goals.</span>
                </span>
            </p>
            <p className="flex gap-3 items-start leading-6 items-center">
                <img src={badgeImg} alt="badge" className="hidden lg:block w-[12%] mt-5" />
                <span className="ml-2 tracking-wide">
                    With <span className="text-[#2F80ED] font-semibold">ALLEN’s expert faculty</span> from Kota and {" "}
                <span className="text-[#2F80ED] font-semibold">a result-oriented learning platform</span>, you're not just
                studying — you're improving every single day.
                </span>
            </p>
        </div>

          {/* Buttons */}
          <div className="flex w-full flex-col sm:flex-row gap-4 mt-8">
            <button className="border border-[#0077FF] w-full px-5 py-2 rounded-full font-semibold hover:bg-[#0077FF] hover:text-white transition">
              Download app
            </button>
            <button className="bg-[#0077FF] text-white px-5 py-2 w-full rounded-full font-semibold hover:bg-[#005fd4] transition">
              Talk to us
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 w-full">
            <img src={TopperImg} className="hidden lg:block w-[90%] ml-12 mt-5" alt="Topper Banner"/>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default CoachingSection;
