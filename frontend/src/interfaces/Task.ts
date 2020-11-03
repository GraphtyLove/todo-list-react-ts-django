export interface Task {
    assignees: Array<number>,
    assigneeAvatar?: Array<string>,
    attachment?: string,
    author: Array<number>,
    authorAvatar?: Array<string>,
    creation_date: string,
    deadline?: string,
    description: string,
    id: number,
    labels?: Array<number>,
    namespace: Array<number>,
    priority: string,
    state: string,
    title: string,
    epic?: string,
    detail: string
}

