"use client";
import useTaskStore from "@/store/task-store/task.store";
import { useState } from "react";

const FormControl = () => {
    const [titleTask, setTitleTask] = useState("");
    const { tasks, addTask, getAllTasks, deleteTask } = useTaskStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addTask({ title: titleTask });
        setTitleTask("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleTask(e.target.value);
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <label className="w-full block">
                <span className="block">Task</span>
                <input
                    className="w-full p-3 outline-none border-0 focus:border-none bg-zinc-700 placeholder:text-zinc-400 text-white focus:outline-1 focus:outline-zinc-600 transition-all"
                    type="text"
                    placeholder="Entender task name"
                    value={titleTask}
                    onChange={handleInputChange}
                />
            </label>
        </form>
    );
};

export default FormControl;
