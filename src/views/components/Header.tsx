"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
// import './header.css';
const menuItems = [
  { name: 'Home', href: '/', hasDropdown: false, color: 'text-blue-600' },
  {
    name: 'About us',
    href: '/about-us',
    hasDropdown: false,
  },
  {
    name: 'Products',
    href: '#',
    hasDropdown: true,
    dropdownItems: ['Proucts 01', 'Products 02', 'Products 03'],
  },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: ['Service 01', 'Service 02', 'Service Single'],
  },
  {
    name: 'FAQ',
    href: '/faq',
    hasDropdown: false,
  },
  {
    name: 'Request a Quote',
    href: '/request-a-quote',
    hasDropdown: false,
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
    hasDropdown: false,
  },
   {
    name: 'Careers',
    href: '/careers',
    hasDropdown: false,
  },
    {
    name: 'Sponsorship',
    href: '/sponsorship',
    hasDropdown: false,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className='max-w-screen-7xl mx-auto flex items-center justify-between px-4 relative'>
        <a href='./' className='flex items-center z-10'>
          <Image
            src='/images/logo.png'
            alt='Mecarvi'
            width={200}
            height={70}
            className='h-auto'
          />
        </a>
        <div className='hidden lg:flex items-center relative justify-center flex-1 z-10'>
          {!scrolled ? (
            <div className='bg-white relative navigation-ul rounded-b-[30px] rounded-t-[-50px] px-8 py-4 '>
              <ul className='flex space-x-8 font-medium'>
                {menuItems.map((item, index) => (
                  <li key={index} className='relative group'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                      <a
                        href={item.href}
                        className={`font-[500] text-lg hover:text-blue-600 text-[14px] ${
                          item.color || 'text-gray-800'
                        }`}
                        onClick={(e) => item.hasDropdown && e.preventDefault()}
                      >
                        {item.name}
                      </a>
                      {item.hasDropdown && (
                        <svg
                          fill='#000000'
                          height='18px'
                          width='18px'
                          version='1.1'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='-65.19 -65.19 537.82 537.82'
                          stroke='#000000'
                          strokeWidth='15.075168999999999'
                        >
                          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                          <g
                            id='SVGRepo_tracerCarrier'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            stroke='#CCCCCC'
                            strokeWidth='0.814874'
                          ></g>
                          <g id='SVGRepo_iconCarrier'>
                            {' '}
                            <polygon points='386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 '></polygon>{' '}
                          </g>
                        </svg>
                      )}
                    </div>
                    {item.hasDropdown && (
                      <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {item.dropdownItems?.map((dropItem, idx) => (
                          <a
                            key={idx}
                            href='#'
                            className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-[14px]'
                          >
                            {dropItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className='flex space-x-8 font-medium'>
              {menuItems.map((item, index) => (
                <li key={index} className='relative group'>
                  <div className='flex items-center cursor-pointer'>
                    <a
                      href={item.href}
                      className={`hover:text-blue-600 text-[14px] ${
                        item.color || 'text-gray-800'
                      }`}
                      onClick={(e) => item.hasDropdown && e.preventDefault()}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <svg
                        fill='#000000'
                        height='18px'
                        width='18px'
                        version='1.1'
                        id='Layer_1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='-65.19 -65.19 537.82 537.82'
                        stroke='#000000'
                        strokeWidth='15.075168999999999'
                      >
                        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          stroke='#CCCCCC'
                          strokeWidth='0.814874'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          {' '}
                          <polygon points='386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 '></polygon>{' '}
                        </g>
                      </svg>
                    )}
                  </div>

                  {item.hasDropdown && (
                    <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                      {item.dropdownItems?.map((dropItem, idx) => (
                        <a
                          key={idx}
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-[14px]'
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='flex items-center space-x-3 z-10'>
          <button className='hidden md:flex items-center bg-gradient-to-r from-white to-white text-blue-500 font-medium rounded-full text-sm px-6 py-3 hover:opacity-90 transition-all'>
            Try For Free
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none'
            aria-expanded={isMenuOpen}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <button className='hidden md:inline-flex items-center p-2 w-10 h-10 justify-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none'>
            <div className='grid grid-cols-2 gap-1'>
              <div className='w-2 h-2 bg-white rounded-sm'></div>
              <div className='w-2 h-2 bg-white rounded-sm'></div>
              <div className='w-2 h-2 bg-white rounded-sm'></div>
              <div className='w-2 h-2 bg-white rounded-sm'></div>
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='lg:hidden bg-white px-4 pb-4 shadow-lg relative z-10'>
          <ul className='flex flex-col space-y-2 font-medium'>
            {menuItems.map((item, index) => (
              <li key={index} className='relative text-[14px]'>
                <div className='flex flex-col'>
                  <div className='flex items-center justify-between py-2'>
                    <a
                      href={item.href}
                      className={`${item.color || 'text-gray-800 text-[14px]'}`}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <button
                        onClick={() => {
                          const element = document.getElementById(
                            `dropdown-${index}`
                          );
                          if (element) {
                            element.classList.toggle('hidden');
                          }
                        }}
                        className='flex items-center'
                      >
                        <svg
                          fill='#000000'
                          height='18px'
                          width='18px'
                          version='1.1'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='-65.19 -65.19 537.82 537.82'
                          stroke='#000000'
                          strokeWidth='15.075168999999999'
                        >
                          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                          <g
                            id='SVGRepo_tracerCarrier'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            stroke='#CCCCCC'
                            strokeWidth='0.814874'
                          ></g>
                          <g id='SVGRepo_iconCarrier'>
                            {' '}
                            <polygon points='386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 '></polygon>{' '}
                          </g>
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && (
                    <div
                      id={`dropdown-${index}`}
                      className='pl-4 py-2 space-y-2 hidden'
                    >
                      {item.dropdownItems?.map((dropItem, idx) => (
                        <a
                          key={idx}
                          href='#'
                          className='block py-1 text-sm text-gray-700 text-[14px]'
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
            <li>
              <button className='w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-full text-sm px-6 py-3 mt-2 flex items-center justify-center'>
                Get Started{' '}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
