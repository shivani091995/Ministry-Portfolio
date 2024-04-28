import axios from "axios";

const BASE_URL = "https://localhost:8080/manufacturer";
const jwtToken = localStorage.getItem('token');



export async function getManufacturer(manuId){
    const result = await axios.get(`${BASE_URL}/${manuId}`,{
        headers: { Authorization: `${jwtToken}`}
    })
    console.log(result);
    return result;
}

export async function addManufacturer(manufacturer){
    const result = await axios.post(`${BASE_URL}`,manufacturer,{
        headers: { Authorization: `${jwtToken}`}
    })
    console.log(result);
    return result;
}

export async function getAllManufacturer(){
    const result = await axios.get(`${BASE_URL}` ,{
        headers: { Authorization: `${jwtToken}`}
    })
    console.log(result.data);
    return result.data;
}

// export async function getManufacturer(manuId){
//     const result = await axios.put(`${BASE_URL}/${manuId}`,{
//         headers: { Authorization: `${jwtToken}`}
//     })
//     console.log(result);
//     return result;
// }