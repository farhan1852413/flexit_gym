import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Plans', path: '/plans' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'Careers', path: '/careers' },
    { name: 'Policies', path: '/policies' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 h-20 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-zinc-800' : 'bg-black/60 backdrop-blur-md border-b border-red-600/20'}`}>
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-8 h-full">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <img
            alt="FlexIt Logo"
            className="h-11 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKhgTcSdPds81LWp54JG3WgmLoJnsSYGiCM-bxeS052QoJ0bfExhP6LVr0A5kvs7N_7rTKF9uaianBXNB7yXGsWn7o9FyWGEDD8X8dnoLfua6nrA5IQSovx2Khqdgr1ds6s_i_M0Mwr4sCmMfKhpvvKYDMCMlbToRGJ45qWBhqr8vWaHT30CYCsT9oI9V1MaEnOI_j-C_FAJcXgiy-KfJysKUXA0ofIdmDNYdyyySnN-_BWpG9q-8r9X8FaPR-Vxi9SfuaU8g08DlR"
          />
          <span
            className="text-red-600 uppercase tracking-widest transition-all duration-300 group-hover:text-red-500"
            style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '22px' }}
          >
            FLEXIT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-lexend font-bold uppercase tracking-widest text-xs transition-all duration-200 relative pb-1 ${
                  isActive
                    ? 'text-red-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-red-600'
                    : 'text-zinc-300 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            to="/plans"
            className="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 font-lexend font-black text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] active:scale-95"
          >
            Join Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-red-500 transition-colors p-1"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-black/95 backdrop-blur-lg border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `w-full text-center font-lexend font-bold uppercase tracking-widest text-sm py-2 transition-colors duration-200 ${
                  isActive ? 'text-red-600' : 'text-zinc-300 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/plans"
            onClick={closeMenu}
            className="w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 font-lexend font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}