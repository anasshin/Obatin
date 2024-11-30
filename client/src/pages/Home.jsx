import Jumbotron from "../components/Jumbotron";
// import About from "../components/About";
import CategoryHero from "../components/CategoryHero";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <div className="home-container">
      <Jumbotron />
      <CategoryHero />
      <Articles />
      {/* <About /> */}
    </div>
  );
}
