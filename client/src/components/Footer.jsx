export default function footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-4 justify-between">
      <nav>
        <h6 className="footer-title">ObatIn</h6>
        <a className="link link-hover">Beranda</a>
        <a className="link link-hover">Produk</a>
        <a className="link link-hover">Konsultasi</a>
        <a className="link link-hover">Keranjang</a>
      </nav>
      <nav>
        <h6 className="footer-title">Ikuti Kami!</h6>
        <a className="link link-hover"></a>
        <a className="link link-hover"></a>
        <a className="link link-hover"></a>
        <a className="link link-hover">Press kit</a>
      </nav>

      <form>
        <h6 className="footer-title">Subscribe</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
