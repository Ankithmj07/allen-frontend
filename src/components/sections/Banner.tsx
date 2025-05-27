import React from 'react';
import anounce from '../../assets/marketing.png';
import star from '../../assets/star.png';
import arrowRight from '../../assets/arrow-right.png';

const Banner: React.FC = () => {
  return (
    <div className="fixed z-1 w-full bg-[#019370] text-white px-4 py-1 h-[80px] lg:h-[40px]">
      {/* Mobile layout (stacked) */}
      <div className="flex items-center justify-between mt-2 lg:hidden">
        {/* Left section with icon and text */}
        <div className="flex items-center gap-2">
          {/* Announce Icon */}
          <img className="w-12 h-12" src={anounce} alt="Announce" />
          
          {/* Text content */}
          <div className="flex flex-col">
            {/* Offer text with star */}
            <div className="flex items-center gap-1">
              <span className="text-[#F8FD05] text-xs font-semibold">
                OFFER ENDS ON 15 MAY
              </span>
              <img className="w-4 h-4" src={star} alt="Star" />
            </div>
            
            {/* Course description split into two lines for mobile */}
            <div className="text-white text-xs font-medium">
              Join the NEET PowerPlus LIVE Course for 2026
            </div>
            <div className="text-white text-xs font-medium">
              @ ₹9,990
            </div>
          </div>
        </div>
        
        {/* Right arrow */}
        <div className="flex items-center">
          <img className="w-5 h-5" src={arrowRight} alt="Arrow" />
        </div>
      </div>

      {/* Desktop layout (horizontal) */}
      <div className="hidden lg:flex items-center justify-center space-x-2">
        {/* Center content with icon, text, and arrow */}
        <img className="w-8 h-8" src={anounce} alt="Announce" />
        
        <div className="flex items-center gap-2">
          <span className="text-[#F8FD05] text-sm font-semibold">
            OFFER ENDS ON 15 MAY
          </span>
          <img className="w-6 h-6" src={star} alt="Star" />
        </div>
        
        <span className="text-white text-sm font-medium">
          Join the NEET PowerPlus LIVE Course for 2026 @ ₹9,990
        </span>
        
        <img className="w-5 h-5" src={arrowRight} alt="Arrow" />
      </div>
    </div>
  );
};

export default Banner;