import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
    return (
        <div className="Navbar flex w-screen h-20 z-50 bg-black fixed shadow-navS">
            <img className="md:w-15 md:h-15 filter invert m-4" src={logo} alt="logo" />
            <div className="AppName flex w-full -translate-x-8 text-center items-center justify-center">
            <h1 className=" nav-heading font-serif text-white md:text-6xl mx-auto my-2 block subpixel-antialiased text-5xl ">VAULTEZ</h1>           
            </div>
        </div>
    )
}

export default Navbar
