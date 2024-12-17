import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { to, name, image, price } = props;
  return (
    <>
      <Link to={to} className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src={image} alt={name} className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title text-xs text-slate-500">{name}</h2>
          {/* <p className="text-sm">{description}</p> */}
          <p className="text-base font-extrabold">Rp. {price}</p>
          {/* <div className="card-actions items-center"></div> */}
        </div>
      </Link>
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
