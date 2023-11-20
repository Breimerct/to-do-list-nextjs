/* eslint-disable @next/next/no-img-element */
"use client";
import useTaskStore from "@/store/task-store/task.store";
import ListTaskItem from "../list-task-item/ListTaskItem";
import { useEffect } from "react";

const ListTask = () => {
    const { tasks, deleteTask, getAllTasks } = useTaskStore();

    const handleDeleteTask = (id: string) => {
        deleteTask(id);
    };

    useEffect(() => {
        getAllTasks();

        return () => {};
    }, [getAllTasks]);

    return (
        <>
            <ul className="flex flex-col gap-4 h-[30rem] overflow-y-auto pr-4 pl-2 py-3 bg-zinc-900">
                {tasks.length === 0 && (
                    <div className="w-full h-full grid place-content-center">
                        <p className="text-center text-white text-5xl">
                            No tasks
                        </p>
                    </div>
                )}
                {tasks.map((task) => (
                    <ListTaskItem
                        key={task.id}
                        task={task}
                        onRemoveTask={handleDeleteTask}
                    />
                ))}
            </ul>
        </>
    );
};

export default ListTask;
