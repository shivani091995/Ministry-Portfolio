import axios from "axios" ;
const BASE_URL = "https://localhost:8080/quiz";
const jwtToken = localStorage.getItem('token');



export async function getQuizTitle(quizId){   
    const result =await axios.get(`${BASE_URL}/${quizId}` 
     
      //{ headers: { Authorization: `${jwtToken}`,},}
      );
    console.log("Edu Quiz getQuizById ", result.data);
    return result.data;
}

export async function getAllQuizes(){   
  console.log(jwtToken);
    const result =await axios.get(`${BASE_URL}`, {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("Edu Quiz getAllquizes ", result.data);
    return result;
}

export async function getQuizAndQuestion(quizId){   
    const result =await axios.get(`${BASE_URL}/questions/${quizId}` , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("Edu Quiz getQuizAndIsQuestions ", result.data);
    return result.data;
}

export async function createQuiz(quiz){   
    const result =await axios.post(`${BASE_URL}`,quiz , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("Edu Quiz createQuiz ", result.data);
    return result.data;
}

export async function submitQuiz(quizId,quiz){   
    const result =await axios.post(`${BASE_URL}/submitquiz/${quizId}`,quiz , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("Edu Quiz addQuiz ", result.data);
    return result.data;
}

export async function addQuestion(quizId,question){   
    const result =await axios.post(`${BASE_URL}/addQuestion/${quizId}`,question , {
        headers: { Authorization: `${jwtToken}`,},
      });
    console.log("Edu Quiz addQuestion to Quiz ", result.data);
    return result.data;
}

