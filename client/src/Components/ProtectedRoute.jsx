import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { GetUser } from "../apicalls/users";
import { SetCurrentUser } from "../redux/usersSlice";
import { showLoader } from "../redux/loadersSlice";

function UserProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      dispatch(showLoader());
      const response = await GetUser();
      if (response.success) {
        dispatch(SetCurrentUser(response.data));
      } else {
        toast.error(response.message);
        navigate("/login");
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
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

  // Block if user is admin
  if (currentUser && currentUser.role === "admin") {
    // navigate("/unauthorized");
    navigate("/login");
    toast.error("You are not authorized to access this page.");
    return null;
  }

  return currentUser ? <>
  {children}
  {currentUser.name}
  
  </> : null;
}

export default UserProtectedRoute;
