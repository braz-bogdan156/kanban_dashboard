import { Field, useFormikContext } from "formik";
import { Input } from "../../components/UI/Input";
import { TextArea } from "../../components/UI/TextArea";
import { Select } from "../../components/UI/Select";
import { AttachmentUploader } from "./AttachmentUpLoader";
import { AssigneePicker } from "./AssigneePicker";
import { Button } from "../../components/UI/Button";

type AddTaskFieldsValues = {
  title: string;
  description: string;
  priority: string;
  deadline: string;
  attachment: string | null;
  assignee: string | null;
};

export function AddTaskFields() {
  const { errors, touched } = useFormikContext<AddTaskFieldsValues>();

  return (
    <>
      <div>
        <label className="block text-sm font-medium">Title</label>
        <Field as={Input} name="title" />
        {touched.title && typeof errors.title === "string" && (
  <p className="text-red-600 text-sm">{errors.title}</p>
)}
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <Field as={TextArea} name="description" />
      </div>

      <div>
        <label className="block text-sm font-medium">Priority</label>
        <Field as={Select} name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Field>
      </div>

      <div>
        <label className="block text-sm font-medium">Deadline</label>
        <Field type="date" as={Input} name="deadline" />
      </div>

      <AttachmentUploader />
      <AssigneePicker />

      <div className="flex justify-end mt-4">
        <Button type="submit">Create</Button>
      </div>
    </>
  );
}