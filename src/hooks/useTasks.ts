import { createContext, useContext } from "react";
import type { TaskContextType } from "../types/task";

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be inside TaskProvider");
  return ctx;
}