import section10Img from '../assets/Imgs/section10Img.png'
const Section10 = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl font-bold">Share Moments. Share Life.</h3>
        <p className="py-3 md:text-[14px] text-[12px] md:w-[40%] md:mx-auto">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          a libero tempus, blandit and cursus varius and magnis sapien
        </p>
      </div>
      <div className="py-4 md:w-[90%] md:mx-auto">
        <img className='md:mx-auto' src={section10Img} alt="map" />
      </div>
      <div className="py-4 text-center md:py-0">
        <button className="bg-[#FE9563] py-2 px-5 font-bold rounded-md hover:bg-[#f25912] hover:duration-300 duration-300">
          See OLMO in Action
        </button>
        <h5 className='py-6 font-semibold'>Free 30 Days Trial | Exclusive Support | No Fees</h5>
      </div>
    </section>
  );
}

export default Section10