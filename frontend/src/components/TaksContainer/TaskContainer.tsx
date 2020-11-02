import React from 'react';
import TaskColumn from "../TaskColumn/TaskColumn";

import { Task } from 'interfaces/Task'

import './TaskContainer.sass'
import useFetch from "../../hooks/useFetch";

interface TaskApiResponse {
    data: Task[],
    error: boolean | string,
    isLoading: boolean
}

const TaskContainer = () => {

    const tasks = useFetch<TaskApiResponse>('/api/tasks')

    const columnList = ['Backlog',  'Sprint', 'In progress', 'Stuck/Review', 'Done']

    const filterData = (data: Array<Task>, status: string): Array<Task> => data.filter(task => task.state === status)

    console.log(tasks)

    return (
        <>
        { tasks.isLoading && <p>LOADING...</p>}
        { tasks.error && <p style={{color: 'red'}}>INTERNAL ERROR...</p> }
        { !tasks.isLoading && !tasks.error && <>
            <main className="TaskContainer">
                {
                    columnList.map(columnName => {
                        return <TaskColumn
                            title={columnName}
                            tasks={filterData(tasks.data, columnName)}
                        />
                    })
                }
            </main>
        </> }

        </>
    );
};

export default TaskContainer;