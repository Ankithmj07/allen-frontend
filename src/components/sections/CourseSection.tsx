import React from 'react';
import JeeImg from '../../assets/jee.png'
import NeetImg from '../../assets/neet.png'
import Class10Img from '../../assets/class10.png'
import WhyAllenOnline from'./FeaturesSection'
import CardComponent from './CardComponent';
import { useDarkMode } from '../../contexts/DarkModeContext';

const OnlineCourses = [
    { title: 'JEE', image: JeeImg, buttonText:'View'},
    { title: 'NEET', image: NeetImg, buttonText:'View' },
    { title: 'Class 6–10', image: Class10Img, buttonText:'View'},
  ];


const CourseCategories: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-white'}  mx-auto  2xl:px-[224px] mt-0 pt-0`}>
        <CardComponent
            heading="Discover the perfect online course"
            courses={OnlineCourses}
        />
        <WhyAllenOnline/>
    </div>
  );
};

export default CourseCategories;
