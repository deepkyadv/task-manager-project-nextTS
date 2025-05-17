"use client";

import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import UserContext from "../../context/userContext";
import { deleteTaskofUser, getTaskOfUser } from "../../services/taskService";

interface Task {
  _id: string;
  title: string;
  content: string;
  status: string;
}

const ViewTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(UserContext);
  
  async function deleteTask(id: string) {
    try {
      const response = await deleteTaskofUser(id);
      const refreshTasks = tasks.filter((item) => item._id !== id);
      setTasks(refreshTasks);
      toast.success("Your task was deleted");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting task");
    }
  }

  useEffect(() => {
    if (context.user && context.user._id) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function loadTasks(id: string) {
    try {
      setLoading(true);
      const tasks = await getTaskOfUser(id);
      setTasks(tasks);
    } catch (error) {
      console.error("Error loading tasks:", error);
    } finally {
      setLoading(false);
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case "COMPLETED":
        return "bg-green-500";
      case "PENDING":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl w-full p-8 bg-white/10 backdrop-blur-lg border border-purple-500 rounded-2xl shadow-2xl mt-2">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
          ✅ Your Task List
        </h1>
        <h1 className="text-2xl font-semibold text-center text-purple-200 mb-6">
          Your Remaining Tasks ({tasks.length})
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="h-12 w-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : tasks.length === 0 ? (
          <p className="text-center text-purple-200 text-lg">No tasks found.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="p-6 bg-black/40 border border-purple-400 rounded-xl text-white shadow-lg hover:scale-105 transform transition"
              >
                <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
                <p className="text-sm mb-4 text-purple-200">{task.content}</p>
                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                      task.status
                    )} text-white`}
                  >
                    {task.status}
                  </span>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="p-2 bg-yellow-900 hover:bg-red-700 rounded-full transition-colors duration-300"
                    title="Delete Task"
                  >
                    <MdDelete className="text-white text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTasks;
