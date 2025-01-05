import { Suspense } from "react";
import DynamicForm from "./DynamicForm";
import StaticForm from "./StaticForm";

export default function Form() {
    return (
        <Suspense fallback={<StaticForm />}>
            <DynamicForm/>
        </Suspense>
    );
}