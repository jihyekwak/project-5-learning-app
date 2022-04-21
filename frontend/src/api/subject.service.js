import tellLearningAppTo from "./axios.config";

const subjects = "/subjects/";

const getAll = () => {
    return tellLearningAppTo.get(`${subjects}`);
};

export {getAll};