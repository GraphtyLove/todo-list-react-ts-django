import React from 'react';
import TaskColumn from "../TaskColumn/TaskColumn";

import { Task } from 'interfaces/Task'

import './TaskContainer.sass'
import useFetchApi from "hooks/useFetch";
import useJwt from "hooks/useJwt";

const TaskContainer = () => {

    const [{ accessToken, isLoading: jwtLoading }] = useJwt()

    const tasks = useFetchApi ('/api/tasks', accessToken)

    const columnList = ['Backlog', 'Sprint', 'In progress', 'Stuck/Review', 'Done']

    const filterData = (data: Array<Task>, status: string): Array<Task> => data.filter(task => task.state === status)

    console.log(tasks)

    return (
        <>
        <h1>To do list</h1>
        { (tasks.isLoading || jwtLoading) && <p>LOADING...</p>}
        { tasks.error && <p style={{color: 'red'}}>INTERNAL ERROR...</p> }
        { tasks.responseData.detail && <p>User not connected.</p> }

        { tasks && !tasks.isLoading && !jwtLoading && !tasks.error && !tasks.responseData.detail && <>
            <main className="TaskContainer">
                { columnList.map(columnName => <TaskColumn
                            title={columnName}
                            tasks={filterData(tasks.responseData, columnName)}
                            key={columnName}
                        />) }
            </main>
        </> }

        </>
    );
};

export default TaskContainer;