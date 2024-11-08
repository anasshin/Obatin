export default function Card() {
  return (
    <div className="card rounded-lg bg-white">
      <button className="btn btn-link absolute right-0  hover:fill-red-500">
        <img src={"../../src/assets/icons/heart_line.svg"} alt="heart_icon" />
      </button>
      <p className="card-title absolute p-2">Vitamin</p>
      <figure className="">
        <img
          src="https://i.pinimg.com/564x/23/13/1a/23131a142a827d3a0e63f6193ac63250.jpg"
          className="w-full rounded-t-lg"
        />
      </figure>
      <div className=" flex justify-between items-center p-2">
        <h4 className="text-black  font-semibold">Rp. 100.000</h4>
        <button className="btn btn-sm md:btn-md btn-info">Keranjang</button>
      </div>
    </div>
  );
}
