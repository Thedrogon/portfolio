import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById("root");



if (!(container instanceof HTMLElement)) {
  throw new Error("Root element not found");
}

if (!container) {
  throw new Error("Root container missing in index.html");
}
createRoot(container).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

