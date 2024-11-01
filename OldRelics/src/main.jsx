import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import { GlobalContextProvider } from './Context/GlobalContext.jsx'
import { ReactDOM } from 'react'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={Router}>
    </RouterProvider>
  </GlobalContextProvider>
)
