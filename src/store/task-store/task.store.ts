import { ITask } from "@/app/api/task/task.controller";
import { create } from "zustand";

type TaskStore = {
    tasks: ITask[];
    task: ITask | null;
};

type TaskStoreActions = {
    addTask: (task: Partial<ITask>) => void;
    getAllTasks: () => void;
    getTask: (id: string) => void;
    updateTask: (id: string, task: Partial<ITask>) => void;
    deleteTask: (id: string) => void;
};

const initialState: TaskStore = {
    tasks: [],
    task: null,
};

const useTaskStore = create<TaskStore & TaskStoreActions>((set, get) => ({
    ...initialState,
    addTask: async (task) => {
        try {
            const resp = await fetch("api/task", {
                method: "POST",
                body: JSON.stringify(task),
            });
            const data = await resp.json();

            get().getAllTasks();
        } catch (error) {
            set({ tasks: [] });
            console.log(error);
        }
    },

    getAllTasks: async () => {
        try {
            const resp = await fetch("api/task");
            const data = await resp.json();

            set({ tasks: data });
        } catch (error) {
            set({ tasks: [] });
            console.log(error);
        }
    },

    getTask: async (id) => {
        try {
            const resp = await fetch(`api/task/${id}`);
            const data = await resp.json();

            set({ task: data });
        } catch (error) {
            set({ task: null });
            console.log(error);
        }
    },

    updateTask: async (id, task) => {
        try {
            const resp = await fetch(`api/task/${id}`, {
                method: "PUT",
                body: JSON.stringify(task),
            });

            get().getAllTasks();
        } catch (error) {
            set({ tasks: [] });
            console.log(error);
        }
    },

    deleteTask: async (id) => {
        try {
            const resp = await fetch(`api/task/${id}`, {
                method: "DELETE",
            });
            const data = await resp.json();

            get().getAllTasks();
        } catch (error) {
            set({ tasks: [] });
            console.log(error);
        }
    },
}));

export default useTaskStore;
