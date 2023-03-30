class TaskService {
    constructor() {
        this.tasks = [
            {id: 1, description: "Tarefa 1", whenToDo: "01/01/2030", done: false },
            {id: 2, description: "Tarefa 2", whenToDo: "02/01/2030", done: true },
            {id: 3, description: "Tarefa 3", whenToDo: "03/01/2030", done: false }
        ]
    }

    list() {
        return this.tasks;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TaskService();
