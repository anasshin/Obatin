import Favourite from "../assets/icons/heart_line.svg";

export default function Card({ src, title, price }) {
  return (
    <div className="card rounded-lg bg-white">
      <button className="btn btn-link absolute right-0  hover:fill-red-500">
        <img src={Favourite} alt="heart_icon" />
      </button>
      <p className="card-title absolute p-2">{title}</p>
      <figure className="">
        <img src={src} className="w-full rounded-t-lg" />
      </figure>
      <div className=" flex justify-between items-center p-2">
        <h4 className="text-black  font-semibold">{price}</h4>
        <button className="btn btn-sm md:btn-md btn-info">Keranjang</button>
      </div>
    </div>
  );
}
