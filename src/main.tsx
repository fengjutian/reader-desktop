import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MonacoEdit from './monaco-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <MonacoEdit/>
  </StrictMode>,
)
