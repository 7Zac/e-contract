import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import TaskPage from './pages/TaskPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddTaskPage from './pages/AddTaskPage';
import CreateConsult from './pages/CreateConsult';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/CreateConsult",
    element: <CreateConsult />,
  },

  {
    path: "/AddTaskPage",
    element: <AddTaskPage />,
  },
  {
    path: "/TaskPage",
    element: <TaskPage />,
  },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
