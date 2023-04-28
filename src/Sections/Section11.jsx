import section11Img from '../assets/Imgs/section11Img.png'
export const Section11 = () => {
  return (
    <section className="py-10">
      <div className="container w-[91%] px-4 mx-auto min-h-[200px] bg-gradient-to-tl from-[#F5F2EB] to-[#F7E6CB] rounded-2xl shadow-xl shadow-[#DD8762] py-16 md:rounded-[5%]">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold">
            Share Moments. Share Life.
          </h3>
          <p className="py-3 md:text-[15px] text-[13px] md:w-[50%] md:mx-auto">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis a libero tempus, blandit and cursus varius and magnis sapien
          </p>
        </div>
        <div className='md:w-[90%] md:mx-auto'>
            <img className='md:mx-auto' src={section11Img} alt="ppl" />
        </div>
      </div>
    </section>
  );
}
