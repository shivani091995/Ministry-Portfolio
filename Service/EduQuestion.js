import axios from "axios" ;
const BASE_URL = "https://localhost:8080/question";
const jwtToken = localStorage.getItem('token');

export async function getAllQuestion(){   
    const result =await axios.get(`${BASE_URL}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("In Edu Question getAllQuestion ", result.data);
    return result.data;
}

export async function getQuestionByTopic(name){   
    const result =await axios.get(`${BASE_URL}/module/${name}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("In Edu Question getQuestionByTopic ", result.data);
    return result.data;
}

export async function insertQuestion(question){   
    const result =await axios.post(`${BASE_URL}`,question , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("In Edu Question insertQuestion ", result.data);
    return result.data;
}

export async function deleteQuestion(question){   
    const result =await axios.delete(`${BASE_URL}`,question , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("In Edu Question deleteQuestion ", result.data);
    return result.data;
}

