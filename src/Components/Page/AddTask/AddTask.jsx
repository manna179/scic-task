import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.todo.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const task = { title, description, category };
    console.log(task);
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => console.log("task added to the db",data));
      navigate("/");
  };
  return (
    <div className="w-11/12 mx-auto ">
      <form onSubmit={handleAddTask} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            name="todo"
            type="title"
            placeholder="Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* 2 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="input input-bordered"
            name="description"
            type="text"
            placeholder="Description"
            id=""
            required
          ></textarea>
        </div>
        {/* 3 */}
        <div className="space-y-2">
          <label htmlFor="">Category</label>
          <select
            name="category"
            id=""
            className="input input-bordered w-full"
            defaultValue={"inProgress"}
          >
            <option value="todo">ToDo</option>
            <option value="inProgress">In-Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
