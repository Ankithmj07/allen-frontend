import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const PersonalComponent: React.FC = () => {
  const {isDarkMode} = useDarkMode();
  return (
    <div className={`${isDarkMode ? 'text-white' :'text-black'}  px-4 lg:px-2 py-4 space-y-10 lg:space-y-6`}>
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className={`w-16 h-16 rounded-full border-2 ${isDarkMode ? 'border-white' :'border-black'} flex items-center justify-center text-xl font-semibold`}>
          A
        </div>
        <div className="space-y-2">
          <h2 className="text-lg lg:text-2xl font-bold">Ankith M J</h2>
          <p className="text-sm  font-normal">
            Class 12 Plus | NEET{" "}
            <span className="text-blue-500 font-medium ml-2 cursor-pointer">Change</span>
          </p>
        </div>
      </div>

      {/* Contact and Parent Details */}
      <div className={`grid md:grid-cols-2 gap-4 ${isDarkMode ? 'text-gray-400' :'text-black'}`}>
        {/* Contact Details */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm ">Contact details</h3>
            <button className="text-blue-500 text-sm font-medium">Edit</button>
          </div>
          <div className={`${isDarkMode ? 'bg-neutral-800' :'bg-white'}  rounded-lg p-4 text-sm space-y-2`}>
            <div className="flex justify-between">
              <span className="">Phone Number</span>
              <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>9148868887</span>
            </div>
            <div className="flex justify-between">
              <span className="">Email</span>
              <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>mjankith007@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Parent Details */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm ">Parent details</h3>
          </div>
          <div className={`${isDarkMode ? 'bg-neutral-800' :'bg-white'}  rounded-lg p-4 text-sm space-y-2`}>
            <div className="flex justify-between">
              <span className="">Name</span>
              <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>Jayaprakash</span>
            </div>
            <div className="flex justify-between">
              <span className="">Contact Number</span>
              <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>7259436173</span>
            </div>
          </div>
        </div>
        <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm ">Student details</h3>
          <button className="text-blue-500 text-sm font-medium">Edit</button>
        </div>
        <div className={`${isDarkMode ? 'bg-neutral-800' :'bg-white'}  rounded-lg p-4 text-sm space-y-2`}>
          <div className="flex justify-between">
            <span className="">Gender</span>
            <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>Male</span>
          </div>
          <div className="flex justify-between">
            <span className="">Blood Group</span>
            <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>-</span>
          </div>
          <div className="flex justify-between">
            <span className="">Date of Birth</span>
            <span className={`${isDarkMode ? 'text-white' :'text-black'} font-semibold`}>01–07–2004</span>
          </div>
        </div>
      </div>
      </div>

      {/* Student Details */}
      
    </div>
  );
};

export default PersonalComponent;
