import React, { useState, useEffect, useRef } from "react";
import FeeCard from './FeeCard';
import bookImg from '../../assets/book.svg';
import AboutCard from "./AboutCard";
import classImg from '../../assets/detailClass.png';
import doubtImg from '../../assets/detailDoubt.png';
import studyImg from '../../assets/detailStudy.png';
import testImg from '../../assets/detailTests.png';
import appImg from '../../assets/detailApp.png';
import SliderComponent from "./SliderComponent";
import { useParams, useLocation } from 'react-router-dom';
import { useEnroll } from '../../contexts/EnrollContext';
import { useNavigate } from 'react-router-dom';

const aboutImages = [classImg, doubtImg, testImg, studyImg, appImg];

const DetailedCourseSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { exam } = useParams();
  const searchParams = new URLSearchParams(useLocation().search);
  const courseId = searchParams.get('id');

  const [language, setLanguage] = useState("Hindi + English");
  const [selectedDate, setSelectedDate] = useState("");
  const [detailedCourses, setDetailedCourses] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { isFeeCardOpen, closeFeeCard } = useEnroll();
   const { openFeeCard } = useEnroll();
   const { setSelectedCourse } = useEnroll();
   const navigate = useNavigate();


  // ✅ Fetch course details
  useEffect(() => {
    setLoading(true);
    fetch(`https://allen-backend.onrender.com/api/courses/${exam}?id=${courseId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setDetailedCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, [courseId]);

  // ✅ Close popup on outside click
  useEffect(() => {
    if (!isFeeCardOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        closeFeeCard();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFeeCardOpen, closeFeeCard]);


  if (loading) return <div>Loading...</div>;
  if (!detailedCourses) return <div>No course data found</div>;

  const handleEnroll = () => {
    console.log("fuck you")
    if (detailedCourses) {
      setSelectedCourse(detailedCourses);
      
    }
    navigate('/enroll');
  };

  console.log(detailedCourses)
  return (
    <div className='bg-[#0f0f0f] lg:container mx-auto lg:px-[224px] mt-0 pt-20'>
      {/* Mobile Video */}
      <div className="block lg:hidden px-4 py-6 pt-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[400px] md:h-[310px] lg:h-[315px]"
            src="https://www.youtube.com/embed/Feges8tBPvA"
            title={detailedCourses.title}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between py-0 px-3 lg:px-5 gap-0">
        {/* Left Section */}
        <div className="flex-1">
          <div className="bg-[#212121] lg:bg-[#0f0f0f] px-4 py-4 lg:py-0 lg:px-0 rounded-2xl mt-4 lg:mt-0">
            <div className="bg-[#35B58E] text-white font-semibold px-3 py-1 rounded-full w-max text-xs mb-4">
              {detailedCourses.categoryType.toUpperCase()} PROGRAM
            </div>
            <h1 className="text-lg lg:text-[24px] font-semibold text-white mb-2">
              {detailedCourses.name}
            </h1>
            <div className="text-sm text-[#bcbdbd] border-b border-[#ffffff25] lg:border-none pb-6 lg:pb-0 lg:mb-10">
              Class {detailedCourses.classLevel} &nbsp;•&nbsp; {detailedCourses.duration} Year
            </div>
            <div className="flex items-center space-x-4 mb-2 pt-6 lg:pt-0 lg:mb-10">
              <div className="hidden lg:block bg-[#2a2a2a] p-2.5 rounded-lg">
                <img src={bookImg} alt="book" />
              </div>
              <div className="text-[#bcbdbd] text-sm">
                <h3>Subjects</h3>
                <span className="font-semibold leading-7">
                  {detailedCourses.subjects?.join(", ")}
                </span>
              </div>
            </div>
            <div className="block lg:hidden flex items-center space-x-4 pt-4">
              <div className="text-[#bcbdbd] text-sm">
                <h3>Languages</h3>
                <span className="font-semibold leading-7">
                  {detailedCourses.language?.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Offerings */}
          <div className="mt-6 px-1 lg:px-0 lg:pr-9">
            <h2 className="text-sm md:text-xl font-semibold text-white mb-3">
              Course Offerings
            </h2>
            <ul className="list-disc px-6 text-[12px] md:text-sm text-[#bcbdbd] space-y-4">
              {detailedCourses.description?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop FeeCard */}
        {detailedCourses && detailedCourses.language && (
          <FeeCard
            price={detailedCourses.price}
            tax={detailedCourses.taxes}
            languages={detailedCourses.language}
            selectedLanguage={language}
            startingDate={Array.isArray(detailedCourses.startDate) ? detailedCourses.startDate : []}
            selectedDate={selectedDate}
            onLanguageChange={(lang) => setLanguage(lang)}
            onDateChange={(date) => setSelectedDate(date)}
            onEnroll={handleEnroll}
          />
        )}

        {/* Mobile FeeCard Popup */}
        {detailedCourses && isFeeCardOpen && (
          <div
            ref={cardRef}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-end"
          >
            <FeeCard
              price={detailedCourses.price}
              tax={detailedCourses.taxes}
              languages={detailedCourses.language}
              selectedLanguage={language}
              startingDate={detailedCourses.startDate}
              selectedDate={selectedDate}
              onLanguageChange={(lang) => setLanguage(lang)}
              onDateChange={(date) => setSelectedDate(date)}
              onEnroll={handleEnroll}
              isMobileView={true}
            />
          </div>
        )}
      </div>

      {/* Faculty Section */}
      <div className="px-2 pt-15">
        <h2 className="text-xl font-semibold text-white">Know your faculty</h2>
      </div>
      <div className="w-full flex justify-center lg:justify-start mb-8">
        {detailedCourses?.FacultyImgs && (
          <SliderComponent
            slides={detailedCourses?.FacultyImgs.map((img: any, index: number) => ({
              id: index,
              desktopImage: img,
              title: `Faculty ${index + 1}`,
            }))}
            desktopWidth="w-[580px]"
            desktopHeight="h-[305px]"
            mobileWidth="w-full"
            mobileHeight="h-[190px]"
          />
        )}
      </div>

      {/* About the Course */}
      <div className="px-3 lg:px-2 pb-10">
        <h2 className="text-xl font-semibold text-white mb-6">About the Course</h2>
        <div className="lg:w-[55%] bg-[#212121] rounded-2xl py-3 px-6 space-y-3">
          {Object.entries(detailedCourses.aboutCourse).map(
            ([title, points], index, array) => (
              <AboutCard
                key={index}
                title={title}
                points={points as string[]}
                image={aboutImages[index]}
                showBorder={index !== array.length - 1}
              />
            )
          )}
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 px-6 py-2 left-0 right-0 bg-[#212121] z-50">
            <button
            className="w-full text-white text-sm py-4 font-semibold bg-[#0266DA] hover:bg-blue-700 rounded-4xl"
            onClick={openFeeCard}
            >
            Select batch and Enroll Now
          </button>
        </div>
    </div>
  );
};

export default DetailedCourseSection;
