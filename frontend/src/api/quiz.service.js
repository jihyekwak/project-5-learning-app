import tellLearningAppTo from "./axios.config";

const quizzes = "/api/quizzes";

const getAll = () => {
    return tellLearningAppTo.get(`${quizzes}/`);
};

const getOne = (id) => {
    return tellLearningAppTo.get(`${quizzes}/${id}`)
}

const create = (data) => {
    return tellLearningAppTo.post(`${quizzes}/`, data)
}
export {getAll, getOne, create};