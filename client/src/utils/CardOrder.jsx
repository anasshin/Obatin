const CardOrder = ({ image, name, category, price, qty, shipped }) => {
  return (
    <div className="box p-4 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 ">
      <div className="col-span-2">
        <img
          src={image}
          alt={name}
          className="w-auto rounded-xl object-cover"
        />
      </div>
      <div className="col-span-3 flex h-full justify-center pl-4 flex-col ">
        <h5 className="font-manrope font-semibold leading-9 text-black mb-1 whitespace-nowrap">
          {name}
        </h5>
        <p className="font-normal text-sm leading-7 text-gray-600 ">
          {category}
        </p>
        <p className="font-semibold text-md leading-8 text-black">{price}</p>
      </div>

      <div className="col-span-1 flex items-center justify-center ">
        <p className="font-semibold text-sm leading-8 text-indigo-600 text-center">
          {qty}
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-center ">
        <p className="font-semibold text-sm leading-8 text-black">{shipped}</p>
      </div>
    </div>
  );
};

export default CardOrder;
