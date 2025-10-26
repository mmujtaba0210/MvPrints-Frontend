"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { BiHeart } from "react-icons/bi";
import CartButton from "../add-to-cart/components/CartButton";
import { useCart } from "../add-to-cart/components/CartContext";
import Link from "next/link";
import MegaMenuDropdown from "../MegaMenuDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchMegaMenu } from "@/redux/slices/MegaMenu/fetchMegaMenuSlice";

const ACTIVE_MENU_KEY = "activeMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { setIsOpen } = useCart();

  const dispatch = useDispatch();
  const {
    data: megaMenuData,
    loading,
    error,
  } = useSelector((state) => state.megaMenu);

  useEffect(() => {
    dispatch(fetchMegaMenu());
    console.log(megaMenuData);
  }, [dispatch]);

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

  const menuItems = [
    { name: "Home", href: "/", color: "text-blue-500" },
    {
      name: "Our Products",
      dropdown: (
        <MegaMenuDropdown
          productsData={megaMenuData}
          loading={loading}
          error={error}
        />
      ),
    },
  ];

  return (
    <nav
      className={`fixed w-screen z-40 top-0 left-0 transition-all duration-300 ${
        scrolled ? "shadow-sm bg-white py-2" : "bg-transparent"
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
        <div className="bg-white relative rounded-b-[30px] px-8 py-6 2xl:py-12 lg:px-12">
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

                {/* Dropdown */}
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
              <FaUser className="text-2xl cursor-pointer hover:scale-110 transition" />
            </Link>
          </div>
          <div className="flex p-3 gap-8">
            <CartButton />
            <Link href="/wishlist">
              <BiHeart className="text-2xl cursor-pointer hover:scale-110 transition" />
            </Link>
            <Link href="/compare">
              <GoArrowSwitch className="text-2xl cursor-pointer hover:scale-110 transition" />
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
}
