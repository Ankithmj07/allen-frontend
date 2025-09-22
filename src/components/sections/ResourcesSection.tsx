import React from 'react';
import JeeTestImg from '../../assets/jeeTest.png'
import NeetTestImg from '../../assets/neetTest.png'
import MockTestImg from '../../assets/mockTest.png'
import CardComponent from '../sections/CardComponent';
import { useDarkMode } from '../../contexts/DarkModeContext';


const FreeResources = [
    { title: 'Mock Tests - JEE & NEET', image: MockTestImg,bgColor: '#1d1d1d', lightBg:'#fff', buttonText:'Take test now' },
    { title: 'NEET Complete Study Guide', image: NeetTestImg, bgColor: '#1d1d1d', lightBg:'#fff', buttonText:'Explore now' },
    { title: 'JEE Advanced Complete Study Guide', image: JeeTestImg, bgColor: '#1d1d1d', lightBg:'#fff', buttonText:'Explore now' },
  ];
  
const ResourceSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
      <div className={`${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#edf2fa]'} lg:px-[130px] mx-auto 2xl:px-[224px] mt-0 pt-0`}>
          <CardComponent
              heading="FREE Resources for Exam Preparation"
              courses={FreeResources}
              singleOnMobile={true}
          />
          <br/>
          <br/>
      </div>
  );
};

export default ResourceSection;