import { useState, useRef } from 'react';
import menu from '../assets/Imgs/menu.png'
import close from '../assets/Imgs/close.png'
import Btn01 from './Btn01';
// ------------------------------------------
const NavBar = () => {
  const [navToggle, setnavToggle] =  useState(false);
  const [active, setActive] = useState(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);

const handleLink = (e) => {
  setActive(e.target)
} 
// --------------------------------------------------
  // ------------------------------------------------
  return (
    <>
      {/* // NavBar   */}
      {/* // Menu Toggle div  */}
      <div>
        <img
          className="w-[35px] cursor-pointer md:hidden"
          src={navToggle ? close : menu}
          alt="Menu"
          onClick={() => setnavToggle((prev) => !prev)}
        />
      </div>
      {/* // Menu Toggle div end  */}
      {/* ------------------------------------------------- */}
      {/* // Phone Nav Menu Start */}
      <div className="md:hidden">
        <ul
          className={`${
            navToggle ? "" : "toggled"
          } navMenuPhone absolute top-[60px] right-1 bg-[#fef9ec] shadow-md shadow-[#fef9ec] border-2 border-solid border-black w-[200px] text-center min-h-[200px] py-5 rounded-md transition-all duration-300`}
        >
          <li className="navItemPhone">
            <button className="navLinkPhone">Home</button>
          </li>
          <li className="navItemPhone">
            <button className="navLinkPhone">About</button>
          </li>
          <li className="navItemPhone">
            <button className="navLinkPhone">Auth Page</button>
          </li>
          <li className="navItemPhone">
            <button className="navLinkPhone">Features</button>
          </li>
          <li className="navItemPhone">
            <button className="navLinkPhone">Pricings</button>
          </li>
          <li className="py-4  ">
            <Btn01 title="Get Started" />
          </li>
        </ul>
      </div>
      {/* // Phone Nav Menu End */}
      {/* -----------------------------------------------------------------------------------*/}
      {/* Desktop Nav Menu Start */}
      <div className="max-sm:hidden">
        <ul className="flex items-center gap-x-10">
          <li className="navItem">
            <button
              onClick={handleLink}
              className={`${
                active === link1Ref.current ? "active" : ""
              }  navLink`}
              ref={link1Ref}
            >
              Home
            </button>
          </li>
          <li className="navItem">
            <button
              onClick={handleLink}
              className={`${
                active === link2Ref.current ? "active" : ""
              } navLink`}
              ref={link2Ref}
            >
              About
            </button>
          </li>
          <li className="navItem">
            <button
              onClick={handleLink}
              className={`${
                active === link3Ref.current ? "active" : ""
              } navLink`}
              ref={link3Ref}
            >
              Auth Page
            </button>
          </li>
          <li className="navItem">
            <button
              onClick={handleLink}
              className={`${
                active === link4Ref.current ? "active" : ""
              } navLink`}
              ref={link4Ref}
            >
              Features
            </button>
          </li>
          <li className="navItem">
            <button
              onClick={handleLink}
              className={`${
                active === link5Ref.current ? "active" : ""
              } navLink`}
              ref={link5Ref}
            >
              Pricings
            </button>
          </li>
        </ul>
      </div>
      {/* Desktop Nav Menu End */}
      {/* NavBar End */}
      {/* ------------------------------------------------------------------------------------------------------- */}
    </>
  );
}
// ------------------------
// ------------------------
export default NavBar