"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaCartPlus, FaMemory, FaShoppingCart, FaUser } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { BiMemoryCard } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

const menuItems = [
  { name: "Home", href: "/", color: "text-blue-500" },
  { name: "Services", href: "/services" },
  { name: "Our Products", href: "/portfolio" },
  { name: "About us", href: "/about-us" },
  { name: "Products", href: "#" },
];

const ACTIVE_MENU_KEY = "activeMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Load active menu from localStorage
    const storedActive = localStorage.getItem(ACTIVE_MENU_KEY);
    if (storedActive) setActiveMenu(storedActive);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (name) => {
    setActiveMenu(name);
    localStorage.setItem(ACTIVE_MENU_KEY, name);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-screen z-[9999] top-0 left-0 transition-all duration-300 ${
        scrolled ? "shadow-sm 2xl:py-12 bg-white py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-7xl mx-auto flex items-center justify-between px-4 md:px-10 relative mt-2 md:mt-0">
        {/* Logo */}
        <a href="./" className="flex items-center z-20">
          <Image
            src="/logo.png"
            alt="Mecarvi"
            width={200}
            height={50}
            className="h-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center relative justify-center flex-1 z-10">
          {!scrolled ? (
            <div className="bg-white relative  rounded-b-[30px] rounded-t-[-50px] px-8 py-6 2xl:py-12 lg:px-12 2xl:px-18 rounded-outside">
              <ul className="flex space-x-2 font-medium">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a
                      href={item.href}
                      onClick={() => handleMenuClick(item.name)}
                      className={`font-[500] px-4 text-[14px] 2xl:text-3xl  ${
                        item.color || "text-gray-800"
                      } ${
                        activeMenu === item.name
                          ? " text-white bg-[#FD02A9] transition-all duration-500 rounded-full py-2"
                          : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="flex space-x-8 font-medium">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.href}
                    onClick={() => handleMenuClick(item.name)}
                    className={`font-[500] px-4 text-[14px] 2xl:text-3xl ${
                      item.color || "text-gray-800"
                    } ${
                      activeMenu === item.name
                        ? "text-white bg-[#FD02A9] transition-all duration-500 rounded-full py-2"
                        : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Call to Action (Desktop) */}
        <section className="flex">
          <div className="border-r-1 py-3 px-5">
            <FaUser className=" text-2xl cursor-pointer" />
          </div>
          <div className="flex p-3 gap-8">
            <FiShoppingCart className="text-2xl cursor-pointer" />
            <BiMemoryCard className="text-2xl cursor-pointer" />

            <GoArrowSwitch className=" text-2xl cursor-pointer" />
          </div>
        </section>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-20">
          {!scrolled ? (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white  focus:outline-none"
            >
              <Menu size={28} />
            </button>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black  focus:outline-none"
            >
              <Menu size={28} />
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-[9998] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <X size={28} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          <div className="p-6 flex flex-col space-y-6 ">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`text-xl text-gray-800 px-4 hover:text-blue-600 transition-all duration-200 ${
                  activeMenu === item.name
                    ? "text-white bg-[#FD02A9]  w-max rounded-full "
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 bg-gradient-to-r from-[#FD02A9] to-[#7E03C3] text-white rounded-xl px-6 py-3 text-base"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
