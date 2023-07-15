import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/style/styles.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
const BookingPage = React.lazy(() => import('./Pages/BookingPage'))
const ConfirmedPage = React.lazy(() => import('./Pages/ConfirmedPage'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/confirm' element={<ConfirmedPage />} />
          </Routes>
        </Suspense>
      </App>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
