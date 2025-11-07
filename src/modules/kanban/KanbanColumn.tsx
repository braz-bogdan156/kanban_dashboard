import { KanbanTaskCard } from "./KanbanTaskCard";
import type { Task } from "../../types/task";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  id: string;
  title: string;
  tasks: Task[];
};

export function KanbanColumn({ id, title, tasks }: Props) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-100 rounded-lg p-3 shadow-sm min-h-[300px] flex flex-col"
    >
      <h2 className="font-semibold mb-3">{title}</h2>

     
      <div className="flex flex-col gap-2 pointer-events-none">
        {tasks.map(task => (
          <div key={task.id} className="pointer-events-auto">
            <KanbanTaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}