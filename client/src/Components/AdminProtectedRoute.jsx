import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { GetUser } from "../apicalls/users";
import { SetCurrentUser } from "../redux/usersSlice";

function AdminProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await GetUser();
      if (response.success) {
        dispatch(SetCurrentUser(response.data));
      } else {
        toast.error(response.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate("/login");
    }
  }, []);

  // Allow only admins
  if (currentUser && currentUser.role !== "admin") {
    toast.error("You are not authorized to access this page.");
    // navigate("/unauthorized");
    navigate("/login");
    return null;
  }

  return currentUser ? <>{children}</> : null;
}

export default AdminProtectedRoute;
