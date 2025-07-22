import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiClock,
  FiCreditCard,
  FiDollarSign,
  FiFacebook,
  FiFileText,
  FiGift,
  FiHelpCircle,
  FiHome,
  FiInfo,
  FiLifeBuoy,
  FiList,
  FiLogOut,
  FiMessageSquare,
  FiRotateCcw,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiTwitter,
  FiUser,
} from "react-icons/fi";
import CustomButton from "@/components/CustomButton";
import { useAuth } from "@/context/AuthContext";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [showLogoutDialog, setShowLogoutDialog] = React.useState(false);
  const { logout } = useAuth();

  const userData = {
    user: {
      name: "Andri Jokall",
      avatar: "", // Removed avatar for testing initials
    },
  };

  const tabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "FiHome",
      path: "/dashboard",
    },
    {
      id: "account",
      label: "My Account",
      icon: "FiUser",
      path: "/dashboard/account",
    },
    {
      id: "payment",
      label: "Payment Methods",
      icon: "FiCreditCard",
      path: "/dashboard/payment",
    },
    {
      id: "membership",
      label: "Membership",
      icon: "FiStar",
      path: "/dashboard/membership",
    },
    {
      id: "quotations",
      label: "Quotations",
      icon: "FiFileText",
      path: "/dashboard/quotations",
    },
    {
      id: "orders",
      label: "Orders",
      icon: "FiShoppingBag",
      path: "/dashboard/orders",
    },
    {
      id: "giftCards",
      label: "Gift Cards Orders",
      icon: "FiGift",
      path: "/dashboard/gift-cards",
    },
    {
      id: "trackOrder",
      label: "Track Order",
      icon: "FiTruck",
      path: "/dashboard/track-order",
    },
    {
      id: "orderReturns",
      label: "Order Returns",
      icon: "FiRotateCcw",
      path: "/dashboard/order-returns",
    },
    {
      id: "orderDisputes",
      label: "Order Disputes",
      icon: "FiAlertTriangle",
      path: "/dashboard/order-disputes",
    },
    {
      id: "wallet",
      label: "Wallet",
      icon: "FiDollarSign",
      path: "/dashboard/wallet",
    },
    {
      id: "affiliateInfo",
      label: "Affiliate Information",
      icon: "FiInfo",
      path: "/dashboard/affiliate-info",
    },
    {
      id: "productReviews",
      label: "Product Reviews",
      icon: "FiHelpCircle",
      path: "/dashboard/product-reviews",
    },
    {
      id: "messages",
      label: "Messages",
      icon: "FiMessageSquare",
      path: "/dashboard/messages",
    },
    {
      id: "supportTickets",
      label: "Support Tickets",
      icon: "FiLifeBuoy",
      path: "/dashboard/support-tickets",
    },
    { id: "logout", label: "Logout", icon: "FiLogOut", path: null },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = async () => {
    const response = await logout();
    setShowLogoutDialog(false);
    router.push("/");
  };

  const handleTabClick = (tab) => {
    if (tab.id === "logout") {
      setShowLogoutDialog(true);
    } else if (tab.path) {
      router.push(tab.path);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mx-8 md:mx-0">
      {/* Sidebar */}
      <div className=" md:w-64 2xl:w-88 flex flex-col justify-start items-center md:ml-4 my-4">
        <div className="w-full mb-4 h-fit bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl px-1.5">
          <div className="flex flex-col items-center px-2 py-6 justify-between gap-2">
            <div className="relative rounded-full  h-[110px] border-4  w-[110px] border-[#0096ff] flex items-center justify-center">
              {userData.user.avatar ? (
                <div className="relative w-full h-full rounded-full">
                  <Image
                    src="/images/dashboard/infobg.jpg"
                    alt="User avatar"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-[#ff00a7] flex items-center justify-center">
                  <span className="text-white text-4xl font-bold uppercase">
                    {getInitials(userData.user.name)}
                  </span>
                </div>
              )}
            </div>
            <div className="text-xl font-bold 2xl:text-3xl  text-center px-2 break-words">
              {userData.user.name}
            </div>
          </div>
          <ul className="w-[85%] 2xl:w-[95%]  mx-auto">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`px-4 py-2 cursor-pointer 2xl:text-2xl  hover:bg-[#0096ff] hover:text-white transition-colors ${
                  router.pathname === tab.path
                    ? "bg-[#0096ff] text-white rounded-md"
                    : "text-gray-700 border-b border-[#cec7c7]"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <div className="flex items-center 2xl:text-2xl  gap-2">
                  {tab.icon === "FiHome" && <FiHome />}
                  {tab.icon === "FiUser" && <FiUser />}
                  {tab.icon === "FiCreditCard" && <FiCreditCard />}
                  {tab.icon === "FiStar" && <FiStar />}
                  {tab.icon === "FiFileText" && <FiFileText />}
                  {tab.icon === "FiShoppingBag" && <FiShoppingBag />}
                  {tab.icon === "FiGift" && <FiGift />}
                  {tab.icon === "FiTruck" && <FiTruck />}
                  {tab.icon === "FiRotateCcw" && <FiRotateCcw />}
                  {tab.icon === "FiAlertTriangle" && <FiAlertTriangle />}
                  {tab.icon === "FiDollarSign" && <FiDollarSign />}
                  {tab.icon === "FiList" && <FiList />}
                  {tab.icon === "FiInfo" && <FiInfo />}
                  {tab.icon === "FiArrowRight" && <FiArrowRight />}
                  {tab.icon === "FiClock" && <FiClock />}
                  {tab.icon === "FiHelpCircle" && <FiHelpCircle />}
                  {tab.icon === "FiMessageSquare" && <FiMessageSquare />}
                  {tab.icon === "FiLifeBuoy" && <FiLifeBuoy />}
                  {tab.icon === "FiLogOut" && <FiLogOut />}
                  <span>{tab.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Referral Section */}
        <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-5 flex flex-col items-center w-full">
          <div className="w-full text-left">
            <div className="text-[#0096ff] text-lg font-bold mb-1 border-b border-[#cec7c7] 2xl:text-3xl ">
              REFERRAL
            </div>
          </div>
          <div className="text-center w-full">
            <div className="text-gray-700 mb-2 2xl:text-2xl ">Share Via</div>
            <div className="flex justify-center gap-4 text-2xl mb-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 2xl:text-2xl  hover:text-blue-800"
              >
                <FiFacebook />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 2xl:text-2xl  hover:text-green-700"
              >
                <svg
                  width="28"
                  height="28"
                  className="2xl:text-2xl "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.3.13 12 .13c3.17 0 6.155 1.233 8.413 3.488a11.82 11.82 0 0 1 3.484 8.409c-.003 6.627-5.373 11.987-12 11.987a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.593 5.448 0 9.886-4.434 9.889-9.877.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.877a9.822 9.822 0 0 0 1.599 5.354l-.999 3.648 3.635-.953zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FiTwitter />
              </a>
            </div>
            <input
              type="text"
              value="mecarviprints.com/register/a"
              readOnly
              className="border border-gray-300 rounded w-[70%] md:w-full text-center py-2 mb-3 text-sm 2xl:text-2xl "
            />
            <section className=" flex flex-col justify-center  items-center mx-auto w-full">
              <button className="w-[70%] md:w-full bg-[#0096ff] hover:bg-[#0095ffc7] text-white 2xl:text-2xl  font-bold text-sm py-2 rounded mb-2">
                COPY LINK
              </button>
              <button className="w-[70%] md:w-full bg-[#00cfff] hover:bg-[#00b8e6] text-white 2xl:text-2xl  font-bold text-sm py-2 rounded">
                Referral Statistics
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 w-full overflow-x-auto">
        <div>{children}</div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 bg-[#0000002a] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowLogoutDialog(false)}
                className="px-4 py-2 text-gray-600 hover:text-[#fa09a7] transition-all duration-280 cursor-pointer"
              >
                Cancel
              </button>
              <CustomButton text="Logout" width="28%" onClick={handleLogout} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
