import React from 'react';
import './App.sass';
import TaskContainer from "./components/TaksContainer/TaskContainer";

function App() {
    return (
        <div className="App">
            <h1>To do list</h1>
            <TaskContainer />
        </div>
    );
}

export default App;
