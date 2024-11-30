import Banner from "../utils/Banner";
import ObatHero from "../assets/obat.svg";

export default function Jumbotron() {
  return (
    <>
      <div className="carousel carousel-center w-full space-x-2 p-2">
        <Banner title="Vitamin D" disc="40" img={ObatHero} />
        <Banner title="Vitamin C" disc="40" img={ObatHero} />
        <Banner title="Vitamin C" disc="40" img={ObatHero} />
      </div>
    </>
  );
}
