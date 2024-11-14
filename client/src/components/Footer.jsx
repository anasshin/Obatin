import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Input from "../utils/Input";
// import mail from "../assets/icons/chat_1_fill.svg";
export default function footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-4 md:p-10 mt-4 justify-between">
      <nav>
        <h6 className="footer-title">ObatIn</h6>
        <a className="link link-hover">Beranda</a>
        <a className="link link-hover">Produk</a>
        <a className="link link-hover">Konsultasi</a>
        <a className="link link-hover">Keranjang</a>
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
            {/* <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            /> */}
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
