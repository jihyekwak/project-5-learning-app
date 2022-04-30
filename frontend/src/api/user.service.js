import tellLearningAppTo from "./axios.config";

const students = "/students";
const takenQuizzes = "/takenquizzes";

const getAllStudent = () => {
    return tellLearningAppTo.get(`${students}/`);
};

const getOneStudent = (id) => {
    return tellLearningAppTo.get(`${students}/${id}/`)
}

const createStudent = (data) => {
    return tellLearningAppTo.post(`${students}/`, data)
}

const editStudent = (id, data) => {
    return tellLearningAppTo.put(`${students}/${id}/`, data)
}

const destroyStudent = (id) => {
    return tellLearningAppTo.delete(`${students}/${id}/`)
}

const getAllTakenQuiz = () => {
    return tellLearningAppTo.get(`${takenQuizzes}/`);
};

const getOneTakenQuiz = (takenId) => {
    return tellLearningAppTo.get(`${takenQuizzes}/${takenId}/`)
};

const takenQuizCreate = (takendata) => {
    return tellLearningAppTo.post(`${takenQuizzes}/`, takendata)
};

const takenQuizUpdate = (takenId, takendata) => {
    return tellLearningAppTo.put(`${takenQuizzes}/${takenId}/`, takendata)
}

export {getAllStudent, getOneStudent, createStudent, editStudent, destroyStudent, getAllTakenQuiz, getOneTakenQuiz, takenQuizCreate, takenQuizUpdate};