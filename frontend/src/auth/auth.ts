// import getTokenExpirationDate from "./utils";
//
// let accessToken: string = ""
//
// export const setAccessToken = (accessTokenValue:  string) => {
//     accessToken = accessTokenValue
// }
//
// export const getAccessToken = async (): Promise<string> => {
//     const refreshToken = localStorage.getItem('refreshToken')
//     if (accessToken && getTokenExpirationDate(accessToken) > new Date()) {
//         return accessToken
//     } else if (refreshToken && getTokenExpirationDate(refreshToken) > new Date()) {
//         accessToken = await getNewAccessToken(refreshToken)
//         return accessToken
//     } else {
//         return ""
//     }
// }
//
// export const login = async (username: string, password: string): Promise<string> => {
//     console.log('login...')
//     await fetch('/api/token/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password
//         })
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             accessToken = data.access
//             localStorage.setItem('refreshToken', data.refresh)
//         })
//     return accessToken
// }
//
//
// const logout = () => {
//     console.log('log out...')
//     accessToken = ""
//     localStorage.clear()
// }
//
//
// const getNewAccessToken = async (refreshToken: string): Promise<string> => {
//     await fetch('http://localhost:8000/api/token/refresh/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//             body: JSON.stringify({
//                 refresh: refreshToken
//             })
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             localStorage.setItem('accessToken', data.access)
//             console.log('Token refreshed!')
//             accessToken = data.access
//         })
//     return accessToken
// }
//
// const isAuthenticated = (): boolean  => {
//     const refreshToken = localStorage.getItem('refreshToken')
//     return !!((accessToken && getTokenExpirationDate(accessToken) > new Date())
//         || (refreshToken && getTokenExpirationDate(refreshToken) > new Date()));
// }

export const test = 'ok'

