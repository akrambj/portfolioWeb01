import logo from '../assets/Imgs/logo.png'
import playstore from "../assets/Imgs/playstore.png";
import apple from "../assets/Imgs/apple.png";
const Footer = () => {
  return (
    <section className=" bg-[#e28d66] max-h-[920px]">
      <div className="w-[95%] mx-auto md:flex md:items-center  md:flex-wrap md:w-[90%] md:py-10 ">
        <div className="px-2 py-5 md:w-[50%]">
          <div className="logo flex items-center  text-black">
            <img className="w-[32px] md:w-[40px]" src={logo} alt="Logo" />
            <button className="text-2xl md:text-3xl font-bold">COMU</button>
          </div>
          <div className="flex md:block items-center justify-around md:px-12">
            <div className="">
              <p className="py-2 text-[10px] md:text-lg md:w-[60%] w-[90%]">
                Aliquam nullam tempor sapien donec and gravida congue an ipsum
                porta justo velna auctor magna and laoreet augue an auctor
                gravida donec
              </p>
            </div>
            <div>
              <div className="py-4 md:flex md:items-center md:gap-x-5 justify-center md:justify-start">
                <div className="w-[150px] md:w-[200px]  flex gap-x-4 bg-black text-white py-1 px-3 rounded-md cursor-pointer">
                  <div>
                    <img className="w-[25px] py-1" src={playstore} alt="" />
                  </div>
                  <div className="">
                    <h4 className="uppercase text-[#aba6a6] text-[13px]">
                      Get It On
                    </h4>
                    <h3 className="capitalize text-sm md:text-xl font-medium">
                      GooglePlay
                    </h3>
                  </div>
                </div>
                <div className="w-[150px] md:w-[200px]  my-2 flex gap-x-4 bg-black text-white py-1 px-3 rounded-md cursor-pointer">
                  <div>
                    <img className="w-[25px] py-1" src={apple} alt="" />
                  </div>
                  <div className="">
                    <h4 className="capitalize text-[#aba6a6] text-[13px]">
                      downlaod
                    </h4>
                    <h3 className="capitalize text-sm md:text-xl font-medium">
                      App Store
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-5 items-center text-center   md:pb-12 ">
          <div className="footLinks">
            <h2 className="footerHeade">Company</h2>
            <ul className="footerLinks">
              <li className="footerLink">
                <a href="#">About Us</a>
              </li>
              <li className="footerLink">
                <a href="#">Careers</a>
              </li>
              <li className="footerLink">
                <a href="#">Press & Media</a>
              </li>
              <li className="footerLink">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footLinks">
            <h2 className="footerHeade">Discover</h2>
            <ul className="footerLinks">
              <li className="footerLink">
                <a href="#">Our Blog</a>
              </li>
              <li className="footerLink">
                <a href="#">Advertising</a>
              </li>
              <li className="footerLink">
                <a href="#">Plans & Pricing</a>
              </li>
              <li className="footerLink">
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footLinks">
            <h2 className="footerHeade">Legal</h2>
            <ul className="footerLinks">
              <li className="footerLink">
                <a href="#">Terms of Use</a>
              </li>
              <li className="footerLink">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footerLink">
                <a href="#">Cookie Policy</a>
              </li>
              <li className="footerLink">
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footLinks">
            <h2 className="footerHeade">Support</h2>
            <ul className="footerLinks">
              <li className="footerLink">
                <a href="#">FAQs</a>
              </li>
              <li className="footerLink">
                <a href="#">Editor Help</a>
              </li>
              <li className="footerLink">
                <a href="#">Community</a>
              </li>
              <li className="footerLink">
                <a href="#">Live Chatting</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center"></div>
        <div className="py-10 w-[90%] md:w-[80%] mx-auto relative">
          <input
            className="w-full px-6 py-3 border-2 border-solid border-[#FE9563] rounded-md max-sm:text-[10px]"
            type="text"
            placeholder="Ask your question here......"
          />
          <button className="absolute right-[2px] top-[41px] bg-[#FE9563] px-3 md:px-[50px] rounded-l-md text-white font-bold text-lg capitalize py-1 md:py-[10px] border-2 border-solid border-[#FE9563]">
            Search
          </button>
        </div>
      </div>
      <div className="text-center bg-gradient-to-tl from-[#F5F2EB] to-[#F7E6CB] py-5">
        <h4 className="font-bold text-lg">
          All Rights Reserved To <span>Akram</span>
        </h4>
      </div>
    </section>
  );
}

export default Footer