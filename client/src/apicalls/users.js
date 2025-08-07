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
