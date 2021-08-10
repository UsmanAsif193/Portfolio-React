import React from 'react'
import { useDarkMode } from '../../../Context/DarkMode'
import './Web.css'

function Web() {

    const { darkMode, setdarkMode } = useDarkMode()
    function handleClick() {
        setdarkMode(!darkMode)
    }

    return (
        <div className='web'>
            <div className='web-option'>
                <a href="#Projects">
                    <i className="fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href="#Skills">
                    <i className="fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href="#Work">
                    <i className="fi-rr-briefcase option-icon"></i>Work
                </a>
            </div>
            <div className='web-option'>
                <a href="#Contact">
                    <i className="fi-rr-user option-icon"></i>Contact
                </a>
            </div>
            <div className='web-option' onClick={handleClick} >
                Dark Mode
            </div>
        </div>
    )
}

export default Web
