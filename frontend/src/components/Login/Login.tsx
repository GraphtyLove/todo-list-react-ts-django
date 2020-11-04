import React, { useState, SetStateAction } from 'react'
import './Login.sass'
export interface JwtData {
    accessToken: string,
    refreshToken: string,
    isLogged: boolean,
    isLoading: boolean,
    error: boolean,
}

interface Props {
    setData: React.Dispatch<SetStateAction<JwtData>>
}

const Login = ({ setData }: Props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.currentTarget.value)
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.currentTarget.value)
    }

    const handleSubmit = () => {
        (async () => {
            console.log('Fetch login with: ', username, password)
            try {
                const response = await fetch('/api/token/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
                const responseData = await response.json()
                if (response.ok) {
                    localStorage.setItem('refreshToken',responseData.refresh)
                    localStorage.setItem('accessToken', responseData.access)
                    setData(value => ({...value, isLogged: true}))
                } else {
                    setErrorMessage(`ERROR NOT CATCH: ${JSON.stringify(responseData)}`)
                }
            } catch (err) {
                setErrorMessage(err)
            }
        })()
}



    return (
        <div className='login-page' >
            <div className="blur"/>
            <div className="global-container">
                <main>
                    <div id="login-form">
                        <section className="form-header">
                            <h1>My Space</h1>
                        </section>
                        <section className="form-main">
                            <section className="form-txt-input-container">
                                <section className="txt-container username-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="24" height="24"
                                         viewBox="0 0 50 50"
                                         style={{fill: '#a5aac7'}}>
                                        <path d="M 25.90625 3.28125 C 16.566406 3.492188 15.507813 10.316406 17.5 18.1875 C 17.1875 18.398438 16.550781 19.148438 16.65625 20.40625 C 16.96875 22.714844 17.914063 23.34375 18.4375 23.34375 C 18.648438 24.917969 19.390625 26.574219 20.125 27.625 C 20.648438 28.359375 20.84375 29.304688 20.84375 30.25 C 20.84375 31.089844 20.855469 30.554688 20.75 31.5 C 20.644531 31.804688 20.496094 32.082031 20.3125 32.34375 C 20.527344 33.152344 21.765625 37 26 37 C 30.335938 37 31.5 32.847656 31.625 32.34375 C 31.429688 32.085938 31.273438 31.804688 31.15625 31.5 C 31.050781 30.347656 31.03125 30.882813 31.03125 29.9375 C 31.03125 29.097656 31.359375 28.378906 31.78125 27.75 C 32.515625 26.699219 33.226563 24.917969 33.4375 23.34375 C 34.070313 23.34375 35.007813 22.714844 35.21875 20.40625 C 35.324219 19.148438 34.828125 18.398438 34.40625 18.1875 C 35.457031 15.25 37.433594 6.132813 30.71875 5.1875 C 29.984375 3.929688 28.214844 3.28125 25.90625 3.28125 Z M 33.28125 33.75 C 32.441406 35.984375 30.21875 39 26 39 C 21.777344 39 19.5625 36.039063 18.6875 33.78125 C 14.53125 36.339844 6.0625 37.125 6.0625 46 L 45.9375 46 C 45.9375 36.898438 37.507813 36.273438 33.28125 33.75 Z" />
                                    </svg>
                                    <input type="text" onChange={handleChangeUsername} className="form-control" placeholder="Username" autoFocus />
                                </section>
                                <section className="txt-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="24" height="24"
                                         viewBox="0 0 50 50"
                                         style={{ fill: '#a5aac7' }}>
                                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z" />
                                    </svg>
                                    <input type="password" onChange={handleChangePassword} placeholder="••••••••" className="form-control" />
                                </section>
                            </section>
                            <section className="form-submit-container">
                                <div className='ribbon'>
                                    <button onClick={handleSubmit} className="submit-button">INPUT</button>
                                </div>
                            </section>
                            <section className="form-footer">
                                <p>
                                    Forgot password? <a href="mailto:maxim.berge@gmail.com">Click here</a>
                                </p>
                            </section>
                        </section>
                    </div>
                    {errorMessage && <section>
                        <p className="label label-danger">
                            Your username and password didn't match.
                            Please try again.
                        </p>
                    </section>}

                </main>
            </div>
        </div>
    )
}

export default Login