import database from '../assets/Imgs/database.png'
import group from '../assets/Imgs/group.png'
import section07Img from  '../assets/Imgs/section07Img.png'

const Section07 = () => {
  return (
    <section className="">
      <div className="container md:w-[85%] md:mx-auto text-center md:text-left md:flex md:items-center">
        <div className="md:w-[50%] md:mx-auto">
          <h2 className="text-2xl md:text-5xl md:leading-[50px] font-bold leading-[40px]">
            Work smarter with powerful automation
          </h2>
          <p className="py-3 md:text-[15px] text-[12px] md:w-[75%]">
            Quaerat sodales sapien euismod blandit purus a purus ipsum primis in
            cubilia laoreet augue luctus magna dolor luctus and egestas sapien
            egestas vitae nemo volute
          </p>
          <div
            className="w-[70%] min-h-[70px] bg-white mx-auto md:mx-0 md:w-[60%] md:h-[90px]
          my-2 rounded-md shadow-xl py-2 cursor-pointer cardHover2 md:flex "
          >
            <div className="w-[20%] md:w-[17%] md:h-[20px] md:my-3 md:rounded-xl min-h-[50px] bg-[#FE9563] mx-auto rounded-md md:mx-2">
              <img
                className="w-[45px]   md:w-[35px] mx-auto py-1 md:py-2"
                src={group}
                alt="group"
              />
            </div>
            <div className="py-2">
              <h3 className="font-bold md:text-xl">Send Group Messages</h3>
              <p className="font-semibold text-[14px]">
                to your lists of contacts
              </p>
            </div>
          </div>
          <div
            className="w-[70%] min-h-[70px] bg-white mx-auto md:mx-0 md:w-[60%] md:h-[90px]
          my-6 rounded-md shadow-xl py-2 cursor-pointer cardHover2 md:flex "
          >
            <div className="w-[20%] md:w-[17%] md:h-[20px] md:my-3 md:rounded-xl min-h-[50px] bg-[#FE9563] mx-auto rounded-md md:mx-2">
              <img
                className="w-[45px]   md:w-[35px] mx-auto py-1 md:py-2"
                src={database}
                alt="group"
              />
            </div>
            <div className="py-2">
              <h3 className="font-bold md:text-xl">Lowest Data Usage</h3>
              <p className="font-semibold text-[14px]">
                with Encrypted Messaging
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:pl-[70px] ">
          <img className='' src={section07Img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section07