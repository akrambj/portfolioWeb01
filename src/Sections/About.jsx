import Card from "../components/Card"
import cross from '../assets/Imgs/cross.png'
import lamp from '../assets/Imgs/lamp.png'
import transfer from '../assets/Imgs/transfer.png'
// -----------------------
// -----------------------
const About = () => {
  return (
    <div className="w-[90%] mx-auto min-h-[200px] my-40  md:my-10 md:grid md:grid-cols-3">
      <Card
        img={lamp}
        title="Quick Access"
        des="Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor "
      />
      <Card
        img={cross}
        title="Cross-Platform"
        des="Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor  "
      />
      <Card
        img={transfer}
        title="Easy Integration"
        des="Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor "
      />
    </div>
  );
}

export default About