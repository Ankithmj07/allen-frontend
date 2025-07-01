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


const Courses: React.FC = () => {
  return (
    <>
      <CoachingSection></CoachingSection>
      <ToppersSection></ToppersSection>
      <CourseComponent></CourseComponent>
      <TrustSection></TrustSection>
      <NeetPrepSection></NeetPrepSection>
      <div className='bg-[#1d1d1d]'>
        <div className='hidden md:block flex justify-center lg:container mx-auto px-4 lg:px-[238px] mt-0 pt-10'>
          <img src={download2Img} alt='Download'></img>
        </div>
        <div className='block sm:hidden flex justify-center lg:container mx-auto px-4 lg:px-[224px] mt-0 pt-10'>
          <img src={download2MobileImg} alt='Download'></img>
        </div>
        <PhoneCallComponent></PhoneCallComponent>
      </div>
      <TestimonialSection></TestimonialSection>
    </>
  );
};

export default Courses;