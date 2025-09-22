import React from 'react';
import kotaImg from '../../assets/kota.png';
import provenImg from '../../assets/proven.png';
import learningImg from '../../assets/learning.png'
import mentorImg from '../../assets/mentor.png'
import { useDarkMode } from '../../contexts/DarkModeContext';

interface Feature {
  title: string;
  description: string;
  icon: string; // This can be an emoji or a path to an SVG
}

const features: Feature[] = [
  {
    title: 'Kota Faculty',
    description: 'Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years',
    icon: kotaImg,
  },
  {
    title: 'Proven Results',
    description: 'Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams',
    icon: provenImg,
  },
  {
    title: 'Learning Tools',
    description: '24×7 doubt resolution and customized study material to test, and improve continuously',
    icon: learningImg,
  },
  {
    title: 'Mentor Support',
    description: 'Regular mentorship sessions with mentor, regular mentorship sessions, guidance on exam strategy & updates to parents',
    icon: mentorImg,
  },
];

const WhyAllenOnline: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='lg:container xl:px-[100px] 2xl:px-0 mx-auto'>
    <section className={`${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'} py-12 xl:px-4 2xl:px-4 lg:px-0`}>
      <h2 className="text-lg lg:text-[24px] mt-3 lg:mt-13 font-bold text-left lg:text-center">Why ALLEN Online</h2>
      <div className=" overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 min-w-[800px] mt-9 md:mt-15">
          {features.map((feature, idx) => (
            <div key={idx} className={`relative flex-shrink-0 w-64 h-[174px] lg:h-[218px] ${isDarkMode ? 'bg-[#111]' : 'bg-[#edf2fa]'} rounded-2xl p-6 pt-12 shadow-md`}>
            {/* Badge Image - Top Left */}
            <div className="absolute -top-6 left-6">
              <img className="w-15 h-15" src={feature.icon} alt={feature.title} />
            </div>
            {/* Card Content */}
            <h3 className="text-sm md:text-xl font-semibold mb-2">{feature.title}</h3>
            <p className={`text-[0.75rem] lg:text-sm ${isDarkMode ? 'text-[#bcbdbd]' : 'text-[#494A4A]'} text-wrap`}>{feature.description}</p>
          </div>          
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white text-[0.875rem] font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition">
          Explore Online Courses
        </button>
      </div>
    </section>
    </div>
  );
};

export default WhyAllenOnline;