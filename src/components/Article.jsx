
const Article = ({ question, answer }) => {
  return (
    <div className="w-[90%] min-h-[40px] my-5 md:border-2 md:border-solid md:border-black md:p-2 md:card md:shadow-md md:shadow-orange-500 duration-300 md:hover:bg-[#FE9563] md:hover:scale-125 cursor-pointer">
      <h2 className="font-bold md:text-xl">{question}</h2>
      <p className="py-3 font-semibold text-[12px] md:text-[15px]">{answer}</p>
    </div>
  );
}

export default Article