import React from 'react';
import Banner from '../components/sections/Banner';
import HeroSection from '../components/sections/HeroSection';
import CourseCategories from '../components/sections/CourseSection';
import ResourceSection from '../components/sections/ResourcesSection';
import TrendingSlider from '../components/sections/TrendingSlider';
import Champions from '../components/sections/ChampionsSection';
import AppAdvantage from '../components/sections/AppBanner';
import TestimonialSection from '../components/sections/TestimonialSection';
import PhoneCallComponent from '../components/sections/PhoneCallSection';
import AppStoreSection from '../components/sections/AppStoreSection';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <HeroSection />
      <CourseCategories />
      <ResourceSection />
      <TrendingSlider />
      <Champions />
      <AppAdvantage />
      <TestimonialSection />
      <PhoneCallComponent />
      <AppStoreSection />
    </>
  );
};

export default Home;