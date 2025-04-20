import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { home, menu, close } from "../assets";

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

      // Get all sections
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      // Find the section that's currently in view
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      // Update active state
      if (currentSection) {
        const activeLink = navLinks.find(link => link.id === currentSection.id);
        if (activeLink) {
          setActive(activeLink.title);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (nav) => {
    setActive(nav.title);
    const element = document.getElementById(nav.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary dark:bg-dark-primary" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className='w-full flex justify-around items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={home} alt='logo' className='w-9 h-9 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-60'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white dark:text-dark-white"
                  : "text-secondary dark:text-dark-secondary"
              } hover:text-white dark:hover:text-dark-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => handleClick(nav)}
            >
              <a>{nav.title}</a>
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
            } p-6 black-gradient dark:dark-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "text-white dark:text-dark-white"
                      : "text-secondary dark:text-dark-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleClick(nav);
                  }}
                >
                  <a>{nav.title}</a>
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