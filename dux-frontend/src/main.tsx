import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import User from './components/user-info.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/users/profile' element={<User username='user1'/>} />
        <Route path='/users/inventory' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
