import { useEffect, useReducer } from "react";
import { taskReducer, initialTaskState } from "../store/task.reducer";
import { getTasks, saveTasks } from "../services/tasks";
import type { Task } from "../types/task";
import { TaskContext } from "../hooks/useTasks";

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // load from storage when app starts
  useEffect(() => {
    dispatch({ type: "SET_TASKS", payload: getTasks() });
  }, []);

  // sync to storage when state.tasks changes
  useEffect(() => {
    saveTasks(state.tasks);
  }, [state.tasks]);

  const addTask = (task: Task) =>
    dispatch({ type: "ADD_TASK", payload: task });

  const updateTask = (task: Task) =>
    dispatch({ type: "UPDATE_TASK", payload: task });

  const deleteTask = (id: number) =>
    dispatch({ type: "DELETE_TASK", payload: id });

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

