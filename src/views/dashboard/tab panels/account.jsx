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
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const fileInputRef = useRef(null);

  const API_BASE_URL = "https://testbackend.mecarviprints.com/api/";
  const TOKEN = "61|MWOZCtdsCwHuO9H5YYYcf7166EmrCbcE4ggLOJ74bc1808ac";

  // Form states
  const [generalForm, setGeneralForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });
  
  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: ""
  });
  
  const [pinForm, setPinForm] = useState({
    old_pin: "",
    new_pin: "",
    confirm_pin: ""
  });

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

  // Fetch profile data
  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}customer/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status_code === 200) {
          setProfileData(result.data);
          setGeneralForm({
            name: result.data.name || "",
            username: result.data.username || "",
            email: result.data.email || "",
            phone: result.data.phone || ""
          });
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update General Info
  const updateGeneralInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}customer/update-profile`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(generalForm),
      });

      const result = await response.json();
      
      if (result.status_code === 200) {
        setProfileData(result.data);
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  // Update Password
  const updatePassword = async () => {
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      alert("New password and confirm password don't match");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}customer/update-password`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          old_password: passwordForm.old_password,
          new_password: passwordForm.new_password,
          confirm_password: passwordForm.confirm_password
        }),
      });

      const result = await response.json();
      
      if (result.status_code === 200) {
        setPasswordForm({ old_password: "", new_password: "", confirm_password: "" });
        alert("Password updated successfully!");
      } else {
        alert(result.message || "Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Error updating password");
    } finally {
      setLoading(false);
    }
  };

  // Update Pin
  const updatePin = async () => {
    if (pinForm.new_pin !== pinForm.confirm_pin) {
      alert("New PIN and confirm PIN don't match");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}customer/update-pin`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          old_pin: pinForm.old_pin,
          new_pin: pinForm.new_pin,
          confirm_pin: pinForm.confirm_pin
        }),
      });

      const result = await response.json();
      
      if (result.status_code === 200) {
        setPinForm({ old_pin: "", new_pin: "", confirm_pin: "" });
        alert("PIN updated successfully!");
      } else {
        alert(result.message || "Failed to update PIN");
      }
    } catch (error) {
      console.error("Error updating PIN:", error);
      alert("Error updating PIN");
    } finally {
      setLoading(false);
    }
  };

  // Update Photo
  const updatePhoto = async (file) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("photo", file);

      const response = await fetch(`${API_BASE_URL}customer/update-photo`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
        },
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok && result.status_code === 200) {
        await fetchProfileData(); // Refresh profile data to get updated avatar
        alert("Profile photo updated successfully!");
      } else {
        alert(result.message || "Failed to update photo");
      }
    } catch (error) {
      console.error("Error updating photo:", error);
      alert("Error updating photo");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

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
        updatePhoto(file); // Call API to update photo
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

  const handleGeneralFormChange = (field, value) => {
    setGeneralForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordFormChange = (field, value) => {
    setPasswordForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePinFormChange = (field, value) => {
    setPinForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="grid grid-cols-1  2xl:grid-cols-2 gap-6 px-4 sm:px-6 py-6">
      {/* ===== Profile Section ===== */}
      <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] w-full rounded-xl p-4 sm:p-6 md:p-8 mx-auto">
        {/* Avatar */}
        <div className="flex justify-center items-center mb-6 sm:mb-8 relative">
          <img
            src={profileData?.avatar || profileImage}
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
                <FormField
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={generalForm.name}
                  onChange={(e) => handleGeneralFormChange("name", e.target.value)}
                />
                <FormField
                  label="User Name"
                  placeholder="Enter username"
                  value={generalForm.username}
                  onChange={(e) => handleGeneralFormChange("username", e.target.value)}
                />
                <FormField
                  label="Email"
                  placeholder="Enter email address"
                  type="email"
                  value={generalForm.email}
                  onChange={(e) => handleGeneralFormChange("email", e.target.value)}
                />
                <FormField
                  label="Phone Number"
                  placeholder="Enter phone number"
                  type="tel"
                  value={generalForm.phone}
                  onChange={(e) => handleGeneralFormChange("phone", e.target.value)}
                />
              </div>
              <div className="flex justify-end mt-4 sm:mt-6">
                <CustomButton
                  text={loading ? "Updating..." : "Update Profile"}
                  width="fit"
                  className="px-4 sm:px-6 2xl:text-2xl"
                  onClick={updateGeneralInfo}
                  disabled={loading}
                />
              </div>
            </>
          )}
          {activeTab === "password" && (
            <>
              <div className="grid grid-cols-1 gap-4">
                {/* Old Password - Full width */}
                <FormField
                  label="Old Password"
                  placeholder="Enter your current password"
                  type="password"
                  value={passwordForm.old_password}
                  onChange={(e) => handlePasswordFormChange("old_password", e.target.value)}
                />
                
                {/* New Password and Confirm Password in one line */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="New Password"
                    placeholder="Enter new password"
                    type="password"
                    value={passwordForm.new_password}
                    onChange={(e) => handlePasswordFormChange("new_password", e.target.value)}
                  />
                  <FormField
                    label="Confirm Password"
                    placeholder="Confirm new password"
                    type="password"
                    value={passwordForm.confirm_password}
                    onChange={(e) => handlePasswordFormChange("confirm_password", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4 sm:mt-6">
                <CustomButton
                  text={loading ? "Updating..." : "Change Password"}
                  width="full sm:w-1/3 lg:w-1/4"
                  className="px-4 sm:px-6 2xl:text-2xl"
                  onClick={updatePassword}
                  disabled={loading}
                />
              </div>
            </>
          )}
          {activeTab === "pin" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  label="Old Pin"
                  placeholder="Enter your current Pin"
                  type="password"
                  value={pinForm.old_pin}
                  onChange={(e) => handlePinFormChange("old_pin", e.target.value)}
                />
                <FormField
                  label="New Pin"
                  placeholder="Enter new Pin"
                  type="password"
                  value={pinForm.new_pin}
                  onChange={(e) => handlePinFormChange("new_pin", e.target.value)}
                />
                <FormField
                  label="Confirm Pin"
                  placeholder="Confirm new Pin"
                  type="password"
                  value={pinForm.confirm_pin}
                  onChange={(e) => handlePinFormChange("confirm_pin", e.target.value)}
                />
              </div>
              <div className="flex justify-end mt-4 sm:mt-6">
                <CustomButton
                  text={loading ? "Updating..." : "Change Pin"}
                  width="full sm:w-1/3 lg:w-1/4"
                  className="px-4 sm:px-6 2xl:text-2xl"
                  onClick={updatePin}
                  disabled={loading}
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
              className={`border rounded-md p-4 h-fit w-full cursor-pointer ${
                selectedAddress === addr.id
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
              className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center ${
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