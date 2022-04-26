import tellLearningAppTo from "./axios.config";

const students = "/students";

const getAll = () => {
    return tellLearningAppTo.get(`${students}/`);
};

const getOne = (id) => {
    return tellLearningAppTo.get(`${students}/${id}/`)
}

const create = (data) => {
    return tellLearningAppTo.post(`${students}/`, data).then(res => console.log(res))
}
export {getAll, getOne, create};