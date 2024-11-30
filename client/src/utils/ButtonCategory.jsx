import { Link } from "react-router-dom";
export default function ButtonCategory({ to, image, name }) {
  return (
    <>
      <Link to={to}>
        <div className="flex flex-col items-center justify-center rounded-xl text-smfont-bold hover:bg-slate-300 text-center">
          <img src={image} className="w-12" />
          <p className="text-xs">{name}</p>
        </div>
      </Link>
    </>
  );
}
