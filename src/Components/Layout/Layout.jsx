import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';


export default function Layout() {
    return (
        <>
            <Nav />
            <div className='contanier mt-5 mb-5 pb-5'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
