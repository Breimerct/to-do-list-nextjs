export interface ITask {
    id: string;
    title: string;
    date: Date;
    isDone: boolean;
}

export interface IMessageResponse {
    message: string;
}

export default class TaskController {
    static tasks: ITask[] = [];

    static getAllTasks(): Promise<ITask[]> {
        return new Promise((resolve) => {
            resolve(this.tasks);
        });
    }

    static getTask(id: string): Promise<ITask | undefined> {
        return new Promise((resolve, reject) => {
            const task = this.tasks.find((task: ITask) => task.id === id);

            if (!task) {
                reject(new Error("Task not found"));
            }

            resolve(task);
        });
    }

    static createTask(task: ITask): Promise<ITask> {
        return new Promise((resolve, reject) => {
            try {
                const newTask: ITask = {
                    ...task,
                    id: crypto.randomUUID(),
                    date: new Date(),
                    isDone: false,
                };

                this.tasks.unshift(newTask);

                resolve(newTask);
            } catch (error) {
                reject(error);
            }
        });
    }

    static updateTask(id: string, task: ITask): Promise<ITask> {
        return new Promise((resolve, reject) => {
            const index = this.tasks.findIndex((task: ITask) => task.id === id);

            if (index === -1) {
                reject(new Error("Task not found"));
            }

            this.tasks[index] = {
                ...task,
                id,
            };

            resolve(this.tasks[index]);
        });
    }

    static deleteTask(id: string): Promise<IMessageResponse> {
        return new Promise((resolve, reject) => {
            const index = this.tasks.findIndex((task: ITask) => task.id === id);

            if (index < 0) {
                reject(new Error("Task not found"));
            }

            this.tasks.splice(index, 1);

            resolve({
                message: `taks with id ${id} deleted successfully`,
            });
        });
    }
}
