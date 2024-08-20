import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routers/Router';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import AuthProvider from './Providers/authProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-2xl mx-auto bg-[#161d28]">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>
  </StrictMode>,
)
