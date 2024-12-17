export default function ProductCategory({ category }) {
  return (
    <div className="carousel-item p-2 bg-slate-100 rounded-full px-8 font-bold active:bg-slate-600 active:text-white">
      {category}
    </div>
  );
}
