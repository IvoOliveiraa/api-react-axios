import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import App from './App.jsx'
import Home from './routes/Home.jsx';
import NewPost from './routes/NewPost.jsx';
import Posts from './routes/Posts.jsx';

import './index.scss'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/new", element: <NewPost />},
      {path: "/posts/:id", element: <Posts />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
