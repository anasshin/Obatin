import MedicalHero from "../assets/medical-hero.png";
export default function Jumbotron() {
  return (
    <div
      className="hero bg-base-100 min-h-screen"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="hero-content flex-col md:flex-row-reverse">
        <img src={MedicalHero} className="w-full py-3 md:py-2" />
        <div className="md:p-6">
          <h1 className="text-4xl font-bold">Sehatin Aja!</h1>
          <p className="py-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
