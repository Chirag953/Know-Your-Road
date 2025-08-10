//get road by id for public view
import {axiosInstance} from '.';
export const getRoadById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/public/get-road/${id}`);
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
}