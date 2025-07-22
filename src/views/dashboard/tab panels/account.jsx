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
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        activeTab === id
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
    <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-2  gap-6 p-6">
      {/* Profile Section */}
      <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] w-full max-w-4xl rounded-xl p-6 sm:p-8 mx-auto">
        {/* Avatar */}
        <div className="flex justify-center items-center mb-8 relative">
          <img
            src={profileImage}
            alt="avatar"
            className="w-32 h-32 2xl:size-[12rem] sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#0096ff]"
          />
          <div className="absolute bottom-2 right-2">
            <CustomButton
              text={<FiPlus className="w-5 h-5" color="white" />}
              width="fit"
              className="rounded-full p-2 shadow-lg 2xl:text-2xl "
              onClick={() => setIsUploadDialogOpen(true)}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center 2xl:text-2xl  gap-6 mb-6 flex-wrap">
          <TabButton id="general" icon={FiUser} label="General Info" />
          <TabButton id="password" icon={FiLock} label="Password" />
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
          {activeTab === "general" ? (
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
              <div className="flex justify-end mt-6">
                <CustomButton
                  text="Update Profile"
                  width="fit"
                  className="px-6 2xl:text-2xl "
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-ro sm:gap-4 gap-6">
                {passwordFormData.map((data, index) => (
                  <FormField
                    key={index}
                    label={data.label}
                    placeholder={data.placeholder}
                    type={data.type}
                    className="flex-1"
                  />
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <CustomButton
                  text="Change Password"
                  width="full sm:w-1/4"
                  className="px-6 2xl:text-2xl "
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl py-3">
        <div className="flex justify-between items-center px-6 border-b border-[#bfb7b7] pb-2">
          <span className="text-[#0096ff] text-xl font-bold 2xl:text-4xl ">
            Address
          </span>
          <CustomButton
            text={
              <div className="flex items-center 2xl:text-2xl  gap-2">
                <FiPlus className="w-[20px] h-[20px]" color="white" />{" "}
                <span>Add New</span>
              </div>
            }
            width="40%"
            onClick={handleAddNewAddress}
          />
        </div>
        <div className="grid grid-cols-1 container justify-center gap-3 space-y-2 my-6 px-14">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`border rounded-md p-4 h-fit w-full cursor-pointer ${
                selectedAddress === addr.id
                  ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedAddress(addr.id)}
              style={{ position: "relative" }}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="shippingAddress"
                    id={addr.id}
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                    className="mr-3 h-4 w-4 2xl:text-2xl  text-[#0096ff] focus:ring-[#0096ff] border-gray-300"
                  />
                  <div className="2xl:text-3xl ">
                    <p className="font-semibold">{addr.name}</p>
                    <p className="text-sm text-gray-600 2xl:text-2xl">
                      {addr.company}
                    </p>
                    <p className="text-sm text-gray-600 2xl:text-2xl">
                      {addr.address}
                    </p>
                    <p className="text-sm text-gray-600 2xl:text-2xl">{`${addr.city}, ${addr.state} ${addr.zip}`}</p>
                    <p className="text-sm text-gray-600 2xl:text-2xl">
                      {addr.country}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <button
                      type="button"
                      className="bg-red-500 2xl:text-2xl hover:bg-red-600 text-white rounded px-2 py-1 focus:outline-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuId(openMenuId === addr.id ? null : addr.id);
                      }}
                    >
                      <FaChevronDown />
                    </button>
                    {openMenuId === addr.id && (
                      <div
                        className="absolute right-0 w-40 bg-white border-1 border-[#bfb7b7] rounded shadow-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ul className="2xl:text-2xl">
                          <li
                            className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              handleEditModal(addr);
                            }}
                          >
                            Edit
                          </li>
                          <li
                            className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              /* handle delete */ setOpenMenuId(null);
                            }}
                          >
                            Delete
                          </li>
                          {!addr.isDefault && (
                            <li
                              className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                /* handle make default */ setOpenMenuId(null);
                              }}
                            >
                              Make This Default
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                  {addr.isDefault && (
                    <span className="relative w-fit 2xl:text-2xl bg-[#0096ff] text-white text-xs font-semibold px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Upload Dialog */}
      {isUploadDialogOpen && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[500px] max-w-full relative">
            <button
              onClick={() => setIsUploadDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-[#0096ff] mb-4">
              Upload Profile Picture
            </h2>

            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center ${
                dragActive ? "border-[#0096ff] bg-blue-50" : "border-gray-300"
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

              <FiUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                Drag and drop your image here, or{" "}
                <button
                  className="text-[#0096ff] font-semibold hover:underline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  browse
                </button>
              </p>
              <p className="text-sm text-gray-500">
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
