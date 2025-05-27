import React from "react";
import appStoreBanner from "../../assets/appStoreBanner.png";
import mobileBanner from '../../assets/mobileAppStore.png'

const AppStoreSection: React.FC = () => {
  return (
    <div className='bg-[#0f0f0f] lg:container mx-auto lg:px-[224px] mt-0 pt-0'>
        <section className="bg-[#0f0f0f] px-4 md:px-8 lg:px-12 py-10">
          <div className="flex justify-center">
            <img
              src={appStoreBanner}
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
  );
};

export default AppStoreSection;
