import '../styles/globals.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import Home from './pages/home/Home.jsx'
import AllBooks from './pages/allBooks/AllBooks.jsx'
import OneBook from './pages/oneBook/OneBook.jsx'
import CreateBook from './pages/createBook/CreateBook.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/books',
        element: <AllBooks />
      },
      {
        path: '/book/:id',
        element: <OneBook />
      },
      {
        path: '/book/create',
        element: <CreateBook />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)