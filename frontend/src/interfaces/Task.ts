export interface Task {
    title: string,
    description: string,
    assignee: string,
    assigneeAvatar: string,
    creationDate: string,
    deadline?: string,
    priority: string,
    author: string,
    authorAvatar: string,
    epic?: string,
}