import React from 'react';
import { Task } from 'interfaces/Task'

import './TaskItem.sass'

interface TaskItemProps {
    task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
    return (
        <li className="TaskItem">
            <header>
                <h3>{ task.title }</h3>
            </header>
            <main>
                <span className="epic">
                    {task.epic && task.epic.toUpperCase()}
                </span>
            </main>
            <footer>
                {/*TODO: Add tags here if I decide to go fo them*/}
                <section className="tags"></section>

                <section className="more-info">
                    <span className="priority-icon align-right">++</span>
                    { task.assigneeAvatar && task.assignees && <span className="assignee-avatar"> <img src={task.assigneeAvatar[0]} alt="assignee's avatar" /> </span>}
                </section>
            </footer>
        </li>
    );
};

export default TaskItem;