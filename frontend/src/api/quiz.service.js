import tellLearningAppTo from "./axios.config";

const quizzes = "/quizzes";
const questions = "/questions";

const getAll = () => {
    return tellLearningAppTo.get(`${quizzes}/`);
};

const getOne = (id) => {
    return tellLearningAppTo.get(`${quizzes}/${id}/`)
}

const create = (data) => {
    return tellLearningAppTo.post(`${quizzes}/`, data)
}

const destroy = (id) => {
    return tellLearningAppTo.delete(`${quizzes}/${id}/`)
}

const questionCreate = (data) => {
    return tellLearningAppTo.post(`${questions}/`, data)
}

const questionDestroy = (id) => {
    return tellLearningAppTo.delete(`${questions}/${id}/`)
}
export {getAll, getOne, create, destroy, questionCreate, questionDestroy};