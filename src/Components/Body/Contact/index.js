import React from 'react'
import Seperator from '../../Common/Seperator'
import './Contact.css'
import SocailContact from '../../Common/Social-Contact/index'
import Resume from '../../../assets/Resume-Usman.pdf'
import { useDarkMode } from '../../../Context/DarkMode'

function Contact() {
    const darkMode = useDarkMode()
    return (
        <div className='contact'>
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocailContact />
                </div>
                <div className={darkMode ? "download dark-download" : "download"}>
                    <a download href={Resume}><i className="fi-rr-cloud-download download-icon"></i>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
