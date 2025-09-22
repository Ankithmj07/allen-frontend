import React from 'react';
import EnrollSection from '../components/HeroSections/EnrollSection';
import { useDarkMode } from '../contexts/DarkModeContext';

const EnrollCourses: React.FC = () => {
  const {isDarkMode} = useDarkMode();
  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-[#edf2fa]'}`}>
    <div className={` lg:container mx-auto lg:px-[110px] 2xl:px-[224px] mt-0 pt-20`}>
      <EnrollSection></EnrollSection>
    </div>
    </div>
  );
};

export default EnrollCourses;