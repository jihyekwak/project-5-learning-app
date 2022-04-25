import tellLearningAppTo from "./axios.config";

const user = "/user"
const token = "/token"

const register = async (data) => {
    return tellLearningAppTo
            .post(`${user}/`, data)
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
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            tellLearningAppTo.defaults.headers['Authorization'] = 
                'JWT' + localStorage.getItem('access_token');
        })
    } catch (err) {
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user")
    return JSON.parse(user)
}

const getProfile = () => {
    
}

const logout = () => {
    localStorage.removeItem("user")
}

export {register, login, currentUser, getProfile, logout}