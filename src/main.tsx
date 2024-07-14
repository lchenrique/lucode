import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider/index.tsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { Test } from './Test.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/test",
    element: <Test />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}  />
    </ThemeProvider>
  </React.StrictMode>,
)
