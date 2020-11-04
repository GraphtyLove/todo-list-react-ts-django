import React from 'react'
import './App.sass'
import useJwt from "hooks/useJwt"

import TaskContainer from "components/TaksContainer/TaskContainer"
import Login from "components/Login/Login";


function App() {

    const [{ isLogged, isLoading }, setData] = useJwt()
    const logout = () => {
        console.log('log out...')
        localStorage.clear()
        setData(value => ({...value, isLogged: false}))
    }

    return (
        <div className="App">
            {isLogged && <button onClick={logout}>Log out</button>}
            {!isLogged && !isLoading && <Login setData={setData} />}
            {isLogged &&  <TaskContainer />}
        </div>
    )
}

export default App
