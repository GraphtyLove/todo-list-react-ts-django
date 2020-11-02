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

    const data = useFetch<TaskApiResponse>('/api/tasks')


    const columnList = ['Backlog',  'Sprint', 'In progress', 'Stuck/Review', 'Done']

    const filterData = (data: Array<Task>, status: string): Array<{}> => data.filter(task => task.state === status)

    console.log(data)

    return (
        <>
        { data.isLoading && <p>LOADING...</p>}
        { data.error && <p style={{color: 'red'}}>INTERNAL ERROR...</p> }
        { !data.isLoading && !data.error && <>
            <main className="TaskContainer">
                { columnList.map(columnName => <TaskColumn title={columnName} taskCount={filterData(data.data, columnName).length}/> ) }
            </main>
        </> }

        </>
    );
};

export default TaskContainer;