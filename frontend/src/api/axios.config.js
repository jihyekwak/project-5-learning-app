import axios from "axios";

const backendAPI = "http://localhost:8000"

const user = JSON.parse(localStorage.getItem("user"))

const tellLearningAppTo = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type" : "application/json",
        authorization: `Bearder ${user}`
    },
});

export default tellLearningAppTo;