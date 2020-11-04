import React, {SetStateAction, useEffect, useState} from "react"
import getTokenExpirationDate from "../utils/jwt";

interface JwtData {
    accessToken: string,
    refreshToken: string,
    isLogged: boolean,
    isLoading: boolean,
    error: boolean,
}

const useJwt = (): [JwtData, React.Dispatch<SetStateAction<JwtData>>] => {
    const [data, setData] = useState({
        accessToken: '',
        refreshToken: '',
        isLogged: false,
        isLoading: true,
        error: false,
    })

    useEffect(() => {
        (async () => {
            console.log("getting JWTs...")
            const localStorageAccessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ""
            const localStorageRefreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : ""

            if (localStorageAccessToken
                && getTokenExpirationDate(localStorageAccessToken) > new Date()
                && localStorageRefreshToken
                && getTokenExpirationDate(localStorageRefreshToken) > new Date()
            ) {
                console.log('ACCESS token still valid!')
                setData({
                    accessToken: localStorageAccessToken,
                    refreshToken: localStorageRefreshToken,
                    isLogged: true,
                    isLoading: false,
                    error: false
                })
            } else if (
                localStorageRefreshToken
                && getTokenExpirationDate(localStorageRefreshToken) > new Date()
            ){
                console.log('ACCESS Token expired, but REFRESH Token valid! Getting a new access token...')
                try {
                    const response = await fetch('/api/token/refresh/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            refresh: localStorageRefreshToken
                        })
                    })
                    const responseData = await response.json()
                    if (response.ok) {
                        console.log('New access token generated: ', responseData.access)
                        localStorage.setItem('accessToken', responseData.access)
                        setData({
                            accessToken: responseData.access,
                            isLogged: true,
                            refreshToken: localStorageRefreshToken,
                            isLoading: false,
                            error: false
                        })
                    } else {
                        console.log('Error during the generation of a new ACCESS token...')
                        setData({
                            accessToken: '',
                            refreshToken: '',
                            isLogged: true,
                            isLoading: false,
                            error: true
                        })
                    }
                } catch (err) {
                    console.log('Error during JWT generation: ', err)
                    setData({
                        accessToken: '',
                        refreshToken: '',
                        isLogged: true,
                        isLoading: false,
                        error: true
                    })
                }
            } else {
                console.log('REFRESH token expired!')
                setData({
                    accessToken: '',
                    refreshToken: '',
                    isLogged: false,
                    isLoading: false,
                    error: true
                })
            }



        })()
    }, [])

    return [data, setData]
}



export default useJwt