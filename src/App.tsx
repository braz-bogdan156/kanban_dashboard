
import "./App.css";
import { KanbanBoard } from "./modules/kanban/KanbanBoard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold p-4">Task Manager</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;