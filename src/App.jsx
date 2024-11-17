import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Layout/Navbar/Navbar'
import Header from './Layout/Header/Header'

import Review from './components/Review Management/Review'
import Dashboard from './components/Dashboard/Dashboard'
import AdminManagement from './components/Admin Management/AdminManagement'
import Permission from './components/Permission/Permission'
import AccountStatus from './components/Account Status/AccountStatus'
import AdminAccout from './components/Admin Account Management/AdminAccout'
import Banner from './components/Banner/Banner'
import PriceManagement from './components/Price Management/Price Management'
import EditPrice from './components/Price Management/Edit Price/Edit Price'

function App() {
    const [slide, setSlide] = useState(false)
 
    function handleSlide() {
        setSlide(!slide)
    }
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar slide={slide}/>
                <div className="main-content">
                    <Header handleSlide={handleSlide}/>
                    <div className='content-area'>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/adminmanagement' element={<AdminManagement />} />
                            <Route path='/permission' element={<Permission />} />
                            <Route path='/review' element={<Review />} />
                            <Route path='status' element={<AccountStatus />} />
                            <Route path='adminaccmanagement' element={<AdminAccout />} />
                            <Route path='/banner' element={<Banner />} />
                            <Route path="/pricemanagement" element={<PriceManagement />} />
                            <Route path="/edit-price/:id" element={<EditPrice />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
