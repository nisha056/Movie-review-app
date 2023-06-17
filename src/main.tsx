import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './components/pages/home';
import { createEmotionCache, MantineProvider } from '@mantine/core';
import Root from './routes/root';
import Fourk from './components/pages/4k';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/4k",
        element: <Fourk />,
      },

    ]
  },
]);
const myCache = createEmotionCache({
  key: "mantine",
  prepend: false,
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider emotionCache={myCache}>
      <RouterProvider router={router} />

    </MantineProvider>
  </React.StrictMode>,
)
