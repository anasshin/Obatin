import { Link } from "react-router-dom";

export default function ButtonProfile({ to, image, name }) {
  return (
    <>
      <Link to={to}>
        <div className="btn w-full justify-start rounded-full mb-4">
          <img src={image} className="w-6" />
          <p className="text-md ps-2">{name}</p>
        </div>
      </Link>
    </>
  );
}
