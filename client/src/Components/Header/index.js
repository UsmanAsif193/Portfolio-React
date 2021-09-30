import React from 'react'
import { useDarkMode } from '../../Context/DarkMode'
import './Header.css'
import Mobile from './Mobile'
import Web from './Web'

function Header({ isOpen, setIsOpen }) {
    const darkMode = useDarkMode()
    return (
        <div className='header'>
            <div className={darkMode ? "logo dark-logo" : "logo"}>Usman Asif</div>
            <div className="menu">
                <div className="web-menu"><Web /></div>
                <div className="mobile-menu">
                    <div onClick={() => { setIsOpen(true) }}>
                        <i className="fas fa-bars"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
