import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../../types/task";

export function KanbanTaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
   const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <div ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    className="p-3 bg-white rounded shadow cursor-pointer hover:shadow-md transition">
      <div className="font-medium">{task.title}</div>
      {task.description && <div className="text-sm text-gray-600 mt-1">{task.description}</div>}

      {task.attachment && (
        <div className="mt-2">
          {task.attachment.startsWith("data:image/") ? (
            
            <img src={task.attachment} alt="att" className="max-h-24 rounded" />
          ) : (
            <a href={task.attachment} target="_blank" rel="noreferrer" className="text-xs text-blue-600 underline">
              Переглянути файл
            </a>
          )}
        </div>
      )}

      <div className="text-xs text-gray-400 mt-2">{task.priority.toUpperCase()}</div>
    </div>
  );
  }