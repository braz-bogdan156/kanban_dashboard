import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ReactQueryProvider } from './providers/ReactQueryProvider.tsx'
import { TaskProvider } from './providers/TaskProvider.tsx'
import { ModalProvider } from './providers/ModalProvider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <TaskProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </TaskProvider>
    </ReactQueryProvider>
  </StrictMode>
)
