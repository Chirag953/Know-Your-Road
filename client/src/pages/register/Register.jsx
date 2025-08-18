import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { RegisterUser } from "../../apicalls/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loadersSlice";
import bgimg from "../../assets/bgimg.webp";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const register = async () => {
    try {
      dispatch(showLoader());
      const response = await RegisterUser(user);
      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error(response.message);
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      toast.error(error.message);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative bg-white w-full max-w-md sm:max-w-lg md:max-w-md rounded-xl p-6 sm:p-8 shadow-lg z-10">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-2">
            Know Your Road - Register
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center mb-4 sm:mb-2">
            Already a member? Log in with your email address and password.
          </p>

          <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 sm:py-3 focus:outline-none focus:ring-3 focus:ring-gray-500 text-sm sm:text-base"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 sm:py-3 focus:outline-none focus:ring-3 focus:ring-gray-500 text-sm sm:text-base"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 sm:py-3 mb-4 focus:outline-none focus:ring-3 focus:ring-gray-500 text-sm sm:text-base"
          />

          <div className="flex items-center mb-1 sm:mb-2">
            <input type="checkbox" id="remember" className="mr-2" />
            <label
              htmlFor="remember"
              className="text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          <Button
            title="Register"
            onClick={register}
            variant="container"
            className="w-full text-sm sm:text-base"
            disabled={
              user.name.length < 3 ||
              user.email.length < 3 ||
              user.password.length < 3
            }
          />

          <div className="flex justify-center gap-1.5 text-center text-sm sm:text-base">
            <div>Already have an account?</div>
            <Link to="/login" className="text-sky-800 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
