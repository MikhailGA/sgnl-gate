import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout';
import { AppRouteChildren, AppRoutes } from '@client/shared/config';
import HomePage from '@client/pages/home';
import FoldersPage from '@client/pages/folders';

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
        path: AppRouteChildren.FOLDERS,
        element: <FoldersPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
