import tellLearningAppTo from "./axios.config";

const auth = "/auth"

// const register = async (data) => {
//     return tellLearningAppTo
//             .post(`${auth}/register`, data)
//             .then((res)=> {
//                 console.log(res)
//             })
// }

const login = async (username, password) => {
    try {
        return tellLearningAppTo
        .post(`${auth}/`, {username, password})
        .then((res) => {
            console.log(res)
            if(res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data.token))
            }
            return res.data.token
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

export {login, currentUser, getProfile, logout}