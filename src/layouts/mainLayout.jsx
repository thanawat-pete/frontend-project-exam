import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-base-content">
            <NavBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout