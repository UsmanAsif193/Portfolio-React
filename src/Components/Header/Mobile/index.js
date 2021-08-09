import React from 'react'
import { useDarkMode } from '../../../Context/DarkMode'
import './Mobile.css'


function Mobile({ isOpen, setIsOpen }) {

    const { darkMode, setdarkMode } = useDarkMode()

    console.log(darkMode)

    return (
        <div className='mobile'>
            <div className="close-icon" onClick={() => { setIsOpen(!isOpen) }}>
                <i className="fi-rr-cross-circle"></i>
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href="#Projects">
                        <i className="fi-rr-edit-alt option-icon"></i>Projects
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#Skills">
                        <i className="fi-rr-laptop option-icon"></i>Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#Work">
                        <i className="fi-rr-briefcase option-icon"></i>Work
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#Contact">
                        <i className="fi-rr-user option-icon"></i>Contact
                    </a>
                </div>
                <div className='mobile-option' onClick={() => { setdarkMode(!darkMode) }}>
                    Dark Mode
                </div>
            </div>
        </div>
    )
}

export default Mobile
