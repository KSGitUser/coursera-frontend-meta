import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/style/styles.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BookingPage from './Pages/BookingPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </App>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
