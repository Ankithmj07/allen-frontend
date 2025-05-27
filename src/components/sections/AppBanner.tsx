import React, { useState } from "react";
import appImg1 from "../../assets/app1.png";
import appImg2 from "../../assets/app2.png";
import appImg3 from "../../assets/app3.png";
import downArrow from "../../assets/downArrow.svg";
import mobileImg1 from '../../assets/mobileApp1.png'
import mobileImg2 from '../../assets/mobileApp2.png'
import mobileImg3 from '../../assets/mobileApp3.png'

interface AdvantageItem {
  title: string;
  description: string;
  imageURL: string;
  mobileImgUrl: string
}

const data: AdvantageItem[] = [
  {
    title: "400 Lakh+ Questions Practised",
    description:
      "Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas",
    imageURL: appImg1,
    mobileImgUrl:mobileImg1
  },
  {
    title: "10 Lakh+ hours of Learning Content consumed",
    description:
      "Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level.",
    imageURL: appImg2,
    mobileImgUrl:mobileImg2
  },
  {
    title: "10 Lakh+ Doubts Solved",
    description:
      "Get instant answers with faculty help & our AI Assistant available 24/7 in any language.",
    imageURL: appImg3,
    mobileImgUrl:mobileImg3
  },
];

const AppAdvantage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#1d1d1d] lg:container mx-auto lg:px-[224px] mt-0 pt-5 md:pt-8">
      <section className="bg-[#1d1d1d] text-white px-6 pb-6 md:pb-12">
        <h2 className="text-lg text-left md:text-center md:text-2xl font-bold mb-8 md:mb-10">
          ALLEN App Advantage
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-25">
          {/* Left - Accordion (2 columns) */}
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
                    src={downArrow}
                    alt="Toggle"
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <div>
                    <p className="text-sm md:text-[14px] lg:text-[15px] text-gray-300 mt-2 leading-[1.5rem]">
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

          {/* Right - Image (3 columns) */}
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
          <button className="bg-[#0666EB] hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold">
            Explore More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppAdvantage;
