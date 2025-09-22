import React, {useState, useEffect} from 'react';
  import { useParams } from 'react-router-dom';
import liveImg from "../../assets/live.svg"
import liveLight from "../../assets/liveLight.svg"
import recordedImg from "../../assets/recorded.svg"
import recordedLight from "../../assets/recordedLight.svg"
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';

type CourseCardProps = {
  _id:object;
  exam:string;
  title: string;
  subtitle: string;
  points: string[];
  originalPrice?: string;
  price?: string;
  badge?: string;
  classLevel: number;
  categoryType:string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  _id,
  exam,
  title,
  subtitle,
  points,
  originalPrice,
  price,
  badge,
  categoryType
}) => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const handleCourseClick = (examTitle: string, courseId: object) => {
    navigate(`/courses/${examTitle}/details?id=${courseId}`);
    console.log(courseId)
  };

  return (
    <div
      className={`${isDarkMode ? 'bg-[#1E1E1E] text-white' : 'bg-[#fff] text-[#0f0f0f]'}  rounded-2xl shadow-md p-5 flex flex-col justify-between mt-5 lg:mt-0 w-full lg:w-[346px] lg:h-[346px]`}
      onClick={() => handleCourseClick(exam,_id)}
    >
      {/* LIVE and Badge */}
      <div className="flex justify-between items-start mb-2 gap-3">
        <div className={`flex items-center ${isDarkMode ? 'bg-white text-black' : 'bg-[#1C1D1D] text-white'} text-xs font-semibold px-2 py-1 rounded-full gap-1`}>
        <img 
            src={
              categoryType === 'live'
                ? isDarkMode
                  ? liveImg
                  : liveLight
                : isDarkMode
                  ? recordedImg
                  : recordedLight
            }
            alt={categoryType} 
            className="w-4 h-4"
        />
        <span className='text-[10px]'>{categoryType}</span>
        </div>
        {badge && (
          <div className="bg-[#FF6A00] text-white text-xs font-bold px-3 py-1 rounded-br-md rounded-tl-md whitespace-nowrap">
            {badge}
          </div>
        )}
      </div>

      {/* Title and Subtitle */}
      <div>
        <h2 className="text-[16px] font-bold">{title}</h2>
        <p className={`text-sm ${isDarkMode ? 'text-[#bcbdbd]' : 'text-[#494A4A]'} mt-1`}>{subtitle}</p>
      </div> 

      {/* Feature List */}
      <ul className="text-sm mt-3 flex flex-col gap-2">
        {points.map((point, idx) => (
          <li key={idx} className={`before:content-['✓'] before:mr-2 ${isDarkMode ? 'text-[#bcbdbd]' : 'text-[#494A4A]'}`}>
            {point}
          </li>
        ))}
      </ul>

      {/* Price */}
      {price && (
        <div className={`text-sm mt-3 ${isDarkMode ? 'text-[#bcbdbd]' : 'text-[#494A4A]'}`}>
          {originalPrice && (
            <div className=" text-[10px] line-through">{originalPrice}</div>
          )}
          <div className='flex justify-between'>
            <div className="text-sm font-bold">{price} <span className="text-sm font-normal">+ Taxes applicable</span></div>
            <div className="text-[#2F80ED] font-medium text-sm flex items-center cursor-pointer">
                Know more <HiOutlineArrowRight className="ml-1" />
            </div>
        </div>
        </div>
      )}

      {/* Know More CTA */}
      
    </div>
  );
};

const CourseComponent: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(11);
    const { exam } = useParams();
    console.log(exam);
    const [courses, setCourses] = useState<CourseCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        fetch(`https://allen-backend.onrender.com/api/courses/${exam}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error: ${res.status}`);
            }
            console.log(res)
            return res.json();
          })
          .then((data) => {
            setCourses(data);
            console.log(data)
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
            setLoading(false);
          });
      }, [exam]);

    

    const filteredCourses = courses.filter(
    (course) => course.classLevel === selectedTab
    );

  
  return (
    <div className={` ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#edf2fa]'} `}>
    <div className={` lg:container mx-auto xl:px-[130px] 2xl:px-[224px] mt-0 pt-0 pb-10`}>
    <section className={`px-5 py-10 ${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'}`}>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-[24px] font-bold">
          Explore our <span className="text-[#2F80ED]">NEET courses</span> 
        </h2>
        <div className="flex gap-4 mt-4">
            {[11, 12, 13].map((tab, idx) => (
            <button
                key={idx}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-lg border text-[12px] ${
                  selectedTab === tab
                    ? isDarkMode
                      ? 'bg-[#2e3357] border-[#2F80ED] text-white'
                      : 'bg-[#E0ECFF] border-[#2F80ED] text-[#1D1D1D]'
                    : isDarkMode
                      ? 'border-gray-600 text-[#BCBDBD]'
                      : 'border-gray-300 text-[#4B4B4B]'
                }`}
            >
            Class {tab}
            </button>
            ))}
        </div>
        <hr className="border-t border-gray-700 mt-4" />
      </div>

      {/* Grid Layout */}
      {loading ? (
          <div className="text-center text-[#BCBDBD]">Loading courses...</div>
        ) : (
          <div className="lg:flex lg:flex-wrap block gap-[25px] justify-start">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        )}
    </section>
    <div className='flex justify-center'>
        <button className="bg-[#0077FF] text-white text-sm lg:text[14px] px-5 py-3 w-[88%] md:w-[20%] lg:w-[15%] rounded-full font-semibold hover:bg-[#005fd4] transition">
              View All Courses
        </button>
    </div>
    </div>
    </div>
  );
};

export default CourseComponent;
