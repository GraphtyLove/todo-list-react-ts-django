import { useEffect, useState } from 'react'

interface FetchData {
    responseData: any,
    error: boolean,
    isLoading: boolean
}

const useFetchApi = (url: string, accessToken?: string, method: string = 'GET'): FetchData => {
    const [data, setData] = useState({
        responseData: [],
        error: false,
        isLoading: false
    })

    useEffect(() => {
        (async () => {
            console.log(`Fetch ${url}...`)
            console.log('options: ',  method, accessToken)
            try {
                const response = await fetch(url, {
                    method: method,
                    headers: {
                        Authorization: 'Bearer ' + accessToken
                    }
                })
                const responseData = await response.json()
                if (response.ok) {
                    console.log('Fetch success!')
                    setData({
                        responseData: responseData,
                        error: false,
                        isLoading: false
                    })
                }
                else {
                    console.log('Fetch error: ', responseData)
                }
            } catch (err) {
                console.log('Fetch error catch: ', err)
            }
        })()
    }, [url, method, accessToken])

    return data
}

export default useFetchApi

// const fetchData = () => {
//     return fetch(url, options)
//         .then(res => res.json())
//         .then(jsonData => {
//             setIsLoading(false)
//             setData(jsonData)
//         })
//         .catch(err => {
//             console.log(err)
//             setIsLoading(false)
//             setError(err)
//         })
// }
// fetchData()