import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { name, image, price } = props;
  return (
    <>
      <Link to="/products:id" className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src={image} alt={name} className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title text-base">{name}</h2>
          {/* <p className="text-sm">{description}</p> */}
          <div className="card-actions items-center">
            <p className="text-md font-bold bg-error rounded-sm">Rp. {price}</p>
            {/* <button className="btn btn-primary w-full">Buy Now</button> */}
          </div>
        </div>
      </Link>
      {/* <div className="card rounded-lg bg-slate-400 w-86 shadow-xl ">
        <div>
          <button className="btn btn-link absolute right-0  hover:fill-red-500">
            <img src={Favourite} alt="heart_icon" />
          </button>
          <p className="card-title  p-2">{name}</p>
        </div>
        <figure className="">
          <img src={src} className="w-full" />
        </figure>
        <div>
          <p className="card-price m-4">Rp. {price}</p>
          <button className="btn btn-primary w-full">Add to Cart</button>
        </div>
      </div> */}
    </>
  );
};

// const Header = (props) => {
//   const { name } = props;
//   return (

//   );
// };

// const Body = (props) => {
//   const { src } = props;
//   return (

//   );
// };

// const Footer = (props) => {
//   const { price } = props;
//   return (

//   );
// };

// CardProduct.Header = Header;
// CardProduct.Body = Body;
// CardProduct.Footer = Footer;
export default CardProduct;
