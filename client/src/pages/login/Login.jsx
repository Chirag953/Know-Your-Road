import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { toast } from "react-hot-toast";
import { LoginUser } from "../../apicalls/users";
import { useNavigate } from "react-router-dom";
function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = async () => {
    try {
      const response = await LoginUser(user);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        toast.success(response.message);
        setTimeout(() => {
          if (response.data.role === "admin") {
            navigate("/Admin-dashboard");
          } else {
            navigate("/user");
          }
        }, 500); // 500ms delay
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="p-5 w-[450px] bg-white rounded-lg shadow-lg">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-2xl text-center font-bold uppercase">
            Know Your Road -Login
          </h1>

          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <Button
            title="LOGIN"
            onClick={login}
            variant="container"
            className="w-full"
            disabled={user.email.length < 3 || user.password.length < 3}
          />
          <Link to="/register" className="text-center underline">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
