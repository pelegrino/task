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

    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    save(task) {
        if (task.id !== 0) {
            this.tasks.map(t => task.id !== t.id ? t : task);
            
        } else {
           const taskId = Math.max(...this.tasks.map(t => t.id)) +1;
           task.id = taskId;
           this.tasks.push(task);
        }
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export default new TaskService();
