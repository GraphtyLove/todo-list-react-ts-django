import React from 'react'
import './App.sass'
import TaskContainer from "components/TaksContainer/TaskContainer"
import useJwt from "hooks/useJwt";


function App() {

    const { isLogged } = useJwt()

    if (!isLogged){
        console.log('login...')
    }

    return (
        <div className="App">
            <h1>To do list</h1>
            <TaskContainer />
        </div>
    );
}

export default App
