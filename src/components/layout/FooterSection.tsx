import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import isoIcon from "../../assets/isoIcon.png"; 
//import { useEnroll } from '../../contexts/EnrollContext';

const FooterSection: React.FC = () => {
  //const { openFeeCard } = useEnroll();

  return (
    <div className='bg-[#0f0f0f] lg:container mx-auto lg:px-[224px] mt-0 pt-0'>
        <footer className="bg-[#0f0f0f] text-white px-4 lg:px-4 md:px-8 py-12 text-[0.65rem] md:text-[0.75rem] lg:text-sm">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {/* About */}
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-4 text-white">
                <li>About us</li>
                <li>Blog</li>
                <li>News</li>
                <li>MyExam EduBlogs</li>
                <li>Privacy policy</li>
                <li>Public notice</li>
                <li>Careers</li>
                <li>Dhoni Inspires NEET Aspirants</li>
                <li>Dhoni Inspires JEE Aspirants</li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h3 className="font-semibold mb-3">Help & Support</h3>
              <ul className="space-y-4 text-white">
                <li>Refund policy</li>
                <li>Transfer policy</li>
                <li>Terms & Conditions</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* Popular goals */}
            <div>
              <h3 className="font-semibold mb-3">Popular goals</h3>
              <ul className="space-y-4 text-white">
                <li>NEET Coaching</li>
                <li>JEE Coaching</li>
                <li>6th to 10th</li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-semibold mb-3">Courses</h3>
              <ul className="space-y-4 text-white">
                <li>Online Courses</li>
                <li>Distance Learning</li>
                <li>Online Test Series</li>
                <li>International Olympiads Online Course</li>
                <li>NEET Test Series</li>
                <li>JEE Test Series</li>
                <li>JEE Main Test Series</li>
              </ul>
            </div>

            {/* Centers */}
            <div>
              <h3 className="font-semibold mb-3">Centers</h3>
              <ul className="space-y-4 text-white">
                <li>Kota</li>
                <li>Bangalore</li>
                <li>Indore</li>
                <li>Delhi</li>
                <li>More centres</li>
              </ul>
            </div>

            {/* Exam information */}
            <div>
              <h3 className="font-semibold mb-3">Exam information</h3>
              <ul className="space-y-4 text-white">
                <li>JEE Main</li>
                <li>JEE Advanced</li>
                <li>NEET UG</li>
                <li>CBSE</li>
                <li>NCERT Solutions</li>
                <li>NEET Mock Test</li>
                <li>Olympiad</li>
                <li>NEET 2025 Answer Key</li>
                <li>JEE Advanced 2025 Answerkey</li>
                <li>JEE Advanced Rank Predictor</li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-700" />

          {/* Footer bottom */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-4 text-white text-xs">
            {/* Social Icons */}
            <div className="space-y-5">
                <div className="flex justify-center md:justify-start gap-4 text-lg">
                  <FaYoutube />
                  <FaInstagram />
                  <FaFacebookF />
                  <FaXTwitter />
                  <FaLinkedinIn />
                </div>

                {/* Copyright */}
                <p className="text-center text-sm text-[#BCBDBD]">ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</p>
            </div>

            {/* ISO Icon */}
            <img src={isoIcon} alt="ISO Certified" className="w-15 h-15 md:w-18 md:h-18" />
          </div>
        </footer>
        
    </div>
  );
};

export default FooterSection;
