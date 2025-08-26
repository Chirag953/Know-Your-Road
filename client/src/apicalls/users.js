import {  axiosInstance }from ".";


//register user 
export const RegisterUser = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/users/register', payload);
        return response.data;
    }
    catch(error){ 
         console.log("Error in register route:", error);
        throw error || error.response.data|| "Something went wrong";
    }
    
};
 
//login user
export const LoginUser = async (payload) => {   
    try{
        const response = await axiosInstance.post('/api/users/login', payload);
        return response.data;
    }
    catch(error){
        throw error || error.response.data|| "Something went wrong";
    }
    
}
//get user details
export const GetUser = async () => {
    try{
        const response = await axiosInstance.get('/api/users/getuser');
        return response.data;
    }
    catch(error){
        throw error || error.response.data|| "Something went wrong";
        
    }
    
};

//add comment
 

export const AddComment=async(payload)=>{
    try {
        const response= await axiosInstance.post("/api/users/add-Testimonial",payload)
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

//get all comments
export const GetAllcomment=async(id)=>{
     try {
        const response= await axiosInstance.get(`/api/users/get-all-Testimonial/:id${id}`)
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}