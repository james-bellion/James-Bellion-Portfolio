
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
//import { logo, menu, close } from "../assets";
import { jameslogo, menu, close } from '../assets'

// //Styles for nav
// // nav calss name a dynamic template string using a special utility class from the styles.js
// // paddingX gives padding and on smaller devices abit more padding
// // w-full full width
// // flex flex property
// // items-center 
// // py-5 
// // fixed top-0 to make it stay on the top
// // z-20 to make it above other elements 
// // bg-primary for color

// //Styles for div in Nav bar
// //max-w-7xl lots of width in our nav bar
// // class info got from tailwind documentation can type/ search class using the magnified glass to see what it does

// // Link / sending to the top of the page

// // reactor-dom link so can give an on click property, set a callback function, set active to be = to nothing to keep track of 
// // where we are on the page. create that as a useState
// // window.scrollTo(0,0) take to top of the page

// //note  back from 30min check nav bar styling?
// //note work not working as clickable on mobile
// // mobile toggel not working

// //div for mobile navigation as no space for links on mobile
// // onclick to change the state to togel the hamburger icon when on small screens
// //bellow show the links. Use a dynamic string if its not toggled then we want to show hidden or else show


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("0");
            window.scrollTo(0, 0);
          }}
        >
          <img src={jameslogo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            James Bellion &nbsp;
            <span className='sm:block hidden'> | FullStack Dev</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;