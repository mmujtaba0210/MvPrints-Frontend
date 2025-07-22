import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

const sellers = [
  {
    id: 1,
    name: "Darrell Steward",
    // avatar: "/images/avatars/avatar1.png", // Assuming you have avatar images
    lastMessage: "What's going on?",
    lastActive: "Online",
    unread: 0,
    online: true,
  },
  {
    id: 2,
    name: "Theresa Webb",
    // avatar: "/images/avatars/avatar2.png", // Assuming you have avatar images
    lastMessage: "I'm thinking of using a combination of blues and grays.",
    lastActive: "01:14 PM",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Cameron Williamson",
    // avatar: "/images/avatars/avatar3.png", // Assuming you have avatar images
    lastMessage: "Hey, How are you?",
    lastActive: "2 min",
    unread: 15,
    online: true,
  },
  {
    id: 4,
    name: "Esther Howard",
    // avatar: "/images/avatars/avatar4.png", // Assuming you have avatar images
    lastMessage: "Thanks for reply",
    lastActive: "7:30 PM",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Jane Cooper",
    // avatar: "/images/avatars/avatar5.png", // Assuming you have avatar images
    lastMessage: "Hey, What's up?",
    lastActive: "1:10 PM",
    unread: 0,
    online: true,
  },
  {
    id: 6,
    name: "Ronald Richards",
    // avatar: "/images/avatars/avatar6.png", // Assuming you have avatar images
    lastMessage: "I'm ready",
    lastActive: "13:10 PM",
    unread: 0,
    online: true,
  },
  {
    id: 7,
    name: "Darlene Robertson",
    // avatar: "/images/avatars/avatar7.png", // Assuming you have avatar images
    lastMessage: "Hey, How are you?",
    lastActive: "1:30 PM",
    unread: 0,
    online: true,
  },
  {
    id: 8,
    name: "Floyd Miles",
    // avatar: "/images/avatars/avatar8.png", // Assuming you have avatar images
    lastMessage: "Are you sure?",
    lastActive: "5:14 PM",
    unread: 0,
    online: true,
  },
  {
    id: 9,
    name: "Annette Black",
    // avatar: "/images/avatars/avatar9.png", // Assuming you have avatar images
    lastMessage: "...",
    lastActive: "...",
    unread: 0,
    online: false,
  },
];

const users = [];

const staticMessages = [
  {
    from: "seller",
    text: "Hey, I'm looking to redesign my website. Can you help me?",
    time: "01:14 PM",
  },
  {
    from: "user",
    text: "Absolutely! I'd be happy to assist you.",
    time: "12:14 PM",
  },
  {
    from: "user",
    text: "What kind of design aesthetic are you aiming for?",
    time: "12:14 PM",
  },
  {
    from: "seller",
    text: "I want a clean and modern look with a focus on user experience.",
    time: "01:14 PM",
  },
  {
    from: "user",
    text: "Great! Do you have any specific color schemes in mind?",
    time: "12:14 PM",
  },
  {
    from: "seller",
    text: "I'm thinking of using a combination of blues and grays.",
    time: "01:14 PM",
  },
];

const MessagesPanel = () => {
  const [tab, setTab] = useState("Chats"); // Changed default tab to Chats
  const [selectedUser, setSelectedUser] = useState(sellers[0]); // Select the first user by default
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="grid md:grid-cols-[320px_1fr] 2xl:grid-cols-[450px_1fr] grid-cols-1 h-max rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] overflow-hidden">
      {/* Sidebar */}
      <div className="bg-white flex flex-col h-full">
        {/* Search */}
        <div className="p-4">
          <div className="flex items-center border border-[#e5e7eb] rounded-lg px-3 py-2">
            <FiSearch className="text-gray-400 mr-2 2xl:text-2xl" />
            <input
              type="text"
              placeholder="Search here.."
              className="flex-1 2xl:text-2xl text-sm focus:outline-none"
              disabled
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#e5e7eb] px-4 py-4 h-max overflow-y-auto">
          {["Chats", "Contacts"].map((label) => (
            <button
              key={label}
              className={`flex-1 2xl:text-2xl py-2 font-semibold text-sm border-b-2 ${
                tab === label
                  ? "border-[#0095ff] text-[#0095ff]"
                  : "border-transparent text-gray-500 hover:border-gray-300"
              }`}
              onClick={() => setTab(label)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Recent Chats Header */}
        <div className="flex items-center justify-between px-4 mb-2">
          <h3 className="text-sm font-semibold text-gray-600 2xl:text-2xl">
            Recent chats
          </h3>
          <button className="text-[#0095ff] hover:text-[#007acc]">
            <HiOutlinePlus className="text-lg" />
          </button>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto px-4">
          {tab === "Chats" && sellers.length > 0 ? (
            sellers.map((s) => (
              <div
                key={s.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  selectedUser?.id === s.id
                    ? "bg-[#f0f0f0]"
                    : "hover:bg-[#f5f5f5]"
                }`}
                onClick={() => setSelectedUser(s)}
              >
                <div className="relative shrink-0">
                  {s?.avatar ? (
                    <img
                      src={s.avatar}
                      alt="Client Avatar"
                      className="w-10 h-10 2xl:size-[6rem] rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#ff00a7] flex items-center justify-center">
                      <span className="text-base font-bold text-white uppercase 2xl:text-xl">
                        {s?.name ? getInitials(s.name) : ""}
                      </span>
                    </div>
                  )}
                  {s.online && (
                    <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-1 ring-white"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-800 flex justify-between items-center 2xl:text-2xl">
                    {s.name}
                    <span className="text-xs 2xl:text-xl text-gray-400 ml-1">
                      {s.lastActive}
                    </span>
                  </div>
                  <div className="text-xs 2xl:text-xl text-gray-500 truncate">
                    {s.lastMessage}
                  </div>
                </div>

                {s.unread > 0 && (
                  <span className="bg-[#0095ff] text-white text-[10px] rounded-full px-1.5 py-0.5 2xl:text-xl">
                    {s.unread}
                  </span>
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-400 2xl:text-2xl text-center mt-8">
              No users found.
            </div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col h-full bg-[#f5f7fa]">
        {/* Header */}
        <div className="flex items-center border-b border-[#e5e7eb] px-4 py-3 bg-white">
          {selectedUser && (
            <div className="flex items-center">
              <div className="relative mr-3">
                {selectedUser?.avatar ? (
                  <img
                    src={selectedUser.avatar}
                    alt="Client Avatar"
                    className="w-10 h-10 2xl:size-[4rem] rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#ff00a7] flex items-center justify-center">
                    <span className="text-base font-bold 2xl:text-2xl text-white uppercase">
                      {getInitials(selectedUser.name)}
                    </span>
                  </div>
                )}
                {selectedUser?.online && (
                  <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-1 ring-white"></span>
                )}
              </div>
              <div>
                <div className="font-semibold 2xl:text-2xl text-gray-800 text-sm">
                  {selectedUser.name}
                </div>
                <div className="text-xs text-gray-500 2xl:text-xl">
                  {selectedUser.online ? "Online" : selectedUser.lastActive}
                </div>
              </div>
            </div>
          )}
          <div className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 16v-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="8" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {staticMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] 2xl:max-w-[32rem] 2xl:text-2xl md:max-w-xs px-4 py-2 rounded-xl text-sm ${
                  msg.from === "user"
                    ? "bg-[#0095ff] text-white"
                    : "bg-white text-gray-800 border border-[#e5e7eb]"
                }`}
              >
                {msg.text}
                <div
                  className={`text-[10px] 2xl:text-2xl text-gray-300 mt-1 ${
                    msg.from === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-[#e5e7eb] px-4 py-3 bg-white">
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-[#0095ff]">
              <HiOutlinePlus className="text-xl" />
            </button>
            <input
              type="text"
              className="flex-1 border 2xl:text-2xl border-[#e5e7eb] rounded-lg px-3 py-2 text-sm focus:outline-none"
              placeholder="Type message here..."
              disabled
            />
            <button
              className="bg-[#0095ff] p-2 rounded-full text-white hover:bg-[#007acc] transition-all 2xl:text-2xl duration-200"
              disabled
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 17L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 13L12 19L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPanel;
