import { useEffect, useState } from "react";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/tasks");
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [tasks]);
  const todoTasks = tasks.filter((task) => task.category === "todo");
  const inProgress = tasks.filter((task) => task.category === "inProgress");
  const Done = tasks.filter((task) => task.category === "done");

  return (
    <di
     className="grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 gap-4">
      <div>
      <div className="flex justify-center items-center">
            <h2 className="text-lg font-bold text-red-600 mb-2">Todo List</h2>
        </div>
       <div className="space-y-2">
       {todoTasks.map((task, index) => (
          <div
            className="border border-green-400 p-2 rounded-lg"
            key={task._id}
          >
            <h2>No: {index + 1}</h2>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
           
          </div>
        ))}
       </div>
      </div>
      {/* 2 */}
      <div>
      <div className="flex justify-center items-center">
            <h2 className="text-lg font-bold text-orange-400 mb-2">InProgress List</h2>
        </div>
        <div className="space-y-2">
        {inProgress.map((task, index) => (
          <div
            className="border border-green-400 p-2 rounded-lg"
            key={task._id}
          >
            <h2>No: {index + 1}</h2>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {/* <p className="text-green-600">{task.category}</p> */}
          </div>
        ))}
        </div>
        
      </div>
      {/* 3 */}
      <div className="">
      <div className="flex justify-center items-center">
            <h2 className="text-lg font-bold text-green-600 mb-2">Done List</h2>
        </div>
           <div className="space-y-2">
           {Done.map((task, index) => (
              <div
                className=" border-green-400 p-2 rounded-lg border "
                key={task._id}
              >
                <h2>No: {index + 1}</h2>
                <h3>Name : {task.title}</h3>
                <p>{task.description}</p>
                <div className="flex justify-end gap-2 items-center">
                    <button className=" bg-red-600 text-white px-[2px] py-[2px] rounded-lg">Delete</button>
                    <button className=" bg-orange-600 text-white px-[2px] py-[2px] rounded-lg">Update</button>
                </div>
                {/* <p className="text-blue-600">{task.category}</p> */}
              </div>
            ))}
           </div>
          {/* 4 */}
        </div>
    </di>
  );
};

export default ShowTask;
