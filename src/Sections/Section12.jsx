import apple from "../assets/Imgs/apple.png";
import playstore from "../assets/Imgs/playstore.png";
import section12Img from '../assets/Imgs/section12Img.png'
const Section12 = () => {
  return (
    <section className="py-10">
      <div className="container md:flex md:items-center md:w-[90%] md:mx-auto">
        <div className="text-center md:w-[40%]  md:text-left md:mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            No collection of user data. No Ads
          </h2>
          <div className="py-5">
            <p className="section12P section12PD">
              Aliqum mullam blandit tempor sapien gravida at donec ipsum porta
              justo. Velna vitae auctor and congue magna impedit luctus dolor
              volute
            </p>
            <p className="section12P section12PD">
              Aliqum mullam blandit tempor sapien gravida at donec ipsum porta
              justo. Velna vitae auctor and congue magna impedit luctus dolor
              volute
            </p>
            <p className="section12P section12PD">
              Aliqum mullam blandit tempor sapien gravida at donec ipsum porta
              justo. Velna vitae auctor and congue magna impedit luctus dolor
              volute
            </p>
          </div>
          <div className="py-4 md:flex md:items-center md:gap-x-5 justify-center">
            <div className="w-[230px] md:w-[200px] mx-auto flex gap-x-4 bg-black text-white py-1 px-3 rounded-md cursor-pointer">
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
            <div className="w-[230px] md:w-[200px] mx-auto my-2 flex gap-x-4 bg-black text-white py-1 px-3 rounded-md cursor-pointer">
              <div>
                <img className="w-[40px] py-1" src={apple} alt="" />
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
        <div className="w-[90%] mx-auto py-5 md:w-[40%] ">
            <img src={section12Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section12;
