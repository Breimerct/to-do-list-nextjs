// api with local storage about tasks
import TaskController, { ITask } from "./task.controller";

export async function GET() {
    try {
        const resp = await TaskController.getAllTasks();

        return Response.json(resp, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        return Response.json({ error: errorMessage }, { status: 404 });
    }
}

export async function POST(request: Request) {
    try {
        const task = (await request?.json()) as ITask;
        const resp = await TaskController.createTask(task);

        return Response.json(resp, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        return Response.json({ error: errorMessage }, { status: 404 });
    }
}
