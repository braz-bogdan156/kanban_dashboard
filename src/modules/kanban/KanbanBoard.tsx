import { useState } from "react";
import { DndContext, type DragEndEvent,  closestCorners } from "@dnd-kit/core";
import { useTasks } from "../../hooks/useTasks";

import { AddTaskModal } from "../task/AddTaskModal";
import { KanbanColumn } from "./KanbanColumn";

export function KanbanBoard() {
  const { tasks, updateTask } = useTasks();
  const [open, setOpen] = useState(false);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id as "todo" | "in_progress" | "done";

     const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  updateTask({ ...task, status: newStatus });
  };

  return (
    <DndContext collisionDetection={closestCorners}
    onDragEnd={onDragEnd}>
      <div className="p-4">
        <button
          onClick={() => setOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add a task
        </button>

        <AddTaskModal open={open} onClose={() => setOpen(false)} />

        <div className="grid grid-cols-3 gap-4 p-4">
          <KanbanColumn
            id="todo"
            title="Todo"
            tasks={tasks.filter((t) => t.status === "todo")}
          />
          <KanbanColumn
            id="in_progress"
            title="In Progress"
            tasks={tasks.filter((t) => t.status === "in_progress")}
          />
          <KanbanColumn
            id="done"
            title="Done"
            tasks={tasks.filter((t) => t.status === "done")}
          />
        </div>
      </div>
    </DndContext>
  );
}