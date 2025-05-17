'use client';
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { addTask } from "../../services/taskService";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    userId: "",
  });

  const handleAddTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      task.title.trim() === "" ||
      task.content.trim() === "" ||
      task.status.trim() === ""
    ) {
      toast.error("Please fill in all fields before adding the task", {
        position: "top-center",
      });
      return;
    }

    try {
      const res = await addTask(task);
      toast.success("Your task is added", {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "",
        userId: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Your task is not added", {
        position: "top-center",
      });
    }
  };

  const resetTask = () => {
    setTask({
      title: "",
      content: "",
      status: "",
      userId: "",
    });
    toast.success("Fields have been reset successfully", {
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center">
      <div className="relative bg-white/10 backdrop-blur-md border border-purple-500 rounded-2xl p-10 shadow-2xl max-w-2xl w-full text-white">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-sm bg-purple-600 px-4 py-1 rounded-full font-bold tracking-wide shadow-lg">
          ADD TASK
        </div>

        <div className="flex justify-center mb-4">
          <Image
            src="/icons8-add-task-pastel-color/icons8-add-task-100.png"
            alt="Add Task Icon"
            width={100}
            height={100}
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8 text-purple-200">
          📝 Plan Something New
        </h1>

        <form className="space-y-6" onSubmit={handleAddTask}>
          <div>
            <label className="block mb-1 text-sm font-medium text-purple-300">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="w-full px-4 py-2 bg-black/60 border border-purple-500 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-purple-300">
              Content
            </label>
            <input
              type="text"
              placeholder="Enter task content"
              value={task.content}
              onChange={(e) => setTask({ ...task, content: e.target.value })}
              className="w-full px-4 py-2 bg-black/60 border border-purple-500 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-purple-300">
              Status
            </label>
            <select
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              className="w-full px-4 py-2 bg-black/60 border border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">-- Select Status --</option>
              <option value="PENDING">Pending</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={resetTask}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
            >
              Clear
            </button>
          </div>
        </form>

        <div className="absolute top-0 left-0 w-full h-full border border-purple-500 rounded-2xl pointer-events-none blur-sm opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default AddTask;
