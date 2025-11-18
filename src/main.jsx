import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import PolicyRoutes from './PolicyRoutes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/*" element={<PolicyRoutes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
