import React, { useState,useEffect } from "react";
import lockImg from '../../assets/lock.png'
import studentImg from '../../assets/detail1.png'
import parentsImg from '../../assets/detail2.png'
import addressImg from '../../assets/detail3.png'
import downaArrow from '../../assets/enrollArrow.png'
import { useEnroll } from '../../contexts/EnrollContext';
//import { useAuth } from "../../contexts/AuthContext";
import Cookies from "js-cookie"



type Tab = {
  id: string;
  label: string;
  icon: string;
};

const tabs: Tab[] = [
  { id: "student", label: "Student details", icon: studentImg },
  { id: "parent", label: "Parent’s details", icon: parentsImg },
  { id: "address", label: "Address details", icon: addressImg },
];

const EnrollSection:React.FC = () => {
    const { selectedCourse } = useEnroll();
    const { courseLanguage,courseDate } = useEnroll();
    //const { student } = useAuth();
    //const [studentData, setStudentData] = useState();
    console.log(courseLanguage)
    const [openTab, setOpenTab] = useState<string | null>("student");
    const [studentDetails, setStudentDetails] = useState({
        name: '',
        mobile: '',
        gender: '',
        dob: '',
        email: '',
    });
    const [parentDetails, setParentDetails] = useState({
        ParentName: "",
        parentMobile: "",
        parentGender: "",
      });
    
      const [addressDetails, setAddressDetails] = useState({
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pincode: "",
      });
    

    const isStudentFormValid = Object.values(studentDetails).every(
        (value) => value.trim() !== ''
    );
    const isParentFormValid = Object.values(parentDetails).every(
        (value) => value.trim() !== ""
      );
      const isAddressFormValid = Object.values(addressDetails).every(
        (value) => value.trim() !== ""
      );

    const toggleTab = (id: string) => {
        setOpenTab(openTab === id ? null : id);
    };
    const handleContinue = () => {
        const currentIndex = tabs.findIndex((tab) => tab.id === openTab);
        const nextTab = tabs[currentIndex + 1];
        if (nextTab) {
          setOpenTab(nextTab.id);
        }
      };

      const savedToken = Cookies.get("student");
      console.log(savedToken)

      useEffect(() => {
        if (savedToken) {
          try {
            const parsedToken = JSON.parse(savedToken);
      
            setStudentDetails((prev) => ({
              ...prev,
              name: parsedToken.name || '',
              email: parsedToken.email || '',
              mobile: parsedToken.phNumber || '',
            }));
          } catch (error) {
            console.error("Failed to parse saved token:", error);
          }
        }
      }, [savedToken]);
    if (!selectedCourse) {
        return <div className="text-white p-6">Loading course details...</div>;
      }      

  return (
    <div className=" min-h-screen text-white p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-4 order-3 lg:order-1">
          {tabs.map((tab) => {
             const isFormValid =
             tab.id === "student"
               ? isStudentFormValid
               : tab.id === "parent"
               ? isParentFormValid
               : tab.id === "address"
               ? isAddressFormValid
               : false;
            return(
            <div key={tab.id} className="bg-neutral-900 rounded-xl">
              {/* Header */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
                  <span className="text-sm">{tab.label}</span>
                </div>

                {openTab !== tab.id && (
                    <div className="flex items-center gap-2">
                      {!isFormValid ? (
                        <img src={lockImg} alt="lock" className="w-4 h-4" />
                      ) : (
                        <div className="flex px-2 space-x-2" onClick={() => toggleTab(tab.id)}>
                          <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            FILLED
                          </span>
                          <img src={downaArrow}></img>
                        </div>
                      )}
                      
                    </div>
                  )}
              </div>

              

              {/* Content */}
              {openTab === tab.id && (
                <div className="p-4 border-t border-neutral-700">
                {tab.id === 'student' && (
                  <div>  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1">Student’s Full Name</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Full Name"
                            value={studentDetails.name}
                            onChange={(e) =>
                            setStudentDetails({ ...studentDetails, name: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Student’s Mobile Number</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Mobile Number"
                            value={studentDetails.mobile}
                            onChange={(e) =>
                            setStudentDetails({ ...studentDetails, mobile: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Gender</label>
                          <div className="flex gap-3">
                          <button
                            className={`px-4 py-2 rounded-full border ${
                            studentDetails.gender === 'Male'
                              ? 'bg-[#0266DA] hover:bg-blue-700 text-white'
                              : 'border-neutral-700'
                            }`}
                            onClick={() =>
                              setStudentDetails({ ...studentDetails, gender: 'Male' })
                            }
                            >
                            Male
                            </button>
                            <button
                              className={`px-4 py-2 rounded-full border ${
                                studentDetails.gender === 'Female'
                                  ? 'bg-[#0266DA] hover:bg-blue-700 text-white'
                                  : 'border-neutral-700'
                              }`}
                              onClick={() =>
                                setStudentDetails({ ...studentDetails, gender: 'Female' })
                              }
                            >
                              Female
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block mb-1">Date of Birth</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            type="date"
                            value={studentDetails.dob}
                            onChange={(e) =>
                            setStudentDetails({ ...studentDetails, dob: e.target.value })
                            }
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block mb-1">Email ID</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            type="email"
                            placeholder="Email"
                            value={studentDetails.email}
                            onChange={(e) =>
                            setStudentDetails({ ...studentDetails, email: e.target.value })
                            }
                          />
                        </div>
                    </div>
                    <button
                        className={`w-full rounded-lg py-2 mt-4 ${
                            isStudentFormValid
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                          }`}
                          disabled={!isStudentFormValid}                        
                          onClick={handleContinue}
                    >
                        Continue
                    </button>
                    </div>
                    )}

                {tab.id === 'parent' && (
                  <div>  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1">Parent’s Full Name</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Full Name"
                            value={parentDetails.ParentName}
                            onChange={(e) =>
                            setParentDetails({ ...parentDetails, ParentName: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Parent’s Mobile Number</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Mobile Number"
                            value={parentDetails.parentMobile}
                            onChange={(e) =>
                            setParentDetails({ ...parentDetails, parentMobile: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Gender</label>
                          <div className="flex gap-3">
                          <button
                            className={`px-4 py-2 rounded-full border ${
                                parentDetails.parentGender === 'Male'
                              ? 'bg-[#0266DA] hover:bg-blue-700 text-white'
                              : 'border-neutral-700'
                            }`}
                            onClick={() =>
                                setParentDetails({ ...parentDetails, parentGender: 'Male' })
                            }
                            >
                            Male
                            </button>
                            <button
                              className={`px-4 py-2 rounded-full border ${
                                parentDetails.parentGender === 'Female'
                                  ? 'bg-[#0266DA] hover:bg-blue-700 text-white'
                                  : 'border-neutral-700'
                              }`}
                              onClick={() =>
                                setParentDetails({ ...parentDetails, parentGender: 'Female' })
                              }
                            >
                              Female
                            </button>
                          </div>
                        </div>
                    </div>
                    <button
                        className={`w-full rounded-lg py-2 mt-4 ${
                            isParentFormValid
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                          }`}
                          disabled={!isParentFormValid}                        
                          onClick={handleContinue}
                    >
                        Continue
                    </button>
                    </div>
                    )}
                    {tab.id === 'address' && (
                    <div>  
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1">Pin Code</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Ex : 577523"
                            value={addressDetails.pincode}
                            onChange={(e) =>
                            setAddressDetails({ ...addressDetails, pincode: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">City</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Ex : Bengaluru"
                            value={addressDetails.city}
                            onChange={(e) =>
                            setAddressDetails({ ...addressDetails, city: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">State</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            placeholder="Ex : Karnataka"
                            value={addressDetails.state}
                            onChange={(e) =>
                            setAddressDetails({ ...addressDetails, state: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Address lin 01</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            type="text"
                            placeholder="Flat/house no, Block, building name"
                            value={addressDetails.addressLine1}
                            onChange={(e) =>
                                setAddressDetails({ ...addressDetails, addressLine1: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Address lin 02</label>
                          <input
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 outline-none"
                            type="text"
                            placeholder="Street name, locality"
                            value={addressDetails.addressLine1}
                            onChange={(e) =>
                                setAddressDetails({ ...addressDetails, addressLine2: e.target.value })
                            }
                          />
                        </div>
                    </div>
                    <button
                        className={`w-full rounded-lg py-2 mt-4 cursor-pointer ${
                            isStudentFormValid
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                          }`}
                          disabled={!isStudentFormValid}                        
                          onClick={handleContinue}
                    >
                        Continue
                    </button>
                    </div>
                    )}
                    
                </div>
              )}
            </div>
              )})}
        </div>

        {/* Right Info Card */}
        <div className="w-full order-1 lg:order-2 lg:w-[350px]">
          <div className="bg-neutral-900 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-2">
              {selectedCourse.name}
            </h2>
            <p className="text-sm text-neutral-400 mb-4">
              Class {selectedCourse.classLevel} • {selectedCourse.duration} Year
            </p>
            <hr className="border-neutral-700 my-2" />
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-neutral-500">Language</p>
              <div className="flex items-center gap-2 px-3">
                <p className="text-sm">{courseLanguage}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-6">
              <p className="text-sm text-neutral-500">Starting date</p>
              <div className="flex items-center gap-2 px-3">
                <p className="text-sm">{courseDate}</p>
              </div>
            </div>
          </div>

          {/*  Benefit Card */}
          <div className="order-2 lg:order-3">
          <p className="text-md text-white font-semibold mb-1 px-1 mt-6">
                Price Breakdown
            </p>
          <div className="bg-neutral-900 rounded-xl mt-4">
            <div className="bg-[#00B17C] w-[50%] text-white text-center text-xs font-bold px-3 py-1 rounded-br-2xl rounded-tl-2xl whitespace-nowrap">
            SPECIAL FEE BENEFIT
            </div>
            <p className="text-md text-neutral-400 mb-4 px-4 mt-4">
                Course Fee
            </p>
            <div className="flex justify-between pl-6 pr-2 items-center mt-6">
              <p className="text-sm text-neutral-500">MRP ({selectedCourse.originalPrice} + Taxes)</p>
              <div className="flex items-center gap-2 px-3">
                <p className="text-sm">₹ {selectedCourse.originalPrice + selectedCourse.taxes}</p>
              </div>
            </div>
            <div className="flex justify-between pl-6 pr-2 items-center mt-4">
              <div className="flex justify-center items-center"> 
                <p className="text-sm text-neutral-500 mt-1">Discount on MRP</p>
                <div className="bg-[#510D0D] text-center text-xs text-[#FA2946] px-1 py-1 font-bold rounded-md whitespace-nowrap">
                10% OFF
                 </div>
              </div>
              <div className="flex items-center gap-2 px-3">
                <p className="text-sm text-[#FA2946] font-semibold">- ₹ {selectedCourse.originalPrice - selectedCourse.price}</p>
              </div>
            </div>
            <div className="px-4">
            <hr className="border-neutral-700 my-4" />
            </div>
            <div className="flex justify-between items-center pl-4 pr-2 pb-4">
              <p className="text-md font-semibold text-white">Final course fee</p>
              <div className="flex items-center gap-2 px-3">
                <p className="text-md font-semibold text-white">₹ {selectedCourse.price + selectedCourse.taxes}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollSection;
