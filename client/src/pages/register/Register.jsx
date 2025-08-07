import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { RegisterUser } from "../../apicalls/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function Register() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const register = async () => {
    try {
      const response = await RegisterUser(user);
      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="p-5 w-[450px] bg-white rounded-lg shadow-lg">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-2xl text-center font-bold uppercase">
            Know Your Road -Register
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

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
            title="REGISTER"
            onClick={register}
            variant="container"
            className="w-full"
            disabled={
              user.name.length < 3 ||
              user.email.length < 3 ||
              user.password.length < 3
            }
          />
          <Link to="/login" className="text-center underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
