import tellLearningAppTo from "./axios.config";
import jwt_decode from "jwt-decode";

const users = "/users"
const token = "/token"

const register = async (data) => {
    return tellLearningAppTo
            .post(`${users}/`, data)
            .then((res)=> {
                console.log(res)
            })
}

const login = async (username, password) => {
    try {
        return tellLearningAppTo
        .post(`${token}/`, {username, password})
        .then((res) => {
            console.log(res)
            console.log(jwt_decode(res.data.access).user_id)
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            localStorage.setItem('user', jwt_decode(res.data.access).user_id)
            tellLearningAppTo.defaults.headers['Authorization'] = 
                'JWT' + localStorage.getItem('access_token');
        })
    } catch (err) {
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("access_token")
    return user
}

const getProfile = () => {
    let userId = localStorage.getItem('user')
    return tellLearningAppTo.get(`${users}/${userId}/`)
}

const editProfile = (id, data) => {
    // let userId = localStorage.getItem('user')
    return tellLearningAppTo
            .put(`${users}/${id}/`, data)
            .then((res) => {
                console.log(res)
            })
}

const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    tellLearningAppTo.defaults.headers['Authorization'] = null;
}

export {register, login, currentUser, getProfile, editProfile, logout}