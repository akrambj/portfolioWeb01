import play from '../assets/Imgs/play.png'
import heroImg from '../assets/Imgs/heroImg.png'
// -----------------------------------------
// -----------------------------------------
const Hero = () => {
  return (
    // Hero Section
    <main className="hero h-screen w-full md:rounded-b-[20%] md:shadow-md md:shadow-[#FE9C69]">
      {/* Container */}
      <div className="Hero w-[90%] mx-auto py-20 md:py-10 md:flex md:items-center md:justify-between">
        {/* Texts Side */}
        <div className="text-center md:text-left md:w-[50%] ">
          <h1 className="text-3xl md:text-5xl font-bold leading-[40px] md:leading-[60px] text-[#455A64]">
            Share text, voice, photos, videos and GIFs files for free
          </h1>
          <p className="py-2 text-[14px] md:text-[20px] md:w-[90%]  font-extralight">
            Feugiat primis a ligula undo auctor mauris auctor laoreet and
            pretium augue an egestas cubilia
          </p>
          {/* Button */}
          <div className="md:flex md:items-center md:justify-start py-3 gap-x-4">
            <button className="bg-[#455A64] text-white font-bold py-2 px-6 rounded-md md:hover:bg-[#26373e] duration-300">
              Learn More
            </button>
            {/* PLAY Button */}
            <div className="flex items-center gap-x-2 justify-center py-4">
              <img className="cursor-pointer" src={play} alt="play" />
              <h4 className="text-[#455A64] font-bold">See OLMO in Action</h4>
            </div>
            {/* PLAY Button End  */}
            {/* ----------------------------------------------- */}
          </div>
          {/* Button End  */}
          {/* ------------------------------------------------- */}
        </div>
        {/*  Texts Side End */}
        {/* --------------------------------------------------- */}
        <div className="py-10">
          <img src={heroImg} alt="image" />
        </div>
      </div>
      {/* Image Side  */}
    </main>
  );
}

export default Hero