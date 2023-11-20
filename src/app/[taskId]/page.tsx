/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useParams } from "next/navigation";
import useTaskStore from "@/store/task-store/task.store";
import { useEffect } from "react";
import { notFound } from "next/navigation";

const TaskPage = () => {
    const { taskId } = useParams<{ taskId: string }>();

    const { task, getTask } = useTaskStore();

    useEffect(() => {
        getTask(taskId);

        if (!task) {
            notFound();
        }

        return () => {};
    }, [getTask]);

    return (
        <>
            <p> {task?.title} </p>
            <p> {new Date(task?.date ?? "").toUTCString()} </p>
        </>
    );
};

export default TaskPage;
