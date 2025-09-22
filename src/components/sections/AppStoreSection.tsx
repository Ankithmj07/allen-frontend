import React from "react";
import appStoreBanner from "../../assets/appStoreBanner.png";
import mobileBanner from '../../assets/mobileAppStore.png'
import lightQr from '../../assets/lightQr.png';
import { useDarkMode } from '../../contexts/DarkModeContext';

const AppStoreSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={` ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#fff]'} `}>
    <div className={` lg:container mx-auto lg:px-[110px] 2xl:px-[224px] mt-0 pt-0`}>
        <section className=" px-4 md:px-8 lg:px-12 py-10">
          <div className="flex justify-center">
            <img
              src={isDarkMode ? appStoreBanner : lightQr}
              alt="Download our app banner"
              className="hidden md:block w-full max-w-6xl object-contain"
            />
            <img
              src={mobileBanner}
              alt="Download our app banner"
              className="block md:hidden w-full max-w-6xl object-contain"
            />
          </div>
        </section>
    </div>
    </div>
  );
};

export default AppStoreSection;
