import type { Task } from '../types/task';

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;

export const getTasks = (): Task[] => {
    const tasksJson = localStorage.getItem(STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
}


export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function createTask(task: Task): void {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
}

export function updateTask(updated: Task): void {
  const tasks = getTasks();
  const next = tasks.map(t => (t.id === updated.id ? updated : t));
  saveTasks(next);
}

export function deleteTask(id: number): void {
  const tasks = getTasks();
  const next = tasks.filter(t => t.id !== id);
  saveTasks(next);
}