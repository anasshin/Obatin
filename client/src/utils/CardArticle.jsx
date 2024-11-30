import { Link } from "react-router-dom";

export default function CardArticle({ title, img, category }) {
  return (
    <>
      {/* <Link className="carousel-item ">
        
      </Link> */}

      <Link className="carousel-item">
        <div className="card bg-base-400 w-52 shadow-xl">
          <figure>
            <img src={img} alt={img} className="h-24 w-full object-cover" />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title text-sm">{title}</h2>
            <div className="badge badge-error text-white">{category}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
