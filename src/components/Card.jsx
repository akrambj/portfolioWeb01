
const Card = ({ img, title, des }) => {
  return (
    <div className="bg-gradient-to-br from-[#F5F2EB] to-[#F7E6CB] w-[80%] mx-auto h-[240px] rounded-[10%] py-4 my-10 shadow-lg shadow-[#FE9C69] cursor-pointer px-6 cardHover duration-300 hover:bg-gradient-to-r hover:from-black hover:text-white">
      <div className="md:w-[20%] w-[30%] bg-[#FE9C69] h-[60px] mx-auto rounded-md mt-5">
        <img className="mx-auto w-[40px] py-2" src={img} alt="icons" />
      </div>
      <h3 className="text-center py-2 font-bold">{title}</h3>
      <p className="text-center md:text-[16px] text-[12px] font-light">{des}</p>
    </div>
  );
}

export default Card