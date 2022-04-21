import axios from "axios";

const backendAPI = "/api"

const tellLearningAppTo = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type" : "application/json",
    },
});

export default tellLearningAppTo;