import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Input from "../utils/Input";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-4 md:p-10  justify-between">
      <nav>
        <h6 className="footer-title">ObatIn</h6>
        <Link to={"/"} className="link link-hover">
          Beranda
        </Link>
        <Link to={"/products"} className="link link-hover">
          Produk
        </Link>
        <Link to={"/consult"} className="link link-hover">
          Konsultasi
        </Link>
        <Link to={"/transactions"} className="link link-hover">
          Transaksi
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Ikuti Kami!</h6>
        <div className="flex gap-3">
          <a className="link link-hover">
            <Facebook />
          </a>
          <a className="link link-hover">
            <Instagram />
          </a>
          <a className="link link-hover">
            <Twitter />
          </a>
          <a className="link link-hover">
            <Mail />
          </a>
        </div>
      </nav>

      <form>
        <h6 className="footer-title">Subscribe</h6>
        <fieldset className="form-control ">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <Input
              // icon={mail}
              type={"email"}
              placeholder={"emailmu@mail.com"}
              className="join-item"
            />
            <button className="btn btn-primary join-item md:my-0">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
