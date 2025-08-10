import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../Components/Button";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../../redux/loadersSlice";
import { AddnewForm, updateFormById } from "../../../apicalls/form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFormById } from "../../../apicalls/form";

function AddEditForm() {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roadName: "",
    location: "",
    estimatedCost: "",
    completionDate: "",
    builder: "",
    officer: "",
    governmentRole: "",
  });
   
  
  const submitInfo = async () => {
     let response;
    try {
      dispatch(showLoader());
      if (id) {
        response = await updateFormById({ ...formData, id });
      } else {
        response = await AddnewForm({ ...formData, user: currentUser._id });
      }
      if (response.success) {
        toast.success(response.message);
        navigate("/Admin-dashboard");
      } else {
        toast.error(response.message);
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      toast.error(error.message);
    }
  };
  const getData = async () => {
    try {
      dispatch(showLoader());
      const response = await getFormById(id);
      if (response.success) {
        setFormData(response.data);
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
    if (id) {
      getData();
    }
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="flex justify-between items-center py-4 max-w-[75rem] mx-auto px-4">
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

      <div className="flex-grow bg-gray-100 pt-28 pb-20 overflow-y-auto">
        <div className="flex justify-center px-4">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              {id ? "Road Project Details Edit" : "Road Project Details"}
            </h2>

            <input
              name="roadName"
              value={formData.roadName}
              onChange={(e) =>
                setFormData({ ...formData, roadName: e.target.value })
              }
              placeholder="Road Name"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              name="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Location"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              name="estimatedCost"
              value={formData.estimatedCost}
              onChange={(e) =>
                setFormData({ ...formData, estimatedCost: e.target.value })
              }
              type="number"
              placeholder="Estimated Cost"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              name="completionDate"
              value={formData.completionDate}
              onChange={(e) =>
                setFormData({ ...formData, completionDate: e.target.value })
              }
              type="date"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              name="builder"
              value={formData.builder}
              onChange={(e) =>
                setFormData({ ...formData, builder: e.target.value })
              }
              placeholder="Builder / Contractor"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              name="officer"
              value={formData.officer}
              onChange={(e) =>
                setFormData({ ...formData, officer: e.target.value })
              }
              placeholder="Officer in Charge"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              name="governmentRole"
              value={formData.governmentRole}
              onChange={(e) =>
                setFormData({ ...formData, governmentRole: e.target.value })
              }
              placeholder="Government Role at the Time"
              className="w-full border border-gray-300 rounded p-2"
            />

            <Button
              title="Submit"
              onClick={submitInfo}
              disabled={
                formData.roadName.length < 3 ||
                formData.location.length < 3 ||
                formData.estimatedCost.length < 3 ||
                formData.completionDate.length < 3 ||
                formData.builder.length < 3 ||
                formData.officer.length < 3 ||
                formData.governmentRole.length < 3
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditForm;
