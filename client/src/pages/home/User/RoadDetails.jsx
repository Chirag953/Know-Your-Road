import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoadById } from "../../../apicalls/publicRoadView";
import toast from "react-hot-toast";
import { hideLoader, showLoader } from "../../../redux/loadersSlice";
import { useDispatch } from "react-redux";

function RoadDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [road, setRoad] = useState(null);

  useEffect(() => {
    const getRoad = async () => {
      try {
        dispatch(showLoader());
        const response = await getRoadById(id);
        if (response.success) {
          setRoad(response.data);
          toast.success("Road details fetched successfully");
        } else {
          toast.error(response.message);
        }
      } catch (err) {
        toast.error(err.message || "Something went wrong");
      } finally {
        dispatch(hideLoader());
      }
    };
    getRoad();
  }, [id, dispatch]);

  // Loading state
  if (!road) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading road details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 justify-center items-center h-screen bg-gray-200">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Road Project Details
        </h1>

        <div className="space-y-4 text-lg">
          <p><strong>Road Name:</strong> {road.roadName}</p>
          <p><strong>Location:</strong> {road.location}</p>
          <p><strong>Estimated Cost:</strong> {road.estimatedCost}</p>
          <p>
            <strong>Completion Date:</strong>{" "}
            {road.completionDate
              ? new Date(road.completionDate).toLocaleDateString()
              : "N/A"}
          </p>
          <p><strong>Builder:</strong> {road.builder}</p>
          <p><strong>Officer:</strong> {road.officer}</p>
          <p><strong>Government Role:</strong> {road.governmentRole}</p>
        </div>
      </div>
    </div>
  );
}

export default RoadDetails;
