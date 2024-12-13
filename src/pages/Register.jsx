import Lottie from "lottie-react";
import AnimationReg from "../../src/assets/register.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { createUser, user } = useContext(AuthContext); // Ensure AuthContext is provided

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      alert("Please use at least one uppercase, one lowercase, and one digit.");
      return; // Exit early if password doesn't meet requirements
    }

    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);
        alert("You have successfully registered your account");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="py-6 w-96">
            <Lottie animationData={AnimationReg} loop={true}></Lottie>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl ml-8 mt-4 font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
