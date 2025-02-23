import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layouts/Main/Main.jsx";
import Home from "./Components/Page/Home.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import Register from "./Components/Page/Register.jsx";
import Login from "./Components/Page/Login.jsx";
import AddTask from "./Components/Page/AddTask/AddTask.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/task",
        element: <AddTask></AddTask>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
