import React, {useEffect} from 'react';
import TaskColumnHeader from "./TaskColumnHeader";
import TaskItem from "../TaskItem/TaskItem";
import ButtonAddCard from "./ButtonAddCard/ButtonAddCard";

import './TaskColumn.sass'
import { Task } from "interfaces/Task";

interface Props {
    title: string
    tasks: Task[]
}



const TaskColumn = ({ title, tasks }: Props) => {

    return (
        <section className="TaskColumn">
            <TaskColumnHeader title={title} taskCount={tasks.length} />

            <ul className="taskListContainer">

                {tasks && tasks.map(task => <TaskItem task = {task} />)}


                <ButtonAddCard />
            </ul>
        </section>
    );
};

export default TaskColumn;