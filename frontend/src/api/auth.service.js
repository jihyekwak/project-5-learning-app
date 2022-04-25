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
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            localStorage.setItem('userId', res.data.access)
            tellLearningAppTo.defaults.headers['Authorization'] = 
                'JWT' + localStorage.getItem('access_token');
        })
    } catch (err) {
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("access_token")
    return JSON.parse(user)
}

const getProfile = () => {
    
}

const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}

export {register, login, currentUser, getProfile, logout}