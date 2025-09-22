import React, { useState } from "react";
import contactImg from "../../assets/contact.png";
import { useDarkMode } from '../../contexts/DarkModeContext';

const classes = ["6th", "7th", "8th", "9th", "10th", "11th", "12th"];
const goals = ["NEET", "JEE Mains", "JEE Advanced"];
const courses = ["Online Courses", "Classroom Courses", "Online Test Series"];
const states = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const PhoneCallComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    class: classes[0],
    goal: goals[0],
    course: courses[0],
    state: states[0],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { isDarkMode } = useDarkMode();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          class: classes[0],
          goal: goals[0],
          course: courses[0],
          state: states[0],
        });
      } else {
        setMessage(data.message || "Submission failed. Try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <div className={` ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'}`}>
    <div className={` lg:container mx-auto lg:px-[110px] 2xl:px-[224px] mt-0 pt-0`}>
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-12">
        {/* Left Illustration */}
        <div className="hidden lg:block lg:mb-0 lg:mr-10">
          <img src={contactImg} alt="Illustration" className="w-90" />
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className={`${isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-[#fff] text-[#1d1d1d]'} p-6 rounded-2xl w-full max-w-2xl space-y-4`}
        >
          <h2 className="text-lg lg:text-xl font-bold border-b border-gray-300 pb-4">
            Request a callback
          </h2>

          {/* Name & Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Student’s full name<span className="text-red-500">*</span></label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ex: Rohit Singh"
                className={`w-full px-4 py-2 md:py-3 rounded-md ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'} border border-gray-600`}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Mobile Number<span className="text-red-500">*</span></label>
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Ex: +91 9876543210"
                className={`w-full px-4 py-2 md:py-3 rounded-md ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'} border border-gray-600`}
              />
            </div>
          </div>

          {/* Class & Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Class<span className="text-red-500">*</span></label>
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className={`w-full px-4 py-2 md:py-3 rounded-md ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'} border border-gray-600`}
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Goals<span className="text-red-500">*</span></label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className={`w-full px-4 py-2 md:py-3 rounded-md ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'} border border-gray-600`}
              >
                {goals.map((goal) => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Courses & State */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Preferred Courses<span className="text-red-500">*</span></label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full px-4 py-2 md:py-3 rounded-md ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'} border border-gray-600`}
              >
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">State<span className="text-red-500">*</span></label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 md:py-3 rounded-md ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-[#edf2fa]'} border border-gray-600`}
              >
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          {/* T&C + Submit */}
          <p className={`text-xs ${isDarkMode ? 'text-[#bcbdbd]' : 'text-[#494A4A]'} text-center`}>
            By continuing, you agree to our <a href="#" className={`underline ${isDarkMode ? ' text-white' : 'text-[#1d1d1d]'}`}>Terms & Conditions</a>
          </p>

          {message && (
            <p className={`text-sm text-center ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0666EB] hover:bg-blue-700 px-20 py-2 rounded-full text-white font-semibold"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PhoneCallComponent;
