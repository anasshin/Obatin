import { Link } from "react-router-dom";
import ButtonCategory from "../utils/ButtonCategory";
import Obat from "../assets/obat.png";
import Doctor from "../assets/doctor.png";
import Vaksin from "../assets/vaksin.png";
import Antibody from "../assets/antibodi.png";

export default function CategoryHero() {
  return (
    <>
      <h1 className="text-lg font-bold mx-2">Categories</h1>
      <div className="grid grid-cols-4 gap-2 m-4 items-center">
        <ButtonCategory to="/products" image={Obat} name={"Obat"} />
        <ButtonCategory to="/consult" image={Doctor} name={"Konsultasi"} />
        <ButtonCategory to="/products" image={Vaksin} name={"Vaksin"} />
        <ButtonCategory
          to="/products"
          image={Antibody}
          name={"Kesehatan Tubuh"}
        />
        <ButtonCategory to="/products" image={Obat} name={"Obat"} />
        <ButtonCategory to="/consult" image={Doctor} name={"Konsultasi"} />
        <ButtonCategory to="/products" image={Vaksin} name={"Vaksin"} />
        <ButtonCategory
          to="/products"
          image={Antibody}
          name={"Kesehatan Tubuh"}
        />
      </div>
    </>
  );
}
