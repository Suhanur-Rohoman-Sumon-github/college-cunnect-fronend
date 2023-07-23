import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AutheProvider from './provider/AutheProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AutheProvider >
   <RouterProvider router={router}/>
   </AutheProvider>
  </React.StrictMode>,
)
