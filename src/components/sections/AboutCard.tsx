import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";


type AboutCardProps = {
  title: string;
  badge?: string;
  points: string[];
  image: string;
  showBorder?:boolean
};

const AboutCard: React.FC<AboutCardProps> = ({ title, badge, points, image,showBorder = false }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`flex justify-between items-start w-full bg-none py-4
      ${showBorder ? (isDarkMode ? 'border-b border-dashed border-[#ffffff25]' : 'border-b border-dashed border-gray-300') : ''}
    `}>
      <div>
        <div className="flex items-center mb-3">
          <h3 className={`text-sm md:text-lg font-semibold ${isDarkMode ? 'text-white' :'text-black'}`}>{title}</h3>
          {badge && (
            <span className="ml-2 px-2 py-[2px] text-[10px] rounded-md bg-[#373F7C] text-white">
              {badge}
            </span>
          )}
        </div>

        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className={`text-[12px] md:text-sm ${isDarkMode ? 'text-[#d4d0d0]' :'text-[#494a4a]'} flex items-start`}>
              <span className="mr-2 mt-0">•</span> 
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <img src={image} alt="illustration" className="w-18 h-18 lg:w-24 lg:h-24 object-contain" />
    </div>
  );
};

export default AboutCard;
