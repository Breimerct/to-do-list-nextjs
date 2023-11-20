"use client";
import { ITask } from "@/api/task/task.controller";
import { CloseIcon, DoneIcon, EditIcon, TrashIcon } from "../icons";
import Button from "../button/Button";
import { useState } from "react";
import useTaskStore from "@/store/task-store/task.store";
import Link from "next/link";

interface IProps {
    task: ITask;
    onRemoveTask: (id: string) => void;
}

const ListTaskItem = ({ task, onRemoveTask }: IProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [titleTask, setTitleTask] = useState(task.title);
    const { updateTask } = useTaskStore();

    const handleUpdate = () => {
        setTitleTask(task.title);
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setTitleTask(task.title);
        setIsEditing(false);
    };

    const hanndleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleTask(e.target.value);
    };

    const handleUpdateTask = () => {
        updateTask(task.id, { ...task, title: titleTask });
        setIsEditing(false);
        setTitleTask(task.title);
    };

    return (
        <li
            className="shadow-sm shadow-zinc-800 px-4 py-2 bg-zinc-950"
            key={task.id}
        >
            <div className="flex justify-between items-center gap-4">
                {!isEditing && (
                    <Link href={`/${task.id}`} className="block w-full">
                        <p className="truncate">{task.title}</p>
                    </Link>
                )}

                {isEditing && (
                    <input
                        type="text"
                        className="w-full p-1 pl-2 outline-none focus:outline-1 focus:outline-zinc-600 bg-zinc-800 text-zinc-100 transition-all"
                        value={titleTask}
                        onChange={hanndleChangeTitle}
                    />
                )}

                <div className="flex flex-row gap-3">
                    {!isEditing && (
                        <>
                            <Button color="blue" onClick={() => handleUpdate()}>
                                <EditIcon />
                            </Button>

                            <Button
                                color="red"
                                onClick={() => onRemoveTask(task.id)}
                            >
                                <TrashIcon />
                            </Button>
                        </>
                    )}

                    {isEditing && (
                        <>
                            <Button color="" onClick={handleUpdateTask}>
                                <DoneIcon />
                            </Button>

                            <Button color="red" onClick={handleCloseEdit}>
                                <CloseIcon />
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </li>
    );
};

export default ListTaskItem;
