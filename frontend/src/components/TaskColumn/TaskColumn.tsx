import React from 'react';
import TaskColumnHeader from "./TaskColumnHeader";
import TaskItem from "../TaskItem/TaskItem";
import ButtonAddCard from "./ButtonAddCard/ButtonAddCard";

import './TaskColumn.sass'

interface TaskColumnProps {
    title: string
    taskCount: number
}

const TaskColumn = ({ title, taskCount }: TaskColumnProps) => {
    return (
        <section className="TaskColumn">
            <TaskColumnHeader title={title} taskCount={taskCount} />

            <ul className="taskListContainer">
                <TaskItem
                    task = {{
                        title: "Test title",
                        description: "test description...",
                        assignee: "Maxim Berge",
                        assigneeAvatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M72LyVsEeMjkKe0Bq-oVnQHaHa%26pid%3DApi&f=1",
                        creationDate: "12/02/2020",
                        deadline: "13/10/20202",
                        priority: "normal",
                        author: "Maxim Berge",
                        epic: 'Bouman 2',
                        authorAvatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M72LyVsEeMjkKe0Bq-oVnQHaHa%26pid%3DApi&f=1",
                    }}

                />
                <TaskItem
                    task = {{
                        title: "Test title",
                        description: "test description...",
                        assignee: "Maxim Berge",
                        assigneeAvatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M72LyVsEeMjkKe0Bq-oVnQHaHa%26pid%3DApi&f=1",
                        creationDate: "12/02/2020",
                        deadline: "13/10/20202",
                        priority: "normal",
                        author: "Maxim Berge",
                        epic: 'Bouman 2',
                        authorAvatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M72LyVsEeMjkKe0Bq-oVnQHaHa%26pid%3DApi&f=1",
                    }}

                />
                <TaskItem
                    task = {{
                        title: "Test title",
                        description: "test description...",
                        assignee: "Maxim Berge",
                        assigneeAvatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M72LyVsEeMjkKe0Bq-oVnQHaHa%26pid%3DApi&f=1",
                        creationDate: "12/02/2020",
                        deadline: "13/10/20202",
                        priority: "normal",
                        author: "Maxim Berge",
                        epic: 'Bouman 2',
                        authorAvatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M72LyVsEeMjkKe0Bq-oVnQHaHa%26pid%3DApi&f=1",
                    }}
                />
                <ButtonAddCard />
            </ul>
        </section>
    );
};

export default TaskColumn;