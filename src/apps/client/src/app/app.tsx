// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout';
import HomePage from '../pages/HomePage';
import TasksPage from '../pages/TasksPage';
import { AppRoutes, AppRouteChildren } from '../shared/config';

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: AppRouteChildren.TASKS,
        element: <TasksPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
