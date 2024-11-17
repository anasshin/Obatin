import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";

export default function Home() {
  return (
    <div className="home-container">
      <Jumbotron />
      {/* <CardProduct /> */}
      <About />
      <Footer />
    </div>
  );
}
