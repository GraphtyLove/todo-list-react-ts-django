import React from 'react'


const useFetch = (url: string, options?: RequestInit): [{}, boolean | string, boolean] => {
    const isMounted = React.useRef(true)
    const [response, setResponse] = React.useState({})
    const [error, setError] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        if (isMounted.current) {
            if (!url) {
                return
            }

            setIsLoading(true)

            const fetchData = () => {
                return fetch(url, options)
                    .then(res => res.json())
                    .then(jsonData => {
                        setIsLoading(false)
                        setResponse({
                            endPoint: url,
                            status: 200,
                            error: false,
                            data: jsonData
                        })
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

    return [response, error, isLoading]
}

export default useFetch