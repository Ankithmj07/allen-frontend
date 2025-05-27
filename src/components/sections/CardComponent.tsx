// components/CourseSection.tsx
import React from 'react';

interface CourseCard {
  title: string;
  image: string;
  bgColor?: string;
  buttonText:string;
}

interface CardComponentProps {
  heading: string;
  courses: CourseCard[];
  singleOnMobile?: boolean;
}

const getMargin = (title: string): string => {
    switch (title) {
      case 'NEET Complete Study Guide':
        return 'mt-7 lg:mt-24';
      case 'JEE Advanced Complete Study Guide':
        return 'mt-7 lg:mt-24';
      default:
        return 'mt-9 lg:mt-32';
    }
};

const CardComponent: React.FC<CardComponentProps> = ({ heading, courses,singleOnMobile }) => {
  return (
    <section className="text-white flex justify-center">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-lg md:text-2xl font-semibold mb-6">{heading}</h2>

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 md:gap-7">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col justify-between w-[358.4px] md:w-[770px] h-[128px] lg:w-[320px] lg:h-[240px] relative overflow-hidden ${singleOnMobile ? (index !== 0 ? 'hidden lg:flex' : 'flex') : 'flex'} flex`}
              style={{ backgroundColor: course.bgColor || '#111' }}
            >
              <div>
                <h3 className="text-lg lg:text-[20px] font-semibold mb-4">{course.title}</h3>
                <button className={`text-blue-500 font-medium flex items-center gap-1 ${getMargin(course.title)}`}>
                  {course.buttonText} <span>›</span>
                </button>
              </div>
              <img
                src={course.image}
                alt={course.title}
                className="absolute bottom-0 right-0 w-50 md:w-80 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
