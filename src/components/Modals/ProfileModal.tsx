import React, { useState,useEffect } from "react";
import { Moon, Sun, Settings, BookOpen, HelpCircle, MapPin, Bell } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

type ProfileDropdownProps = {
    onLogout: () => void;
  };
  

const ProfileDropdown: React.FC<ProfileDropdownProps> = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<{
      name: string;
      classLevel: string;
      exam: string;
    } | null>(null);
    const {student, logout } = useAuth();

    useEffect(() => {
      setUserInfo(student);
    }, [student]);
    


  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="w-72 bg-[#1d1d1d] text-white rounded-xl p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-lg">{userInfo?.name}</p>
          <p className="text-sm text-gray-400">Class {userInfo?.classLevel} | {userInfo?.exam}</p>
        </div>
        <div className="text-gray-400 cursor-pointer hover:text-white">&rsaquo;</div>
      </div>

      {/* Theme toggle */}
      <div className="mt-4 text-[.625rem] lg:text-sm flex items-center justify-between bg-black p-2 rounded-lg">
        <p>Site Theme</p>
        <div
          onClick={toggleTheme}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span>{darkMode ? "Dark" : "Light"}</span>
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </div>
      </div>

      {/* Menu options */}
      <div className="mt-4 space-y-4 text-sm">
        <MenuItem icon={<Bell size={18} />} label="Noticeboard" />
        <MenuItem icon={<BookOpen size={18} />} label="Order details" />
        <MenuItem icon={<HelpCircle size={18} />} label="Help & support" />
        <MenuItem icon={<MapPin size={18} />} label="Manage address" />
        <MenuItem icon={<Settings size={18} />} label="Settings" />
      </div>

      {/* Logout Button */}
      <button className="mt-6 w-full text-sm bg-white text-black rounded-full py-2 font-medium hover:bg-gray-200 cursor-pointer"
      onClick={logout}>
        Logout
      </button>

      {/* Footer Links */}
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <a href="#">PRIVACY POLICY</a>
        <a href="#">TERMS & CONDITION</a>
      </div>
    </div>
  );
};

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
    {icon}
    <span>{label}</span>
  </div>
);

export default ProfileDropdown;
