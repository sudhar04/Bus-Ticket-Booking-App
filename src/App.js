import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContainer from './pages/HomeContainer.jsx';
import Bus from './pages/Bus.jsx';
import Detail from './pages/Detail.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/bus' element={<Bus />} />
            <Route path='/bus/bus-details' element={<Detail />} />
            <Route path='/bus/bus-details/checkout' element={<Checkout />} />
            
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>   
  )
}

export default App
