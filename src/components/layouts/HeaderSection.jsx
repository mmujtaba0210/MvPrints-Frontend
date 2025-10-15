"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { BiHeart } from "react-icons/bi";
import CartButton from "../add-to-cart/components/CartButton";
import { useCart } from "../add-to-cart/components/CartContext";
import Link from "next/link";
import MegaMenuDropdown from "../MegaMenuDropdown";

const menuItems = [
  { name: "Home", href: "/", color: "text-blue-500" },
  { name: "Our Products", dropdown: <MegaMenuDropdown /> },
];

const ACTIVE_MENU_KEY = "activeMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

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
      className={`fixed w-screen z-40 top-0 left-0 transition-all duration-300 ${
        scrolled ? "shadow-sm bg-white py-2" : "bg-transparent "
      }`}
    >
      <div className="max-w-screen-7xl mx-auto flex items-center justify-between px-4 md:px-10 relative mt-2 md:mt-0">
        {/* Logo */}
        <Link href="/" className="flex items-center z-20">
          <Image
            src="/logo.png"
            alt="Mecarvi"
            width={200}
            height={50}
            className="h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="bg-white relative  rounded-b-[30px] rounded-t-[-50px] px-8 py-6 2xl:py-12 lg:px-12 2xl:px-1 rounded-outside">
          <ul className="flex space-x-2 font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href={item.href}
                  onClick={() => handleMenuClick(item.name)}
                  className={`font-[500] px-4 py-2 hover:text-white transition-all duration-500 rounded-full hover:bg-[#FD02A9] text-[14px] 2xl:text-3xl cursor-pointer ${
                    item.color || "text-gray-800"
                  } ${
                    activeMenu === item.name ? "text-white bg-[#FD02A9]" : ""
                  }`}
                >
                  {item.name}
                </a>

                {/* Dropdown on hover */}
                {item.dropdown && hoveredMenu === item.name && (
                  <div>{item.dropdown}</div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <section className="flex">
          <div className="border-r-1 py-3 px-5">
            <Link href="/dashboard">
              <FaUser className="text-2xl cursor-pointer  hover:cursor-pointer rounded-full  hover:scale-110 transition" />
            </Link>
          </div>
          <div className="flex p-3 gap-8">
            <CartButton />
            <Link href="/wishlist">
              <BiHeart className="text-2xl cursor-pointer  hover:cursor-pointer rounded-full  hover:scale-110 transition" />
            </Link>
            <Link href="/compare">
              <GoArrowSwitch className="text-2xl cursor-pointer  hover:cursor-pointer rounded-full  hover:scale-110 transition" />
            </Link>
          </div>
        </section>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              scrolled ? "text-black" : "text-white"
            } focus:outline-none`}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-[9998] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <X size={28} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          <div className="p-6 flex flex-col space-y-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`text-xl text-gray-800 px-4 hover:text-blue-600 transition-all duration-200 ${
                  activeMenu === item.name
                    ? "text-white bg-[#FD02A9] w-max rounded-full"
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
