import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
// import CardProduct from "../utils/CardProduct";
// import "./Home.css"; // Import CSS file

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Jumbotron />
      {/* <CardProduct /> */}
      <Footer />
    </div>
  );
}
