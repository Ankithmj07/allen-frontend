import React, { useState, useEffect } from 'react';
import phoneLogo from '../../assets/phone-call.png';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiMenu, HiX, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import logo from '../../assets/logo.svg';
import LoginModal from '../Modals/LoginModal';
import ProfileDropdown from '../Modals/ProfileModal';
import { useAuth } from "../../contexts/AuthContext";

const menuItems = [
  {
    name: 'Courses',
    options: [
      {
        name: 'NEET',
        link: '#',
        subOptions: [
          { name: 'Class 11', link: '#' },
          { name: 'Class 12', link: '#' },
          { name: 'Class 12 Plus', link: '#' }
        ]
      },
      {
        name: 'JEE',
        link: '#',
        subOptions: [
          { name: 'Class 11', link: '#' },
          { name: 'Class 12', link: '#' },
          { name: 'Class 12 Plus', link: '#' }
        ]
      },
      {
        name: 'Class 6-10',
        link: '#',
        subOptions: [
          { name: 'Class 6', link: '#' },
          { name: 'Class 7', link: '#' },
          { name: 'Class 8', link: '#' },
          { name: 'Class 9', link: '#' },
          { name: 'Class 10', link: '#' }
        ]
      },
      {
        name: 'View All Options',
        link: '#',
        subOptions: [
          { name: 'Online Courses', link: '#' },
          { name: 'Offline Courses', link: '#' },
          { name: 'Distance Learning', link: '#' },
          { name: 'Hindi Medium Courses', link: '#' },
          { name: 'International Olympiad', link: '#' }
        ]
      }
    ]
  },
  {
    name: 'Test Series',
    options: [
      {
        name: 'NEET',
        link: '#',
        subOptions: [
          { name: 'Class 11', link: '#' },
          { name: 'Class 12', link: '#' },
          { name: 'Class 12 Plus', link: '#' }
        ]
      },
      {
        name: 'JEE (Main + Advanced)',
        link: '#',
        subOptions: [
          { name: 'Class 11', link: '#' },
          { name: 'Class 12', link: '#' },
          { name: 'Class 12 Plus', link: '#' }
        ]
      },
      {
        name: 'JEE Main',
        link: '#',
        subOptions: [
          { name: 'Class 11', link: '#' },
          { name: 'Class 12', link: '#' },
          { name: 'Class 12 Plus', link: '#' }
        ]
      }
    ]
  },
  {
    name: 'Results',
    options: [
      {
        name: 'JEE Main 2025',
        link: '#'
      },
      {
        name: 'NEET',
        link: '#',
        subOptions: [
          { name: '2024', link: '#' },
          { name: '2023', link: '#' },
          { name: '2022', link: '#' }
        ]
      }
    ]
  },
  {
    name: 'Study Materials',
    options: [
      {
        name: 'JEE Mains',
        link: '#',
        subOptions: [
          { name: 'Physics', link: '#' },
          { name: 'Chemistry', link: '#' },
          { name: 'Maths', link: '#' },
          { name: 'NCERT Solutions', link: '#' },
          { name: 'Sample Papers', link: '#' },
          { name: 'Previous Year Papers', link: '#' }
        ]
      },
      {
        name: 'JEE Advanced',
        link: '#',
        subOptions: [
          { name: 'Physics', link: '#' },
          { name: 'Chemistry', link: '#' },
          { name: 'Maths', link: '#' },
          { name: 'Mock Tests', link: '#' },
          { name: 'NCERT Solutions', link: '#' },
          { name: 'Revision Notes', link: '#' }
        ]
      },
      {
        name: 'NEET',
        link: '#',
        subOptions: [
          { name: 'Physics', link: '#' },
          { name: 'Chemistry', link: '#' },
          { name: 'Biology', link: '#' },
          { name: 'NCERT Solutions', link: '#' },
          { name: 'Practice Questions', link: '#' },
          { name: 'Revision Notes', link: '#' }
        ]
      },
      {
        name: 'NCERT Solutions',
        link: '#',
        subOptions: [
          { name: 'Class 6', link: '#' },
          { name: 'Class 7', link: '#' },
          { name: 'Class 8', link: '#' },
          { name: 'Class 9', link: '#' },
          { name: 'Class 10', link: '#' },
          { name: 'Class 11-12', link: '#' }
        ]
      }
    ]
  },
  {
    name: 'Books',
    options: [
      {
        name: 'ALLEN e-Store',
        link: '#'
      }
    ]
  },
  {
    name: 'More',
    options: [
      { name: 'Allen for Schools', link: '#' },
      { name: 'About ALLEN', link: '#' },
      { name: 'Blogs', link: '#' },
      { name: 'News', link: '#' },
      { name: 'Careers', link: '#' }
    ]
  }
];

const Navbar: React.FC = () => {
  const { token, student } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null); // New state for tracking hovered option
  const [modalOpen, setModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<{
    name: string;
    classLevel: string;
    exam: string;
  } | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [optionHoverTimeout, setOptionHoverTimeout] = useState<NodeJS.Timeout | null>(null); // New timeout for options
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleExpand = (item: string) => {
    setExpandedMenus((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

    
  useEffect(() => {
    if (token && student) {
      setIsLoggedIn(true);
      setUserInfo(student);
    } else {
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  }, [token, student]);

  useEffect(() => {
    try {
      const studentData = localStorage.getItem("student");
      const token = localStorage.getItem("token");
      
      if (studentData && token) {
        const parsedData = JSON.parse(studentData);
        setIsLoggedIn(true);
        setUserInfo(parsedData);
      } else {
        // Ensure logged out state if data is missing
        setIsLoggedIn(false);
        setUserInfo(null);
      }
    } catch (error) {
      console.error("Error parsing student data:", error);
      // Clear corrupted data
      localStorage.removeItem("student");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  }, []);

  

  const logout = () => {
    // Note: In artifacts, localStorage is not available, but keeping the logic for reference
    //localStorage.removeItem("token");
    //localStorage.removeItem("student");
    localStorage.clear();
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  const handleMainMenuMouseEnter = (itemName: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoveredItem(itemName);
  };

  const handleMainMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
      setHoveredOption(null); // Clear option hover when leaving main menu
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleOptionMouseEnter = (optionName: string) => {
    if (optionHoverTimeout) clearTimeout(optionHoverTimeout);
    setHoveredOption(optionName);
  };

  const handleOptionMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredOption(null);
    }, 300);
    setOptionHoverTimeout(timeout);
  };

  const handleSubOptionMouseEnter = (optionName: string) => {
    if (optionHoverTimeout) clearTimeout(optionHoverTimeout);
    setHoveredOption(optionName);
  };

  const handleSubOptionMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredOption(null);
    }, 500);
    setOptionHoverTimeout(timeout);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed relative sticky z-50 bg-[#1d1d1d] top-0 w-full px-4 md:px-6 lg:px-10 h-[64px] py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Hamburger menu */}
          <button className="text-2xl lg:hidden mr-2" onClick={toggleSidebar}>
            <HiMenu />
          </button>

          {/* Logo */}
          <img className="w-16 md:w-20" src={logo} alt="Logo" />

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex space-x-8 font-[500]">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => handleMainMenuMouseEnter(item.name)}
                onMouseLeave={handleMainMenuMouseLeave}
              >
                {item.name === 'Results' ? (
                    <div className="relative ml-3">
                      <span className="text-sm lg:text-sm text-[#d4d0d0]">
                        {item.name}
                      </span>
                      <div className="absolute -top-4 -right-8 h-[17px] w-[35.6px] bg-[#a86500] text-white text-[.6rem] font-bold px-2 py-1 rounded-full flex
                      justify-center items-center">
                        NEW
                      </div>
                    </div>
                  ) : (
                    <span className="text-sm lg:text-sm text-[#d4d0d0] ml-3">
                      {item.name}
                    </span>
                  )}

                {/* Active underline */}
                <div
                  className={`absolute -bottom-3 left-3 h-1 rounded-full transition-all duration-300 ${
                    hoveredItem === item.name ? "bg-blue-500" : "bg-transparent"
                  }`}
                  style={{
                    width:
                      hoveredItem === item.name
                        ? item.name === "Study Materials"
                          ? "120px"
                          : item.name === "Test Series"
                          ? "80px"
                          : item.name === "Courses"
                          ? "62px"
                          : item.name === "Results"
                          ? "58px"
                          : item.name === "Books"
                          ? "50px"
                          : item.name === "More"
                          ? "42px"
                          : "60px"
                        : "0",
                  }}
                ></div>

                {/* Dropdown menu */}
                {hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-6 p-2 w-72 bg-[#1A1A1A] shadow-lg rounded-2xl z-50 transition-all duration-300">
                    {item.options.map((option) => (
                      <div key={option.name} className="relative">
                        <div
                          className="flex items-center justify-between px-6 py-4 rounded-2xl text-[#d4d0d0] hover:bg-[#0f0f0f] cursor-pointer"
                          onMouseEnter={() => handleOptionMouseEnter(option.name)}
                          onMouseLeave={handleOptionMouseLeave}
                        >
                          <a href={option.link} className="flex-1">
                            <span>{option.name}</span>
                          </a>
                          {option.subOptions && <HiChevronRight className="text-lg" />}
                        </div>

                        {/* Sub-options - Only show when this specific option is hovered */}
                        {option.subOptions && hoveredOption === option.name && (
                          <div
                            className="absolute top-0 left-full ml-4 p-2 w-48 bg-[#1A1A1A] shadow-lg rounded-2xl z-50 transition-all duration-300"
                            onMouseEnter={() => handleSubOptionMouseEnter(option.name)}
                            onMouseLeave={handleSubOptionMouseLeave}
                          >
                            {option.subOptions.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.link}
                                className="block px-4 py-3 text-sm text-[#d4d0d0] hover:bg-[#0f0f0f] rounded-2xl last:rounded-b-2xl"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-[#2a2a2a] bg-[#0266DA] border-2 flex items-center justify-center">
            <img src={phoneLogo} alt="Phone" />
          </div>
          {isLoggedIn ? (
            <>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-[#2a2a2a] border-2 flex items-center justify-center">
                <IoIosNotificationsOutline className="text-xl cursor-pointer" />
              </div>
              <div className="relative group">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-[#2a2a2a] border-2 flex items-center justify-center font-bold text-sm cursor-pointer">
                  {userInfo?.name?.[0]}
                </div>
                <div className="absolute top-10 right-0 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                  <ProfileDropdown onLogout={logout} />
                </div>
              </div>
              <div className="hidden lg:flex flex-col text-xs lg:text-[0.69rem]">
                <span className="font-semibold">{userInfo?.name}</span>
                <span className="text-[#848484] font-semibold mt-0.5">
                  Class {userInfo?.classLevel} | {userInfo?.exam}
                </span>
              </div>
            </>
          ) : (
            <button
              className="px-4 py-2 text-sm md:text-base font-medium text-white border border-blue-500 rounded-full hover:bg-blue-600 transition-all"
              onClick={() => setModalOpen(true)}
            >
              Login
            </button>
          )}

          <LoginModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onLoginSuccess={(data) => {
              setIsLoggedIn(true);
              setUserInfo(data.student);
              setModalOpen(false);
              // Note: localStorage not available in artifacts
              // localStorage.setItem("token", data.token);
              // localStorage.setItem("student", JSON.stringify(data.student));
            }}
          />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80vw] max-w-[320px] bg-[#0F0F0F] text-white z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img className="w-16 md:w-20" src={logo} alt="Logo" />
          <button onClick={toggleSidebar}>
            <HiX className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-800">
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-800"
                onClick={() => toggleExpand(item.name)}
              >
                <span className="text-[14px]">{item.name}</span>
                <HiChevronDown
                  className={`transition-transform ${
                    expandedMenus.includes(item.name) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMenus.includes(item.name) && (
                <div className="bg-gray-900 px-6 py-2">
                  {item.options.map((option) => (
                    <a
                      key={option.name}
                      href={option.link}
                      className="block py-2 text-sm text-gray-300 hover:text-white"
                    >
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4">
          <button className="text-blue-400 hover:underline" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;