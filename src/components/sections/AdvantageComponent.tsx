import React, { useState } from "react";
import downArrow from "../../assets/downArrow.svg";
import downArrowBlack from "../../assets/downArrowBlack.svg";
import { useDarkMode } from '../../contexts/DarkModeContext';

export interface AdvantageItem {
  title: string;
  description: string;
  imageURL: string;
  mobileImgUrl: string;
}

interface AppAdvantageProps {
  title: string;
  data: AdvantageItem[];
  ctaText?: string;
  onCtaClick?: () => void;
  bgClass?: string;
}

const AppAdvantage: React.FC<AppAdvantageProps> = ({
  title,
  data,
  ctaText = "Explore More",
  onCtaClick,
  bgClass,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDarkMode } = useDarkMode();

  return (
    <div className={` ${bgClass} ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
    <div className={`lg:container lg:px-[130px] mx-auto 2xl:px-[224px] mt-0 pt-5 md:pt-8`}>
      <section className={`${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'} px-6 pb-6 md:pb-12`}>
        <h2 className="text-lg md:text-2xl text-left md:text-center md:text-2xl font-bold mb-8 md:mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-25">
          {/* Left - Accordion */}
          <div className="lg:col-span-2 space-y-10 w-full">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer border-b border-gray-700 pb-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm lg:text-[18px] font-semibold">{item.title}</h3>
                  <img
                    src={isDarkMode ? downArrow : downArrowBlack}
                    alt="Toggle"
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <div>
                    <p className={`text-sm md:text-[14px] lg:text-[15px] ${isDarkMode ? 'text-gray-300' : 'text-[#494A4A]'} mt-2 leading-[1.5rem]`}>
                      {item.description}
                    </p>
                    <div className="lg:hidden md:col-span-3 w-full mt-4">
                      <img
                        src={item.mobileImgUrl}
                        alt="Advantage Visual"
                        className="rounded-2xl w-full md:hidden lg:w-130 max-w-full mx-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Desktop image */}
          <div className="hidden lg:block md:ml-8 lg:col-span-3 w-full">
            <img
              src={data[activeIndex].imageURL}
              alt="Advantage Visual"
              className="rounded-2xl w-full md:w-130 max-w-full mx-auto"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14 lg:mt-26">
          <button
            className="bg-[#0666EB] hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold"
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AppAdvantage;
