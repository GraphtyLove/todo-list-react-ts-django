import React from 'react';
import TaskColumn from "../TaskColumn/TaskColumn";

import './TaskContainer.sass'

const TaskContainer = () => {
    return (
        <main className="TaskContainer">
            <TaskColumn title={'Backlog'} taskCount={2} />
            <TaskColumn title={'Sprint'} taskCount={2} />
            <TaskColumn title={'In progress'} taskCount={2} />
            <TaskColumn title={'Stuck/Review'} taskCount={2} />
            <TaskColumn title={'Done'} taskCount={2} />
        </main>
    );
};

export default TaskContainer;