export type Task = {
    id: number;
    title: string;
    description?: string;
    status: 'todo' | 'in_progress' | 'done';
    dueDate: string;
    priority: 'low' | 'medium' | 'high';
    assigneeId?: number | null;
    attachment?: string | null;
    createdAt: number;
}


export type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
};

