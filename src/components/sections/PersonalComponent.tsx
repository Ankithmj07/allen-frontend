import React from "react";

const PersonalComponent: React.FC = () => {
  return (
    <div className="text-white px-4 lg:px-2 py-4 space-y-10 lg:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border-2 border-white text-white flex items-center justify-center text-xl font-semibold">
          A
        </div>
        <div className="space-y-2">
          <h2 className="text-lg lg:text-2xl font-bold">Ankith M J</h2>
          <p className="text-sm text-white font-normal">
            Class 12 Plus | NEET{" "}
            <span className="text-blue-500 font-medium ml-2 cursor-pointer">Change</span>
          </p>
        </div>
      </div>

      {/* Contact and Parent Details */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Contact Details */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm text-gray-400">Contact details</h3>
            <button className="text-blue-500 text-sm font-medium">Edit</button>
          </div>
          <div className="bg-neutral-800 rounded-lg p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Phone Number</span>
              <span className="font-semibold">9148868887</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Email</span>
              <span className="font-semibold">mjankith007@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Parent Details */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm text-gray-400">Parent details</h3>
          </div>
          <div className="bg-neutral-800 rounded-lg p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span className="font-semibold">Jayaprakash</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Contact Number</span>
              <span className="font-semibold">7259436173</span>
            </div>
          </div>
        </div>
        <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm text-gray-400">Student details</h3>
          <button className="text-blue-500 text-sm font-medium">Edit</button>
        </div>
        <div className="bg-neutral-800 rounded-lg p-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Gender</span>
            <span className="font-semibold">Male</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Blood Group</span>
            <span className="font-semibold">-</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Date of Birth</span>
            <span className="font-semibold">01–07–2004</span>
          </div>
        </div>
      </div>
      </div>

      {/* Student Details */}
      
    </div>
  );
};

export default PersonalComponent;
