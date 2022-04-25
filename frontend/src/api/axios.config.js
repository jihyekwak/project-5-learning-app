import axios from "axios";

const backendAPI = "http://127.0.0.1:8000/api/"

// const user = JSON.parse(localStorage.getItem("user"))

const tellLearningAppTo = axios.create({
    baseURL: `${backendAPI}`,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT' + localStorage.getItem('access_token')
            : null,
            "Content-type" : "application/json",
            accept: 'application/json'
    },
});

export default tellLearningAppTo;