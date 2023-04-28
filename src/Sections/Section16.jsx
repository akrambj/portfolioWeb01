
const Section16 = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-bold text-2xl md:text-5xl">Have more questions?</h2>
      </div>
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
    </section>
  );
}

export default Section16