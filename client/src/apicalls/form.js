import {axiosInstance} from '.';

//add a new form
export const AddnewForm = async (payload) => {

  try {
    const response = await axiosInstance.post('/api/forms/add-form', payload);
    return response.data;

  } catch (error) {
    throw error || error.response.data;
  }
};
//get all forms
export const getAllForms = async () => {
  try {
    const response = await axiosInstance.get('/api/forms/get-all-forms');
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
};
//get form by id
export const getFormById = async (id) => {
  try {
    console.log("Fetching form with ID:", id);
    const response = await axiosInstance.get(`/api/forms/get-form/${id}`);
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
}
//update form by id
export const updateFormById = async (payload) => {  
  try {
    const response = await axiosInstance.put(`/api/forms/update-form/${payload.id}`, payload);
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
} 
//delete form by id
export const deleteFormById = async (id) => { 
  try {
    const response = await axiosInstance.delete(`/api/forms/delete-form/${id}`);
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
} 
