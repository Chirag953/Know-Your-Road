import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { toast } from "react-hot-toast";
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loadersSlice";
import bgimg from "../../assets/bgimg.webp";

function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const login = async () => {
    try {
      dispatch(showLoader());
      const response = await LoginUser(user);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        toast.success(response.message);
        setTimeout(() => {
          if (response.data.role === "admin") {
            window.location.href = "/Admin-dashboard";
          } else {
            window.location.href = "/user";
          }
        }, 500);
      } else {
        toast.error(response.message);
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bgimg})` }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative bg-white w-full max-w-md sm:max-w-lg md:max-w-md rounded-xl p-6 sm:p-8 shadow-lg z-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Welcome Back to KYR - Login
        </h2>
        <p className="text-sm sm:text-base text-gray-500 text-center mb-6">
          Already a member? Log in with your email address and password.
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 sm:py-3 mb-4 focus:outline-none focus:ring-3 focus:ring-gray-500 text-sm sm:text-base"
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 sm:py-3 mb-4 focus:outline-none focus:ring-3 focus:ring-gray-500 text-sm sm:text-base"
        />

        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <Button
          title="Login "
          onClick={login}
          variant="container"
          className="w-full text-sm sm:text-base"
          disabled={user.email.length < 3 || user.password.length < 3}
        />


        <div className="flex items-center my-4">
          <div className="flex-1 border-t"></div>
          <span className="px-2 text-gray-400 text-sm">or</span>
          <div className="flex-1 border-t"></div>
        </div>

        <p className="text-center text-sm sm:text-base">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
