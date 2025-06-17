import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProviderDashboard from './pages/provider/ProviderDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserDashboard from './pages/Dashboard'
import BookingHistory from './pages/BookingHistory'
import Payment from './pages/Payment'
import ProviderBookings from './pages/ProviderBookings'
import BookingForm from './pages/BookingForm'
import ServiceSearch from './pages/ServiceSearch'
import RatingsReviews from './pages/RatingsReviews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Provider/Provider Dashboard" element={<ProviderDashboard />} />
        <Route path="/admin/Admindashboard" element={<AdminDashboard />} />
        <Route path="/Dashboard" element={<UserDashboard />} />
        <Route path="/pages/bookings" element={<BookingHistory />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/provider/Bookings" element={<ProviderBookings />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/search" element={<ServiceSearch />} />
        <Route path="/provider/services" element={<ServiceSearch />} />
        <Route path="/reviews" element={<RatingsReviews />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
