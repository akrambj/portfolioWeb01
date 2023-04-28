import Section17Img from '../assets/Imgs/section17Img.png' 
import playstore from '../assets/Imgs/playstore.png'
import apple02 from '../assets/Imgs/apple02.png'


const Section17 = () => {
  return (
    <section className="py-10">
      <div className="container w-[90%] mx-auto bg-red-300 bg-gradient-to-tl from-[#F5F2EB] to-[#F7E6CB] md:py-5 rounded-2xl shadow-xl shadow-[#DD8762] md:flex  md:justify-around">
        <div className=" md:w-[40%]">
          <img src={Section17Img} alt="calling" />
        </div>
        <div className=" py-4 md:py-0 text-center md:text-left md:w-[40%]">
          <div className="">
            <h2 className="font-bold text-xl md:text-4xl md:leading-[45px]">
              Unlimited calling, texting and picture messaging
            </h2>
            <p className="py-3 font-semibold text-[12px] md:text-lg">
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo
              and cubilia laoreet augue and luctus magna dolor luctus at egestas
              sapien vitae nemo egestas
            </p>
          </div>
          <div className="py-2 flex items-center w-[80%] md:w-full md:gap-x-5 flex-row-reverse mx-auto justify-center md:justify-end flex-wrap">
            <button className="border-2 border-solid border-[#FE9868] px-8 py-3 md:py-2 rounded-md font-bold capitalize">
              View Pricing
            </button>
            <button className="bg-[#FE9868] text-white px-8 py-3 md:py-2 rounded-md font-bold capitalize my-4">
              let's get started
            </button>
          </div>
          <div className="py-2 md:text-center">
            <p className="font-semibold">
              Free 14 days trial <span className="text-[#FE9563]">|</span>{" "}
              Exclusive Support <span className="text-[#FE9563]">|</span> No
              Fees <span className="text-[#FE9563]">|</span>
            </p>
          </div>
          <div className="py-4 md:flex md:items-center md:gap-x-5 justify-center">
            <div className="w-[230px] md:w-[200px] mx-auto flex gap-x-4 bg-white text-black py-1 px-3 rounded-md cursor-pointer">
              <div>
                <img className="w-[40px] py-1" src={playstore} alt="" />
              </div>
              <div className="">
                <h4 className="uppercase text-[#aba6a6] text-[13px]">
                  Get It On
                </h4>
                <h3 className="capitalize text-2xl md:text-xl font-medium">
                  GooglePlay
                </h3>
              </div>
            </div>
            <div className="w-[230px] md:w-[200px] mx-auto my-2 flex gap-x-4 bg-white text-black py-1 px-3 rounded-md cursor-pointer">
              <div>
                <img className="w-[40px] py-1" src={apple02} alt="" />
              </div>
              <div className="">
                <h4 className="capitalize text-[#aba6a6] text-[13px]">
                  downlaod on the
                </h4>
                <h3 className="capitalize text-2xl md:text-xl font-medium">
                  App Store
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section17