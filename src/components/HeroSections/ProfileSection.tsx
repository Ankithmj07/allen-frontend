import React, { useState } from "react";
import { FaUser, FaClipboardList, FaShoppingBag, FaGift, FaQuestionCircle, FaSlidersH } from "react-icons/fa";
import PersonalComponent from "../sections/PersonalComponent";
import NoticeBoard from "../sections/NoticeBoard";
import Orders from "../sections/Orders";
import ReferFriend from "../sections/ReferFriend";
import Support from "../sections/Support";
import Settings from "../sections/Settings";
import { useAuth } from "../../contexts/AuthContext";

const menuItems = [
  { id: "personal", label: "Personal details", icon: <FaUser /> },
  { id: "noticeboard", label: "Noticeboard", icon: <FaClipboardList /> },
  { id: "orders", label: "Order details", icon: <FaShoppingBag /> },
  { id: "refer", label: "Refer a Friend", icon: <FaGift />, badge: "NEW" },
  { id: "support", label: "Help & support", icon: <FaQuestionCircle /> },
  { id: "settings", label: "Settings", icon: <FaSlidersH /> },
];


const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isDark, setIsDark] = useState(true);
  const { token, student } = useAuth();

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalComponent />;
      case "noticeboard":
        return <NoticeBoard />;
      case "orders":
        return <Orders />;
      case "refer":
        return <ReferFriend />;
      case "support":
        return <Support />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  if (!token || !student) {
    return (
      <div className="text-center py-20 text-white bg-[#121212] min-h-screen">
        <h1 className="text-2xl font-semibold">You are not logged in</h1>
        <p className="mt-4 text-gray-400">Please login to access your profile.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] lg:container mx-auto lg:px-[150px] mt-10 pt-0">
        <div className="px-6 pt-20 lg:px-10 lg:pt-10 border-b border-neutral-800 pb-5">
          <h1 className="text-lg lg:text-xl font-semibold">Your profile</h1>
        </div>

    <div className="block lg:hidden flex-1 p-6">
        <PersonalComponent></PersonalComponent>
    </div>
    <div className="hidden min-h-screen text-white lg:flex">
      {/* Sidebar */}

      <div className="w-90 px-15 pt-12 border-r border-neutral-800">
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-800 rounded-lg w-full max-w-xs mb-5">
            <span className="text-white text-sm font-medium">Site Theme</span>
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">{isDark ? "Dark" : "Light"}</span>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                  isDark ? "bg-[#3D3D3D]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
                    isDark ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
        </div>


        <nav className="space-y-5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                activeTab === item.id
                  ? "bg-white text-black font-semibold"
                  : "text-gray-300 hover:bg-neutral-800"
              }`}
            >
              <div className="flex items-center gap-4">
                <span>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] bg-yellow-400 text-black font-bold px-2 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-10 text-xs text-gray-500">PRIVACY POLICY</div>
      </div>

      {/* Content */}
      <div className="hidden lg:block flex-1 p-6">
        {renderTabContent()}
      </div>
    </div>
    </div>
  );
};

export default ProfileSection;
