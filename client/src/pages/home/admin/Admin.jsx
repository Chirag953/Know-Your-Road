import React, { useEffect } from "react";
import Button from "../../../Components/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllForms } from "../../../apicalls/form";
import { hideLoader, showLoader } from "../../../redux/loadersSlice";
import toast from "react-hot-toast";
import DisplayForm from "./DisplayForm";
function Admin({ user }) {
  const [forms, setForms] = React.useState([]);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.usersReducer);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      dispatch(showLoader());
      const response = await getAllForms();
      if (response.success) {
        setForms(response.data);
      } else {
        toast.error(response.message);
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      toast.error(error.message);
    }

  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50  ">
        <div className="flex justify-between items-center py-4 max-w-[75rem] mx-auto">
          <div className="text-2xl font-bold text-primary cursor-pointer">
            KYR
          </div>

          <div className="bg-black text-white rounded p-2 flex gap-4">
            <h1 className="underline uppercase font-semibold">
              {currentUser.name}
            </h1>
            <i className="ri-logout-circle-r-line cursor-pointer"
            onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>
      </header>
      <div className="mt-20 p-5 flex justify-between">
        <h1 className="text-2xl font-bold">Welcome, {currentUser.name}!</h1>
        <Button
          title="Add New"
          variant="outlined"
          onClick={() => navigate("/add-form")}
        />

       
      </div>
       <div className="grid grid-cols-2 gap-5 mt-1">
          {forms.map((form) => (
            <DisplayForm key={form.id} form={form} />
          ))}
        </div>
    </>
  );
}

export default Admin;
