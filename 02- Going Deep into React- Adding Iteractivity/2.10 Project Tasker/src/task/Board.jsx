import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { useState } from "react";

export default function Board() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    desc: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "python", "API"],
    prio: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);

  return (
    // <!-- Begin Table -->
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
    // <!-- End Table -->
  );
}
