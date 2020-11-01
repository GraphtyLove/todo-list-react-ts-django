import React from 'react';

interface TaskColumnHeaderProps {
    title: string,
    taskCount: number
}

const TaskColumnHeader = ({ title, taskCount } : TaskColumnHeaderProps) => {
    return (
        <header className="TaskColumnHeader">
            <h2> { title.toUpperCase() } </h2>
            <span>{ taskCount }</span>
        </header>
    );
};

export default TaskColumnHeader;