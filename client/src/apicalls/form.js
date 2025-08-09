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
