import AboutCard from "../utils/AboutCard";

export default function About() {
  return (
    <div className="py-2">
      <h1 className="text-4xl font-bold text-center ">About Us</h1>
      <p className="text-center mt-3">ini adalah halaman About</p>
      <div className="grid grid-cols-2 gap-4 m-4">
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
}
