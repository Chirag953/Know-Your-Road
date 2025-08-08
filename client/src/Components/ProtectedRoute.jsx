import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../apicalls/users";
import toast from "react-hot-toast";
import { SetCurrentUser } from "../redux/usersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      const response = await GetUser();
      if (response.success) {
        toast.success(response.message);
        dispatch(SetCurrentUser(response.data));
      } else {
        toast.error(response.message);
        // navigate('/login');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    currentUser && (
      <div>
        {currentUser.name}
        <br />
        {currentUser.role}
        {children}
      </div>
    )
  );
}

export default ProtectedRoute;
