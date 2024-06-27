import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createRoot} from 'react-dom/client'
import Navbar from './Navbar.js'
import { Home } from '../pages/Home.js'

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>

            </div>
       
        </>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>)