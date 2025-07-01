import React from "react";

import studyIcon from '../../assets/study.png';
import rankIcon from '../../assets/rank.png';
import practiceIcon from '../../assets/practice.png';
import doubtIcon from '../../assets/doubt.png';

const TrustSection: React.FC = () => {
  return (
    <div className='bg-[#1d1d1d] lg:container mx-auto lg:px-[224px] mt-0 pt-0'>
    <section className="bg-[#1d1d1d] text-white px-3 py-12">
      <h2 className="text-xl md:text-2xl font-bold mb-12">
        Discover why toppers trust{" "}
        <span className="text-white">ALLEN</span>{" "}
        <span className="text-[#2F80ED]">Online for NEET success</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 lg:gap-y-20 md:px-4 text-[#ccc]">
        {/* Card 1 */}
        <div className="gap-6">
          <img src={studyIcon} alt="Study" className="w-[80px] h-[80px]" />
          <div className="mt-5">
            <h3 className="text-white text-sm md:text-lg font-semibold mb-1">
              Study with ALLEN's top faculty from Kota
            </h3>
            <p className="text-sm md:text-[16px]">
              Daily live interactive classes led by ALLEN's national-level faculty,
              who have mentored thousands of students who have made it to India's
              top Medical Colleges
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="gap-6">
          <img src={rankIcon} alt="Rank" className="w-[80px] h-[80px]" />
          <div className="mt-5">
            <h3 className="text-white text-sm md:text-lg font-semibold mb-1">
              Know where you stand against competition
            </h3>
            <p className="text-sm md:text-[16px]">
              Get detailed test insights and see how you compare with ALLEN students
              across India through national-level benchmarking.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" gap-6">
          <img src={practiceIcon} alt="Quiz" className="w-[80px] h-[80px]" />
          <div className="mt-5">
            <h3 className="text-white text-sm md:text-lg font-semibold mb-1">
              Practice and revise anytime
            </h3>
            <p className="text-sm md:text-[16px]">
              Create quizzes from 15,000+ teacher-certified questions using Custom Practice—
              choose topics, difficulty, and duration to suit your needs.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="gap-6">
          <img src={doubtIcon} alt="Doubt" className="w-[80px] h-[80px]" />
          <div className="mt-5">
            <h3 className="text-white text-sm md:text-lg font-semibold mb-1">
              Instant doubt resolution
            </h3>
            <p className="text-sm md:text-[16px]">
              Get your doubts cleared instantly on the ALLEN app. Whether it’s a tricky
              question or you need help at any time, you’ll always find a solution or get
              support from our expert faculty right on the app.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TrustSection;
