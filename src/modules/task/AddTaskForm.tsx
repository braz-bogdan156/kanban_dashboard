import { Formik, Form } from "formik";
import * as Yup from "yup";
import type { Task } from "../../types/task";
import { useTasks } from "../../hooks/useTasks";
import { AddTaskFields } from "./AddTaskFields";

const TaskSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  priority: Yup.string().required("Priority is required"),
  deadline: Yup.string().required("Deadline is required"),
});

export function AddTaskForm({ onSuccess }: { onSuccess: () => void }) {
  const { addTask } = useTasks();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        priority: "medium",
        deadline: "",
        attachment: null as string | null,
        assignee: null as string | null,
      }}
      validationSchema={TaskSchema}
      onSubmit={(values) => {
        const newTask: Task = {
          id: Date.now(),
          title: values.title,
          description: values.description,
          priority: values.priority as Task["priority"],
          status: "todo",
          dueDate: values.deadline,
          assigneeId: null,
          attachment: values.attachment ?? null,
          createdAt: Date.now(),
        };

        addTask(newTask);
        onSuccess();
      }}
    >
      <Form className="flex flex-col gap-3">
        <AddTaskFields />
      </Form>
    </Formik>
  );
}