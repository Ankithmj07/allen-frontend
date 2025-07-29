import React from "react";
import { useEnroll } from '../../contexts/EnrollContext';


type FeeCardProps = {
  price: number;
  tax: number;
  languages: string[];
  selectedLanguage: string;
  startingDate: string[];
  selectedDate: string; 
  onLanguageChange: (lang: string) => void;
  onDateChange: (date: string) => void;  
  onEnroll: () => void;
  isMobileView?: boolean;
};

const FeeCard: React.FC<FeeCardProps> = ({
  price,
  tax,
  languages,
  selectedLanguage,
  startingDate,
  selectedDate,
  onLanguageChange,
  onDateChange,
  onEnroll,
  isMobileView = false,
}) => {
    //const [isDisabled, setDisabled] = useState(false);
    const { closeFeeCard } = useEnroll();
    //const handleDisableClick = () => {
        //setDisabled(true)
    //}

    const { setCourseLanguage, setCourseDate } = useEnroll();
    setCourseLanguage(selectedLanguage)

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    };
    
    const handleLanguageClick = (lang: string) => {
      onLanguageChange(lang);
      setCourseLanguage(lang);
      console.log(lang)
    };

    const handleDateClick = (date: string) => {
      onDateChange(date);
      setCourseDate(formatDate(date));
      console.log(date)
    };
    
   
  return (
    <div className={`${
        isMobileView
          ? "fixed inset-x-0 bottom-0 z-50 bg-[#212121] rounded-t-2xl p-6"
          : "hidden lg:block bg-[#212121] p-6 rounded-2xl"
      } w-full max-w-[387px] h-[378px] mx-auto`}>
        <button
            onClick={closeFeeCard}
            className="absolute top-1 right-3 text-white text-xl"
            >
                      ✕
        </button>
        <div className="flex justify-between">
            <div className="text-[18px] font-bold text-white">Course Fee</div>
            <div className="flex items-end space-x-2">
                <span className="text-[18px] font-semibold text-white">₹ {price.toLocaleString()}</span>
                <span className="text-[12px] text-[#848484] mb-[2px]">+ ₹{tax} Taxes</span>
            </div>
        </div>

      <div className="mt-8 border-1 border-[#424547] py-2 px-4 rounded-2xl h-[200px]">
        <label className="block text-[14px] text-gray-400 mb-4">Select course language</label>
        <div className="flex space-x-2 mb-4">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageClick(lang)}
              className={`px-4 py-1 rounded-lg border ${
                selectedLanguage === lang
                  ? "bg-[#2e3357] border-[#2F80ED] text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              } text-sm py-2`}
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
            <hr className="w-full"></hr>
        </div>
        
        <div className="mt-2">
            <label className="block text-[14px] mb-4 text-gray-400">Select starting date</label>
            <div className="flex gap-2 mb-4">
            {Array.isArray(startingDate) && startingDate.map((date) => (
            <button
              key={date}
              onClick={() => handleDateClick(date)}
              className={`px-4 py-1 rounded-lg border ${
                selectedDate === date
                  ? "bg-[#2e3357] border-[#2F80ED] text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              } text-sm py-2`}
            >
              {formatDate(date)}
            </button>
          ))}

          </div>
        </div>
      </div>

      

      <button
        className={`w-full mt-6 py-2 rounded-full cursor-pointer ${
          selectedDate
            ? "bg-[#0266DA] hover:bg-blue-700 text-white"
            : "bg-gray-800 text-gray-500 cursor-not-allowed" 
        }`}
        onClick={onEnroll}
        disabled={!selectedLanguage || !selectedDate}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default FeeCard;
