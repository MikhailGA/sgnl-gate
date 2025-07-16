// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
