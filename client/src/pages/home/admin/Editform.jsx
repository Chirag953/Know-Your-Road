import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFormById, getFormById } from "../../../apicalls/form";
import { hideLoader, showLoader } from "../../../redux/loadersSlice";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../../Components/Button";
import moment from "moment";
function Editform() {
  const [form, setForm] = React.useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.usersReducer);
  const navigate = useNavigate();
  const id = useParams().id;
  
   const deleteForm = async () => {
      try {
        dispatch(showLoader());
        const response = await deleteFormById(id);
        if (response.success) {
          toast.success(response.message);
          navigate("/admin-dashboard");
        } else {
          toast.error(response.message);
        }
        dispatch(hideLoader());
      } catch (error) {
        dispatch(hideLoader());
        toast.error(error.message || "Something went wrong");
      }
    };
  
  
  


  const getData = async () => {
    try {
      dispatch(showLoader());
      const response = await getFormById(id);
      if (response.success) {
        setForm(response.data);
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
   form && (
  <div className="flex flex-col h-screen">
    
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center py-4 max-w-[75rem] mx-auto">
        <div
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => navigate("/Admin-dashboard")}
        >
          KYR
        </div>

        <div className="bg-black text-white rounded p-2 flex gap-4">
          <h1 className="underline uppercase font-semibold">
            {currentUser.name}
          </h1>
          <i
            className="ri-logout-circle-r-line cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          ></i>
        </div>
      </div>
    </header>

    
    <div className="mt-20 px-5 flex justify-end gap-4">
      <Button
        title="Edit Form"
        variant="outlined"
        onClick={() => navigate(`/edit-form/${form._id}`)}
      />
      <Button title="Delete" variant="container" onClick={() => deleteForm()} />
    </div>

   
    <div className="flex flex-1 justify-center items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Road Project Details
        </h1>

        <div className="space-y-4 text-lg">
          <p><strong>Road Name:</strong> {form.roadName}</p>
          <p><strong>Location:</strong> {form.location}</p>
          <p><strong>Estimated Cost:</strong> {form.estimatedCost}</p>
          <p>
            <strong>Completion Date:</strong>{" "}
            {new Date(form.completionDate).toLocaleDateString()}
          </p>
          <p><strong>Builder:</strong> {form.builder}</p>
          <p><strong>Officer:</strong> {form.officer}</p>
          <p><strong>Government Role:</strong> {form.governmentRole}</p>
        </div>

        <hr className="my-6" />
        <div>
          <h1>Posted By: {form.user.name}</h1>
          <h1>
            Posted On:{" "}
            {moment(form.createdAt).format("DD-MM-YYYY, hh:mm:ss A")}
          </h1>
        </div>
      </div>
    </div>
  </div>
)
  );
}

export default Editform;
