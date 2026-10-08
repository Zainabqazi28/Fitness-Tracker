import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
const App = () => {

    const router=createBrowserRouter([

      {
        path:'/register',
        element:<Register/>
      },
      
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App