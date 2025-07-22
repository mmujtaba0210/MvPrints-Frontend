import React, { useState } from "react";

const TicketCard = ({
  status = "Open",
  subject,
  date,
  id,
  messages = [],
  onResolve,
  onReply,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (e) => {
    e.stopPropagation();
    if (replyMessage.trim()) {
      onReply(id, replyMessage);
      setReplyMessage("");
    }
  };

  return (
    <div className="w-screen text-white font-sans">
      <div className="flex ">
        {/* Left card */}
        <div
          className="bg-gradient-to-r from-[#0095ff] to-[#000B5B] w-[18em] p-4 rounded-l-lg h-[12em] 2xl:h-[16em] md:w-[20rem] relative shadow-[0_1px_4px_rgba(0,0,0,0.35)] cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="uppercase mt-2">
            <div className="mb-1">
              <span className="text-xs font-bold text-white 2xl:text-2xl">
                Title
              </span>
              <h2 className="text-white text-sm m-0 2xl:text-2xl">{subject}</h2>
            </div>

            <div className="mb-4">
              <span className="text-xs font-bold text-white 2xl:text-2xl">
                date
              </span>
              <h2 className="text-white text-sm m-0 2xl:text-2xl">{date}</h2>
            </div>

            <div className="flex">
              <span
                className={`inline-block px-3 py-0.5 rounded text-sm font-semibold ${
                  status === "Resolved"
                    ? "bg-green-100 text-green-600"
                    : status === "Open"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 2xl:text-2xl text-gray-500"
                }`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="w-[9em] md:w-[8em] h-[12em] p-4 bg-white border-l-2 border-dashed border-[#000B5B] 2xl:h-[16em] rounded-r-lg relative shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
          {/* Seat number */}
          <div className="text-center uppercase mt-4">
            <span className="text-[#333333] 2xl:text-2xl font-bold text-sm block">
              Ticket No.
            </span>
            <h3 className="text-[#e84c3d] text-[2.5em] m-0 2xl:text-2xl">
              {id}
            </h3>
          </div>

          {/* Barcode */}
          <div className="h-8 w-0 ml-2 mt-5 shadow-[1px_0_0_1px_#343434,5px_0_0_1px_#343434,10px_0_0_1px_#343434,11px_0_0_1px_#343434,15px_0_0_1px_#343434,18px_0_0_1px_#343434,22px_0_0_1px_#343434,23px_0_0_1px_#343434,26px_0_0_1px_#343434,30px_0_0_1px_#343434,35px_0_0_1px_#343434,37px_0_0_1px_#343434,41px_0_0_1px_#343434,44px_0_0_1px_#343434,47px_0_0_1px_#343434,51px_0_0_1px_#343434,56px_0_0_1px_#343434,59px_0_0_1px_#343434,64px_0_0_1px_#343434,68px_0_0_1px_#343434,72px_0_0_1px_#343434,74px_0_0_1px_#343434,77px_0_0_1px_#343434,81px_0_0_1px_#343434]"></div>

          {/* Dotted cut circles */}
          <div className="absolute top-[-0.4em] left-[-0.5em] w-[0.9em] h-[0.9em] bg-white rounded-full inset-shadow-[0_-4px_4px_rgba(0,0,0,0.15)]"></div>
          <div className="absolute bottom-[-0.4em] left-[-0.5em] w-[0.9em] h-[0.9em] bg-white rounded-full inset-shadow-[0_4px_4px_rgba(0,0,0,0.15)]"></div>
        </div>
      </div>

      {/* Expandable message section */}
      {isExpanded && (
        <div className="mt-4 bg-white rounded-lg p-4 shadow-[0_1px_4px_rgba(0,0,0,0.35)] w-[22.5em]">
          <div className="space-y-4 mb-4">
            {messages.map((msg, i) => (
              <div key={i} className="text-sm text-gray-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-[#0096ff]">{msg.from}</span>
                  <span className="text-xs text-gray-400">{msg.date}</span>
                </div>
                <p className="text-gray-600">{msg.text}</p>
              </div>
            ))}
          </div>

          {status !== "Resolved" && (
            <div className="space-y-3">
              {/* Textarea */}
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[100px] resize-none focus:outline-none focus:border-[#0096ff]"
                placeholder="Type your reply..."
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  className="w-full sm:flex-1 bg-[#0096ff] text-white px-4  rounded font-semibold hover:bg-[#fa09a7] transition-all duration-300"
                  onClick={handleReply}
                >
                  Send Reply
                </button>
                <button
                  className="w-full sm:flex-1 bg-[#0096ff] text-white px-4 rounded font-semibold hover:bg-[#fa09a7] transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    onResolve(id);
                  }}
                >
                  Mark as Resolved
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TicketCard;
