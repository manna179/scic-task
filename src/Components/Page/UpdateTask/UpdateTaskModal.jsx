/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const UpdateTaskModal = ({ task, id, setUserId, setTasks }) => {
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    description: "",
    category: "todo",
  });

  useEffect(() => {
    if (task) {
      setUpdatedTask({
        title: task.title || "",
        description: task.description || "",
        category: task.category || "todo",
      });

      setTimeout(() => {
        document.getElementById("update_task_modal").showModal(); // Open modal after task loads
      }, 100);
    }
  }, [task]);

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`https://scic-server-ebon.vercel.app/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!res.ok) throw new Error("Failed to update task");

      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === id ? { ...t, ...updatedTask } : t))
      );

      document.getElementById("update_task_modal").close(); // Close modal
      setUserId(null); // Reset user selection
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <dialog id="update_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Task</h3>
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
          className="input input-bordered w-full my-2"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full my-2"
          placeholder="Description"
        />
        <select
          name="category"
          value={updatedTask.category}
          onChange={handleChange}
          className="select select-bordered w-full my-2"
        >
          <option value="todo">Todo</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleUpdate}>
            Save Changes
          </button>
          <button
            className="btn"
            onClick={() => {
              document.getElementById("update_task_modal").close();
              setUserId(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTaskModal;
