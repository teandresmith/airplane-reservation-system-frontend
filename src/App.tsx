import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Flights from './components/BookingFlight'
import Home from './components/Home'

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flights' element={<Flights />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App
