import Label from "../utils/Label";
import Input from "../utils/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full p-10">
        <h1 className="text-2xl font-semibold mb-5 text-center">Login</h1>
        <form className="form-control">
          <Label htmlFor="email" text="Email" />
          <Input type="email" placeholder="Masukan Email" name="email" />
          <Label htmlFor="password" text="Password" />
          <Input
            type="password"
            placeholder="Masukan Password"
            name="password"
          />
          <div className="label text-right ">
            <Link to="/forgotPasswd" className="label-text-alt text-right">
              Forgot Password?
            </Link>
          </div>
          <Link to={"/"} className="btn btn-primary btn-block mt-2">
            Login
          </Link>

          <div className="flex justify-center mt-5">
            <span className="label-text-alt">Don&apos;t have an account?</span>
            <Link to={"/register"} className="label-text-alt ml-1 text-primary">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
