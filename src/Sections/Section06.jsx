import Section6Img from '../assets/Imgs/Section6Img.png'
import apple from '../assets/Imgs/apple.png'
import playstore from '../assets/Imgs/playstore.png'
// --------------------------------------
// --------------------------------------
const Section06 = () => {
  return (
    <main className="section04 my-20 ">
      {/* Container */}
      <div className="text-center">
        <h4 className="font-bold text-2xl md:text-4xl">Security, Simplicity, Easiness</h4>
        <p className="text-[12px] py-2 md:text-[15px] md:w-[50%] mx-auto md:py-6">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          a libero tempus, blandit and cursus varius and magnis sapien
        </p>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto md:flex md:items-center md:gap-x-[100px] py-5">
        {/* Image Side  */}
        <div className="md:w-[50%]">
          <img className="w-[100%]" src={Section6Img} alt="section06img" />
        </div>
        {/* Image Side End */}
        {/* -------------------------------------------- */}
        {/* Text Side */}
        <div className=" py-5 md:py-14 text-center md:text-left md:w-[40%]">
          <h2 className="font-bold  text-xl md:text-2xl md:leading-[40px]">
            Chat with your friends easily
          </h2>
          <p className="py-3 md:py-2 text-[12px] md:text-[14px] font-light">
            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo
            and cubilia laoreet augue and luctus magna dolor luctus at egestas
            sapien vitae nemo egestas volute and turpis dolores aliquam quaerat
            sodales a sapien
          </p>
          <h2 className="font-bold  text-xl md:text-2xl md:leading-[40px]">
            Chat with your friends easily
          </h2>
          <p className="py-3 md:py-2 text-[12px] md:text-[14px] font-light">
            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo
            and cubilia laoreet augue and luctus magna dolor luctus at egestas
            sapien vitae nemo egestas volute and turpis dolores aliquam quaerat
            sodales a sapien
          </p>


        <div className="py-4 md:flex md:items-center md:gap-x-5 justify-center">
          <div className="w-[230px] md:w-[200px] mx-auto flex gap-x-4 bg-black text-white py-1 px-3 rounded-md cursor-pointer">
            <div>
              <img className="w-[40px] py-1" src={playstore} alt="" />
            </div>
            <div className="">
              <h4 className="uppercase text-[#aba6a6] text-[13px]">
                Get It On
              </h4>
              <h3 className="capitalize text-2xl md:text-xl font-medium">GooglePlay</h3>
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
              <h3 className="capitalize text-2xl md:text-xl font-medium">App Store</h3>
            </div>
          </div>
        </div>
        </div>
        {/* Text Side End */}
        {/* -------------------------------------------------- */}
      </div>
      {/* Container End */}
      {/* -------------------------------------------------- */}
    </main>
    // // Section Four End
  );
  
}

export default Section06