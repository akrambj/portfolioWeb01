// ------------------------------
// ------------------------------
const Texts = ({ img, title, desc  }) => {
  return (
    <div className="w-[90%] md:w-[70%]   md:min-h-[70px] mx-auto md:mx-[80px] p-2 my-5 md:flex  md:gap-x-5 ">
      <div className="w-[25%] md:w-[20%] md:h-[40px] bg-[#FE9563] mx-auto md:mx-0 rounded-md p-2 ">
        <img src={img} alt="icon" />
      </div>
      <div className="">
        <p className="text-center max-sm:py-2 md:text-left font-bold text-[#37474F]">
          {title}
        </p>
        <p className="text-center md:text-left py-1  md:w-[70%] text-[13px]  leading-[20px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Texts