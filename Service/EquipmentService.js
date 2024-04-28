import axios from "axios";

const BASE_URL = "https://localhost:8080/";

export async function addEquipment(equipment){
    const jwtToken = localStorage.getItem('token');
    const result =await axios.post(`${BASE_URL}equipment`,equipment , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("service addEquipment ",result.data);
    return result.data;
}

export async function getEquipmentById(id) {
    try {
        const jwtToken = localStorage.getItem('token');
        const result = await axios.get(`${BASE_URL}equipment/${id}`,  {
            headers: { Authorization: `${jwtToken}`,},
          });
          console.log(result.data);
        return result.data; // Assuming the response contains equipment data
    } catch (error) {
        console.error('Error fetching equipment by ID:', error);
        throw error;
    }
}
export async function getAllEquipments2() {
    const result = await axios.get(`${BASE_URL}equipmment/all`);
    console.log("service getAllEquipments",result);
    return result.data ;
}
export async function getAllEquipments() {
    const jwtToken = localStorage.getItem('token');
    try {
      const result = await axios.get(`${BASE_URL}equipment/all`, {
        headers: { Authorization: `${jwtToken}`,},
      });
      console.log("service getAllEquipments", result.data);
      return result.data;
    } catch (error) {
      // Handle errors appropriately (e.g., log, throw, etc.)
      console.error('Error in getAllEquipments:', error);
      throw error;
    }
}

export async function getEquipmentByName(equipmentName) {
    const jwtToken = localStorage.getItem('token');
    const result = await axios.get(`${BASE_URL}equipment/${equipmentName}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
   // const response = await axios.get(`${BASE_URL}equipment-name`,equipment);
console.log(result);
    console.log("service equipments ByName",result);
    return result;
}

export async function getEquipmentsById(id) {
    const jwtToken = localStorage.getItem('token');
    console.log(id);
    const result = await axios.get(`${BASE_URL}equipment/${id}` , {
        headers: { Authorization: `${jwtToken}`,},
      } );
    console.log("service equipmentByType",result.data);
    return result.data;
}


export async function getEquipmentsByType(type) {
    const jwtToken = localStorage.getItem('token');
    const result = await axios.get(`${BASE_URL}equipment/${type}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("service equipmentByType",result.data);
    return result.data;
}

export async function getEquimentsByExpirydate() {
    const jwtToken = localStorage.getItem('token');
    const result = await axios.get(`${BASE_URL}equipment/expirydate` , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("service equipmentByExpirydate",result.data);
    return result.data;
}

export async function updateEquipment(equipment) {
    const jwtToken = localStorage.getItem('token');
    const id = equipment.id;
    const result = await axios.put(`${BASE_URL}equipment/update/${id}`,equipment , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("service updateEquipment",result.data);
    return result.data ;
}

export async function updateEquipmentStatus() {
  const jwtToken = localStorage.getItem('token');
  const result = await axios.get(`${BASE_URL}equipment/updateEquipmentStatus` , {
      headers: { Authorization: `${jwtToken}`}
    }) ;
  console.log(result);
      return result;
}

export async function  deleteEquipment(id) {
    const jwtToken = localStorage.getItem('token');
    const result = await axios.delete(`${BASE_URL}equipment/delete/${id}` , {
        headers: { Authorization: `${jwtToken}`}
      });
    console.log("service delteEquipment",result.data);
    return result.data;   
}

export async function getAllEqpsPaginated(pageNumber , pageSize){
  const jwtToken = localStorage.getItem('token');
  console.log(jwtToken);
  const result = await axios.get(`${BASE_URL}equipment/page/${pageNumber}/${pageSize}` ,{
    headers :{Authorization: `${jwtToken}`}
  });
  console.log(result.data);
  return result.data;
}

export async function downloadImage(eId){
  const jwtToken =localStorage.getItem('token');
  const result = await axios.get(`${BASE_URL}equipment/images/${eId}` ,{
    headers : {Authorization: `${jwtToken}`}
  });
  console.log(result);
  return result;
}


export async function uploadImage(eId, image) {
  const jwtToken = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('image', image);

  try {
    const result = await axios.post(`${BASE_URL}equipment/image/${eId}`, formData, {
      headers: {
        Authorization: jwtToken,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error uploading image:', error);
    throw error;
  }
}


// export async function uploadImage(eId ,image ) {
//   const jwtToken = localStorage.getItem('token');
// console.log(image);
//   const result = await axios.post(`${BASE_URL}equipment/image/${eId}`,  {
//     headers: {
//       Authorization: `${jwtToken}`,
//       'Content-Type': 'multipart/image',
//     },
//   });
//   return result;
// }


