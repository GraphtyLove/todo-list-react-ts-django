import React from 'react'

function useFetch<T>(url: string, options?: RequestInit): T {
    const isMounted = React.useRef(true)

    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    console.log(`Fetch ${url}...`)

    React.useEffect(() => {
        if (isMounted.current) {
            if (!url) {
                return
            }
            const fetchData = () => {
                return fetch(url, options)
                    .then(res => res.json())
                    .then(jsonData => {
                        setIsLoading(false)
                        setData(jsonData)
                    })
                    .catch(err => {
                        console.log(err)
                        setIsLoading(false)
                        setError(err)
                    })
            }
            fetchData()
        }

        return () => {
            isMounted.current = false
        }
    }, [url, options])

    return {data, error, isLoading} as unknown as T
}

export default useFetch