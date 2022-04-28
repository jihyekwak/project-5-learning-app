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

const questionCreate = (data) => {
    return tellLearningAppTo.post(`${questions}/`, data)
}
export {getAll, getOne, create, questionCreate};