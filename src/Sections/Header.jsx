import logo from '../assets/Imgs/logo.png'
import NavBar from '../components/NavBar';
import Btn01 from '../components/Btn01';
import { useState, useEffect } from 'react';
// ----------------------------------------
const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    };
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    // The Start Of The Header Section
    <header
      className={`${
        scrolled ? "bg-yellow-200" : ""
      } fixed top-0 left-0 w-full h-[40px] flex justify-between items-center z-10 py-6 px-7 md:py-10 md:px-14`}
    >
      {/* Logo */}
      <div className="logo flex items-center gap-x-2">
        <img className="w-[32px] md:w-[40px]" src={logo} alt="Logo" />
        <button className="text-2xl md:text-3xl font-bold">COMU</button>
      </div>
      {/* Logo End */}
      {/* ------------------------------------------------ -----------------*/}
      {/* NavBar */}
      <nav className="">
        <NavBar />
      </nav>
      {/* NavBar End */}
      {/* ------------------- */}
      {/* Desktop Button  */}
      <div className="max-sm:hidden">
        <Btn01 title="Get Started" />
      </div>
      {/* Desktop Button Ens  */}
      {/* --------------------------------- */}
    </header>
    // Header End
    // -------------------------------------------------------------------------------------------
  );
}
// ----------------------
// ----------------------
export default Header