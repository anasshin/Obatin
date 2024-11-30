import CardArticle from "../utils/CardArticle";
export default function Articles() {
  return (
    <>
      <h1 className="text-lg font-bold m-2">Artikel Baru</h1>
      <div className="carousel carousel-center w-full space-x-2 p-2">
        <CardArticle
          title="Vitamin D"
          img="https://i.pinimg.com/736x/9a/8b/c7/9a8bc778d21d7f46aa9fac5441b1909d.jpg"
          category="Vitamin"
        />
        <CardArticle
          title="Vitamin C"
          img="https://i.pinimg.com/736x/9a/8b/c7/9a8bc778d21d7f46aa9fac5441b1909d.jpg"
          category="Vitamin"
        />
        <CardArticle
          title="Vitamin C"
          img="https://i.pinimg.com/736x/9a/8b/c7/9a8bc778d21d7f46aa9fac5441b1909d.jpg"
          category="Tanaman Herbal"
        />
        <CardArticle
          title="Vitamin C"
          img="https://i.pinimg.com/736x/9a/8b/c7/9a8bc778d21d7f46aa9fac5441b1909d.jpg"
          category="Tanaman Herbal"
        />
      </div>
    </>
  );
}
