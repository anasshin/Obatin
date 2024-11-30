export default function Banner({ title, disc, img }) {
  return (
    <div className="carousel-item bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-md p-2 items-center ">
      <div className="text-white items-center min-w-48">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="py-2">
          Discount <span className="font-bold">{disc}%</span>
        </p>
      </div>
      <img src={img} className="w-32" />
    </div>
  );
}
