import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routes'
import { HelmetProvider } from 'react-helmet-async'
import SnackbarProvider from './context/SnackbarContext'
// import SnackbarProvider from '../src/context/snackbarContext.jsx'
// import SnackbarProvider from './context/SnackbarContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </SnackbarProvider>

  </StrictMode>
  ,
)
