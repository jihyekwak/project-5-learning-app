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
    return tellLearningAppTo.get(`${user}/profile/`)
}

const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    tellLearningAppTo.defaults.headers['Authorization'] = null;
}

export {register, login, currentUser, getProfile, logout}