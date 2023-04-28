import section13Img from '../assets/Imgs/section13Img.png'
const Section13 = () => {
  return (
    <section className='py-6'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold md:w-[40%] md:text-4xl md:mx-auto'>Discover powerful features to boost your productivity</h2>
        <div className='w-[90%] mx-auto py-5'>
            <img className='mx-auto md:w-[30%]' src={section13Img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section13