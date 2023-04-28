import Card from "../components/Card";
import finterface from '../assets/Imgs/finterface.png'
import directions from "../assets/Imgs/directions.png";
import encryption from "../assets/Imgs/encryption.png";
// -----------------------
// -----------------------
const Section09 = () => {
  return (
    <section className="py-6">
      <div className="text-center">
        <h2 className="font-bold text-xl md:text-4xl">We’re Better. Here’s Why…</h2>
        <p className="font-semibold text-[12px] py-2 md:w-[40%] md:mx-auto md:text-[13px]">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          a libero tempus, blandit and cursus varius and magnis sapien
        </p>
      </div>

      <div className="w-[90%] mx-auto min-h-[200px]  md:my-10 md:grid md:grid-cols-3">
        <Card
          img={finterface}
          title="Friendly Interface"
          des="Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis "
        />
        <Card
          img={directions}
          title="Extremely Flexible"
          des="Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor  "
        />
        <Card
          img={encryption}
          title="Strong Encryption"
          des="Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor "
        />
      </div>
    </section>
  );
};

export default Section09;
