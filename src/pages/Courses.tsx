import React from 'react';
import CourseComponent from '../components/HeroSections/CourseComponent';
import ToppersSection from '../components/HeroSections/ToppersSection';
import CoachingSection from '../components/HeroSections/CoachingSection';
import TrustSection from '../components/HeroSections/TrustSection';
import NeetPrepSection from '../components/HeroSections/NeetPrepSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import PhoneCallComponent from '../components/sections/PhoneCallSection';
import download2Img from '../assets/download2.png';
import download2MobileImg from '../assets/download2Mobile.png';
import downloadLight from '../assets/downloadLight.png'
import downLightMobile from '../assets/downloadLightMobile.png'
import { useDarkMode } from '../contexts/DarkModeContext';


const Courses: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <CoachingSection></CoachingSection>
      <ToppersSection></ToppersSection>
      <CourseComponent></CourseComponent>
      <TrustSection></TrustSection>
      <NeetPrepSection></NeetPrepSection>
      <div className={`${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#fff]'} pb-6`}>
        <div className='hidden md:block flex justify-center lg:container mx-auto px-4 lg:px-[130px] 2xl:px-[224px] mt-0 pt-10'>
          <img src={isDarkMode ? download2Img : downloadLight} alt='Download'></img>
        </div>
        <div className='block sm:hidden flex justify-center lg:container mx-auto px-4 lg:px-[130px] 2xl:px-[224px] mt-0 pt-10'>
          <img src={isDarkMode ? download2MobileImg : downLightMobile} alt='Download'></img>
        </div>
      </div>
      <PhoneCallComponent></PhoneCallComponent>   
      <TestimonialSection></TestimonialSection>
    </>
  );
};

export default Courses;