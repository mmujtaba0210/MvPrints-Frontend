import CustomButton from "@/components/CustomButton";
import FormField from "@/components/form/FormField";
import React, { useState, useEffect, useRef } from "react";
import {
  FaCross,
  FaRegWindowClose,
  FaWindowClose,
  FaChevronDown,
} from "react-icons/fa";
import {
  FiCrosshair,
  FiPlus,
  FiUser,
  FiLock,
  FiUpload,
  FiX,
} from "react-icons/fi";
import AddressModal from "../Modals/AddressModal";

const AccountPanel = () => {
  const [selectedAddress, setSelectedAddress] = useState("address1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [activeTab, setActiveTab] = useState("general");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "/images/dashboard/infobg.jpg"
  );
  const [dragActive, setDragActive] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedAddressData, setSelectedAddressData] = useState(null);
  const fileInputRef = useRef(null);

  const addresses = [
    {
      id: "address1",
      name: "Bilal Ameen",
      company: "Ace Creatives",
      address: "1344 McDonough PL",
      city: "McDonough",
      state: "GA",
      zip: "30253",
      country: "United States",
      isDefault: true,
    },
    {
      id: "address2",
      name: "Ashley Joseph",
      company: "Ashley prints",
      address: "401 Shade Tree Drive",
      city: "Stockbridge",
      state: "GA",
      zip: "30281",
      country: "United States",
    },
    {
      id: "address3",
      name: "Kelvin marks",
      company: "Tammys Printing",
      address: "4093 sharpstone bend",
      city: "New Orleans",
      state: "LA",
      zip: "30281",
      country: "United States",
    },
  ];

  const generalFormData = [
    {
      label: "Full Name",
      placeholder: "Andri Jokall",
    },
    {
      label: "User Name",
      placeholder: "abcd",
    },
    {
      label: "Email",
      placeholder: "andrijokall18@gmail.com",
    },
    {
      label: "Phone Number",
      placeholder: "+923048239545",
    },
  ];

  const passwordFormData = [
    {
      label: "Old Password",
      placeholder: "Enter your current password",
      type: "password",
    },
    {
      label: "New Password",
      placeholder: "Enter new password",
      type: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "Confirm new password",
      type: "password",
    },
  ];
  const PinFromData = [
    {
      label: "Old Pin",
      placeholder: "Enter your current Pin",
      type: "password",
    },
    {
      label: "New Pin",
      placeholder: "Enter new Pin",
      type: "password",
    },
    {
      label: "Confirm Pin",
      placeholder: "Confirm new Pin",
      type: "password",
    },
  ];

  useEffect(() => {
    const handleClick = () => setOpenMenuId(null);
    if (openMenuId !== null) {
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, [openMenuId]);

  const TabButton = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === id
          ? "bg-[#0096ff] text-white shadow-md"
          : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setIsUploadDialogOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleEditModal = (address) => {
    setOpenMenuId(null);
    setIsEditMode(true);
    setSelectedAddressData(address);
    setIsDialogOpen(true);
  };

  const handleAddNewAddress = () => {
    setIsEditMode(false);
    setSelectedAddressData(null);
    setIsDialogOpen(true);
  };

  return (
    <div className="grid grid-cols-1  2xl:grid-cols-2 gap-6 px-4 sm:px-6 py-6">
      {/* ===== Profile Section ===== */}
      <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] w-full rounded-xl p-4 sm:p-6 md:p-8 mx-auto">
        {/* Avatar */}
        <div className="flex justify-center items-center mb-6 sm:mb-8 relative">
          <img
            src={profileImage}
            alt="avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 2xl:size-[12rem] rounded-full object-cover border-4 border-[#0096ff]"
          />
          <div className="absolute bottom-1  sm:-bottom-3 ">
            <CustomButton
              text={<FiPlus className="w-5 h-5" color="white" />}
              width="fit"
              className="rounded-full p-2 shadow-lg 2xl:text-2xl"
              onClick={() => setIsUploadDialogOpen(true)}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center text-sm sm:text-base 2xl:text-2xl gap-3 sm:gap-6 mb-4 sm:mb-6 flex-wrap">
          <TabButton id="general" icon={FiUser} label="General Info" />
          <TabButton id="password" icon={FiLock} label="Password" />
          <TabButton id="pin" icon={FiLock} label="Pin" />
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 md:p-6">
          {activeTab === "general" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {generalFormData.map((data, index) => (
                  <FormField
                    key={index}
                    label={data.label}
                    placeholder={data.placeholder}
                    type={data.type || "text"}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-4 sm:mt-6">
                <CustomButton
                  text="Update Profile"
                  width="fit"
                  className="px-4 sm:px-6 2xl:text-2xl"
                />
              </div>
            </>
          )}
          {activeTab === "password" && (
            <>
              <div className="grid grid-cols-1 gap-4">
                {/* Old Password takes full width */}
                <FormField
                  label="Old Password"
                  placeholder="Enter your current password"
                  type="password"
                />

                {/* New + Confirm Password on one row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="New Password"
                    placeholder="Enter new password"
                    type="password"
                  />
                  <FormField
                    label="Confirm Password"
                    placeholder="Confirm new password"
                    type="password"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-4 sm:mt-6">
                <CustomButton
                  text="Change Password"
                  width="full sm:w-1/3 lg:w-1/4"
                  className="px-4 sm:px-6 2xl:text-2xl"
                />
              </div>
            </>
          )}
          {activeTab === "pin" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PinFromData.map((data, index) => (
                  <FormField
                    key={index}
                    label={data.label}
                    placeholder={data.placeholder}
                    type={data.type}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-4 sm:mt-6">
                <CustomButton
                  text="Change Pin"
                  width="full sm:w-1/3 lg:w-1/4"
                  className="px-4 sm:px-6 2xl:text-2xl"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* ===== Address Section ===== */}
      <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 sm:px-6 border-b border-[#bfb7b7] pb-3">
          <span className="text-[#0096ff] text-lg sm:text-xl font-bold 2xl:text-4xl">
            Address
          </span>
          <CustomButton
            text={
              <div className="flex items-center text-sm sm:text-base 2xl:text-2xl gap-2">
                <FiPlus
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                  color="white"
                />
                <span>Add New</span>
              </div>
            }
            width="full sm:w-auto"
            onClick={handleAddNewAddress}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 my-6 px-4 sm:px-8 md:px-14">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`border rounded-md p-4 h-fit w-full cursor-pointer ${selectedAddress === addr.id
                  ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                  : "border-gray-300"
                }`}
              onClick={() => setSelectedAddress(addr.id)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-start sm:items-center gap-3 w-full">
                  <input
                    type="radio"
                    name="shippingAddress"
                    id={addr.id}
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                    className="h-4 w-4 text-[#0096ff] focus:ring-[#0096ff] border-gray-300"
                  />
                  <div className="text-sm sm:text-base 2xl:text-2xl">
                    <p className="font-semibold">{addr.name}</p>
                    <p className="text-gray-600">{addr.company}</p>
                    <p className="text-gray-600">{addr.address}</p>
                    <p className="text-gray-600">{`${addr.city}, ${addr.state} ${addr.zip}`}</p>
                    <p className="text-gray-600">{addr.country}</p>
                  </div>
                </div>

                {/* Dropdown */}
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1 focus:outline-none 2xl:text-2xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuId(openMenuId === addr.id ? null : addr.id);
                      }}
                    >
                      <FaChevronDown />
                    </button>
                    {openMenuId === addr.id && (
                      <div
                        className="absolute right-0 w-36 sm:w-40 bg-white border border-[#bfb7b7] rounded shadow-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ul className="text-sm sm:text-base 2xl:text-2xl">
                          <li
                            className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleEditModal(addr)}
                          >
                            Edit
                          </li>
                          <li
                            className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setOpenMenuId(null)}
                          >
                            Delete
                          </li>
                          {!addr.isDefault && (
                            <li
                              className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => setOpenMenuId(null)}
                            >
                              Make This Default
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                  {addr.isDefault && (
                    <span className="bg-[#0096ff] text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Upload Dialog ===== */}
      {isUploadDialogOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md sm:max-w-lg relative">
            <button
              onClick={() => setIsUploadDialogOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>

            <h2 className="text-lg sm:text-2xl font-bold text-[#0096ff] mb-4">
              Upload Profile Picture
            </h2>

            <div
              className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center ${dragActive ? "border-[#0096ff] bg-blue-50" : "border-gray-300"
                }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              <FiUpload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                Drag and drop your image here, or{" "}
                <button
                  className="text-[#0096ff] font-semibold hover:underline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  browse
                </button>
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Supported formats: JPG, PNG, GIF (Max size: 5MB)
              </p>
            </div>
          </div>
        </div>
      )}

      {isDialogOpen && (
        <AddressModal
          onClickClose={() => {
            setIsDialogOpen(false);
            setIsEditMode(false);
            setSelectedAddressData(null);
          }}
          isEditMode={isEditMode}
          addressData={selectedAddressData}
        />
      )}
    </div>
  );
};

export default AccountPanel;
