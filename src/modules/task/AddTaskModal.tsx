import { Modal } from "../../components/Modal";
import { AddTaskForm } from "./AddTaskForm";

type Props = { open: boolean; onClose: () => void };

export function AddTaskModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-xl mb-4 font-semibold">Create a task</h2>
      <AddTaskForm onSuccess={onClose} />
    </Modal>
  );
}