import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'reactflow/dist/style.css'
import './index.css'
import App from './App.tsx'

console.log('main.tsx: attempting to render root');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('main.tsx: root element not found!');
}

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
