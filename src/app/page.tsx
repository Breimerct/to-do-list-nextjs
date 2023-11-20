import FormControl from "./components/form-control/FormControl";
import ListTask from "@/components/list-task/ListTask";

export default function Home() {
    return (
        <>
            <header>
                <FormControl />
            </header>

            <main className="mt-4">
                <ListTask />
            </main>
        </>
    );
}
