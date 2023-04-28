import Texts from '../components/Texts';
import emoji from '../assets/Imgs/emoji.png'
import msg from '../assets/Imgs/msg.png'
import shield from '../assets/Imgs/shield.png'
import section5Img from '../assets/Imgs/section5Img.png'

const Section05 = () => {
  return (
    <div className="w-[90%] min-h-[200px] md:max-h-[520px] bg-gradient-to-tl from-[#F5F2EB] to-[#F7E6CB] mx-auto rounded-2xl shadow-xl shadow-[#DD8762] py-16 md:rounded-[5%] md:flex md:items-center border-2 border-solid">
      {/*  */}
      <div className="w-[90%] mx-auto ">
        <Texts
          img={msg}
          title="Text, Voice & Video Calls"
          desc="Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum quaerat primis ultrice tellus and viverra purus suscipit"
        />
        <Texts
          img={emoji}
          title="Stickers, Emojis, Themes"
          desc="Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum quaerat primis ultrice tellus and viverra purus suscipit"
        />
        <Texts
          img={shield}
          title="Spam Protection"
          desc="Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum quaerat primis ultrice tellus and viverra purus suscipit"
        />
      </div>
      <div className="max-sm:w-[90%] md:w-[80%] mx-auto py-4 md:mr-[80px] ">
        <img className="md:w-full" src={section5Img} alt="" />
      </div>
    </div>
  );
}

export default Section05