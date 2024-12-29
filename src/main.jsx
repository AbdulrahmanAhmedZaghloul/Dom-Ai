import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routes'
import { HelmetProvider } from 'react-helmet-async'
import SnackbarProvider from '../src/context/snackbarContext.jsx'
// import SnackbarProvider from './context/snackbarContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <SnackbarProvider>
        <RouterProvider router={router}></RouterProvider>
      </SnackbarProvider>
    </HelmetProvider>
  </StrictMode>
   ,
)
