import { Link } from "react-router-dom";
import Input from "../utils/Input";
import Label from "../utils/Label";

const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 border-solid border-2 border-slate-300 p-10 rounded-md">
        <h1 className="text-2xl font-semibold mb-5 text-center">Register</h1>
        <form className="form-control">
          <Label htmlFor="email" text="Email" />
          <Input type="email" placeholder="Masukan Email" name="email" />
          <Label htmlFor="password" text="Password" />
          <Input
            type="password"
            placeholder="Masukan Password"
            name="password"
          />
          <Label htmlFor="confirmPassword" text="Confirm Password" />
          <Input
            type="password"
            placeholder="Masukan Ulang Password"
            name="confirmPassword"
          />
          <button className="btn btn-primary btn-block mt-2">Register</button>

          <div className="flex justify-center mt-5">
            <span className="label-text-alt">Already have an account?</span>
            <Link to={"/login"} className="label-text-alt ml-1 text-primary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
