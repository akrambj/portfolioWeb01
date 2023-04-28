import section04Img from '../assets/Imgs/section04Img.png'
// ----------------------------------
// ----------------------------------
const SectionFour = () => {
  return (
    // Section Four Start
    <main className="section04 ">
      {/* Container */}
      <div className="w-[90%] md:w-[80%] mx-auto md:flex md:items-center md:gap-x-[100px]">
        {/* Image Side  */}
        <div className="md:w-[50%]  max-sm:mx-auto">
          <img className="w-full mx-auto" src={section04Img} alt="section04img" />
        </div>
        {/* Image Side End */}
        {/* -------------------------------------------- */}
        {/* Text Side */}
        <div className=" py-5 md:py-14 text-center md:text-left md:w-[50%]">
          <h2 className="font-bold text-[#455A64] text-3xl md:text-4xl md:leading-[40px]">
            Share files, media, and locations
          </h2>
          <p className="py-3 text-[12px] md:text-[17px] font-light">
            Quaerat sodales sapien euismod blandit purus a purus ipsum primis in
            cubilia laoreet augue luctus magna dolor luctus and egestas sapien
            egestas vitae nemo volute
          </p>

          <p className="py-3 text-[12px] md:text-[17px] font-light">
            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo
            and cubilia laoreet augue and luctus magna dolor luctus at egestas
            sapien vitae nemo egestas volute and turpis dolores aliquam quaerat
            sodales a sapien
          </p>
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
// ------------------------------------------------------------------
// ---------------------------------------------------------------
export default SectionFour