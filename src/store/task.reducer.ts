import type { Task } from "../types/task";

export type TaskState = {
  tasks: Task[];
};

export const initialTaskState: TaskState = {
  tasks: [],
};

export type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: number };

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "SET_TASKS":
      return { tasks: action.payload };

    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };

    case "UPDATE_TASK":
      return {
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };

    case "DELETE_TASK":
      return { tasks: state.tasks.filter((t) => t.id !== action.payload) };

    default:
      return state;
  }
}