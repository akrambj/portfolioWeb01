import section08Img from '../assets/Imgs/section08Img.png'

const Section08 = () => {
  return (
    <section className="py-10">
      <div className="container md:w-[90%] md:mx-auto text-center md:text-left md:flex md:items-center md:flex-row-reverse md:gap-x-[0px]">
        <div className="md:w-[40%] md:mx-auto ">
          <h2 className="text-2xl md:text-4xl md:leading-[50px] font-bold leading-[40px]">
            Make it simpler with Quick Commands
          </h2>
          <p className="py-3 md:text-[14px] text-[12px] md:w-[90%] ">
            Fringilla risus, luctus mauris orci auctor euismod iaculis luctus
            magna purus pretium ligula purus undo quaerat tempor sapien rutrum
            mauris quaerat ultrice
          </p>
          <p className="md:py-2 md:text-[15px] text-[12px] md:w-[75%]">
            Quaerat sodales sapien euismod purus blandit
          </p>
          <p className="py-2 md:text-[14px] text-[12px] md:w-[90%]">
            Nemo ipsam egestas volute turpis dolores undo ultrice aliquam
            quaerat at sodales sapien purus
          </p>
          <div className="py-3 md:flex md:items-center md:gap-x-6">
            <button className="bg-[#FE9868] text-white font-bold px-6 py-2 rounded-md shadow-md md:hover:bg-[#f35f1b] md:hover:duration-300 duration-300">
              Let's Get Started
            </button>
            <button className="my-2 border-2 border-solid border-[#FE9868] font-bold px-6 py-2 rounded-md shadow-md">
              Let's Get Started
            </button>
          </div>
        </div>
        <div className="md:w-[60%]  py-5 ">
          <img className="" src={section08Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section08;
