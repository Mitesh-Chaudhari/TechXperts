"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import hamburger from '../../../public/assets/images/hamburger.svg'

const Header = () => {
    const [isNavActive, setNavActive] = useState(false);
  return (
    <div className='main-header'>
        <div className='container'>
            <header className='flex-box'>
                <Link className='logo' href="">
                    TechXperts
                </Link>
                <nav className={`${isNavActive?'active':''}`}>
                    <ul className='flex-box'>
                        <li>
                            <Link href="#home" onClick={()=>{setNavActive(!isNavActive)}}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" onClick={()=>{setNavActive(!isNavActive)}}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#service" onClick={()=>{setNavActive(!isNavActive)}}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#product" onClick={()=>{setNavActive(!isNavActive)}}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" onClick={()=>{setNavActive(!isNavActive)}}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className='menu-toggle' onClick={()=> setNavActive(!isNavActive)}>
                    <Image src={hamburger} />
                </button>
            </header>
        </div>
    </div>
  )
}

export default Header
