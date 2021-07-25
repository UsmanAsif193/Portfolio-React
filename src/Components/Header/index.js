import React, { useState } from 'react'
import './Header.css'
import Mobile from './Mobile'
import Web from './Web'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='header'>
            <div className="logo">Usman Asif</div>
            <div className="menu">
                <div className="web-men"><Web /></div>
                <div className="mobile-menu">
                    <div onClick={() => { setIsOpen(!isOpen) }}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
