import TaskController, { ITask } from "../task.controller";

export async function GET(
    request: Request,
    response: { params: { id: string } },
) {
    try {
        const id = response?.params.id;
        const resp = await TaskController.getTask(id);

        return Response.json(resp, { status: 200 });
    } catch (error: any) {
        const errorMessage = error instanceof Error ? error.message : error;
        return Response.json({ error: errorMessage }, { status: 404 });
    }
}

export async function PUT(
    request: Request,
    response: { params: { id: string } },
) {
    try {
        const id = response?.params.id;
        const task = (await request?.json()) as ITask;

        const resp = await TaskController.updateTask(id, task);

        return Response.json(resp, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        return Response.json({ error: errorMessage }, { status: 404 });
    }
}

export async function DELETE(
    request: Request,
    response: { params: { id: string } },
) {
    try {
        const id = response?.params.id;
        const resp = await TaskController.deleteTask(id);

        return Response.json(resp, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        return Response.json({ error: errorMessage }, { status: 404 });
    }
}
