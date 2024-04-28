import axios from "axios";

const BASE_URL = "https://localhost:8080/";

export function isAuthenticated(){
  //  if(localStorage.getItem("role"==="user"))
    return localStorage.getItem("token")? true : false;
 //   return false;
    }
export function isAdminAuthenticated() {
  //  if(localStorage.getItem("role"==="admin"))
    return localStorage.getItem("token")? true : false;
    //return false;
}

export async function adminlogin(creditials){
    const response =await axios.post(`${BASE_URL}users/signin`,creditials);
    console.log(response);
    return response;
}

export async function login(creditials){
    console.log("Before Sending ", creditials);
    const response =await axios.post(`${BASE_URL}users/signin`,creditials);
    console.log("response ",response);
    return response;
}

// export async function signup(user){
//     console.
//     const response = await axios.post(`${BASE_URL}register-user`,user);
//     return response.data;
// }

export async function signup(user) {
    try {
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('name', user.name);
        formData.append('password', user.password);
        formData.append('confirmPassword', user.confirmPassword);
        formData.append('phone', user.phone);
        console.log(user);
        console.log(formData);
        //formData.append('profilepic', user.profilepic); // Assuming user.profilepic is the File object

        const response = await axios.post(`${BASE_URL}users/signup`, user );

        return response;
    } catch (error) {
        // Handle errors here
        console.error('Error during signup:', error);
        throw error;
    }
}

export async function getUser(id){
    try {
        const jwtToken = localStorage.getItem('token');
       const response = await axios.get(`${BASE_URL}user/${id}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
      console.log(response.data);
        return response.data;
       
    } catch (error) {
        console.log(error);
    }
}

export async function getAllUsers(){
    try {
        const jwtToken = localStorage.getItem('token');
        return await axios.get(`${BASE_URL}admin/fetchusers` , {
            headers: { Authorization: `${jwtToken}`,},
          });
    } catch (error) {
        console.log(error);
    }
}

export async function getUserProfilePic(id){
    try {
        const jwtToken = localStorage.getItem('token');
       const response = await axios.get(`${BASE_URL}user/images/${id}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function uploadProfilePic(id ,image){
    try {
        const formData = new FormData();
        formData.append('image',image);
        console.log(formData);
       // const jwtToken = localStorage.getItem('token');
       const response = await axios.post(`${BASE_URL}user/images/${id}` ,formData, {
        headers: { 
            // Authorization: `${jwtToken}`,
        'Content-Type' : 'multipart/form-data'
        },
      });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(id){
    try {
        const jwtToken = localStorage.getItem('token');
        const response = await axios.delete(`${BASE_URL}user/${id}` , {
            headers: { Authorization: `${jwtToken}`,},
          })
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(id ,updatedData){
    try {
      //  console.log(updatedData);
        const jwtToken = localStorage.getItem('token');
        console.log(updatedData, jwtToken);
        const response=await axios.put(`${BASE_URL}user/${id}`,updatedData , {
            headers: { Authorization: `${jwtToken}`,},
          });
          console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function forgotPassword(email){
const result = await axios.post(`${BASE_URL}users/forgot/?email=${email}`) 
console.log(result);
return result ;
}

 export async function resetPassword(requestbody){
     console.log( requestbody);
     const result = await axios.post(`${BASE_URL}users/resetpassword`,requestbody) ;
    //  const result = null;
     console.log(result);
     return result ;
  }

