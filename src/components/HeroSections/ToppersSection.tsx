import React from 'react';
import imgAir74 from '../../assets/Air74.png';
import imgAir274 from '../../assets/Air274.png';
import imgAir405 from '../../assets/Air405.png';
import predictImg from '../../assets/predict.png';
import predictMobileImg from '../../assets/predictMobile.png';
import { useDarkMode } from '../../contexts/DarkModeContext';

type Topper = {
  name: string;
  image: string;
  air: string;
};

const toppers: Topper[] = [
  {
    name: 'Debarghya Bag',
    image: imgAir274,
    air: 'AIR #247',
  },
  {
    name: 'Tanmay Jagga',
    image: imgAir74,
    air: 'AIR #74',
  },
  {
    name: 'Adyasha A. Jena',
    image: imgAir405,
    air: 'AIR #405',
  },
];

const stats = [
  {
    value: '1,39,950',
    label: 'Qualified in NEET-UG',
    border: 'border-l-4 border-green-500',
    textColor: 'text-green-500',
  },
  {
    value: '06',
    label: 'AIR-1 with perfect 720/720 score',
    border: 'border-l-4 border-blue-500',
    textColor: 'text-blue-500',
  },
  {
    value: '24',
    label: 'students scored 700+',
    border: 'border-l-4 border-blue-500',
    textColor: 'text-blue-500',
  },
  {
    value: '39',
    label: 'Students in top 100',
    border: 'border-l-4 border-green-500',
    textColor: 'text-green-500',
  },
];

const ToppersSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={` ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#fff]'} `}>
    <div className={` lg:container mx-auto lg:px-[130px] 2xl:px-[224px] mt-0 pt-0`}>
    <section className={`${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'} lg:px-4 px-4 py-10`}>
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className='px-4 lg:px-0'>
            <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-[#edf2fa]'} w-full md:w-[358px] rounded-2xl p-6 flex-[1] md:mx-auto lg:mx-0`}>
              <h2 className="text-xl font-semibold text-center lg:text-left mb-6">
                Toppers choose <span className="text-green-400">ALLEN</span>
              </h2>
              <div className="flex justify-center gap-4 items-end">
                {toppers.map((topper, index) => (
                  <div key={index} className="text-center relative">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className={`object-cover ${topper.air==='AIR #74' ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-18 h-18 sm:w-20 sm:h-20' }`}
                    />
                    <p className="text-sm font-medium mt-2">{topper.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="border w-[90%] border-[#0077FF]  rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#0077FF] hover:text-white transition">
                  See NEET Results
                </button>
              </div>
              
            </div>
            </div>
           
            
            {/* Right - Stats (Larger) */}
            <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-[#edf2fa]'} rounded-2xl p-6 flex-[2]`}>
              <h2 className="text-xl text-center lg:text-left font-semibold mb-6">
                Outstanding <span className="text-green-400">NEET results</span> consistently
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`rounded-xl px-4 py-4 ${isDarkMode ? 'bg-black' : 'bg-[#fff]'} bg-opacity-30 ${stat.border}`}
                  >
                    <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-[#bcbdbd]' : 'text-[#494A4A]'}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <img src={predictImg} className='hidden md:block mt-10' alt='Predict Img'/>
        <img src={predictMobileImg} className='block md:hidden mt-10' alt='Predict Img'/>
    </section>
    
    </div>
    </div>
  );
};

export default ToppersSection;
