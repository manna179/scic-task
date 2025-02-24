import { useContext, useEffect, useState } from "react";
import UpdateTaskModal from "../UpdateTask/UpdateTaskModal";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ShowTask = () => {
  const {user}= useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("https://scic-server-ebon.vercel.app/tasks");
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleOpenModal = (taskId) => {
    setUserId(taskId); // Set userId first
    setTimeout(() => {
      document.getElementById("update_task_modal").showModal(); // Open modal
    }, 100); // Small delay to ensure rendering
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const res = await fetch(`https://scic-server-ebon.vercel.app/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete task");

      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {["todo", "inProgress", "done"].map((category) => (
        <div className="border-2 p-2" key={category}>
          <h2 className={`text-lg font-bold mb-2 ${category === "todo" ? "text-red-600" : category === "inProgress" ? "text-orange-400" : "text-green-600"}`}>
            {category === "todo" ? "Todo List" : category === "inProgress" ? "In Progress" : "Done List"}
          </h2>
          <div className="space-y-2">
            {tasks
              .filter((task) => task.category === category)
              .map((task, index) => (
                <div className="border border-green-400 p-2 rounded-lg" key={task._id}>
                  <h2 className="font-bold ">No:<span className="text-red-500">{index + 1}</span> </h2>
                  <h3 className="font-bold ">Title : <span className="text-red-500">{task.title}</span></h3>
                  <p className="font-bold ">Description : <span className="text-red-500">{task.description}</span></p>

                  {/* Open Modal */}
                 <div className="flex justify-end items-center mt-2 gap-2">
                 {
                  user && <button className="px-4 py-2 text-white bg-green-500 rounded-md" onClick={() => handleOpenModal(task._id)}>
                  Update
                </button>
                 }

                  {/* Delete Task */}
                  {
                    user && <button onClick={() => handleDeleteTask(task._id)} className="px-4 py-2 rounded-md bg-red-600 text-white">
                    Delete
                  </button>
                  }
                 </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Update Task Modal */}
      <UpdateTaskModal
        task={tasks.find((t) => t._id === userId)}
        id={userId}
        setUserId={setUserId}
        setTasks={setTasks}
      />
    </div>
  );
};

export default ShowTask;
