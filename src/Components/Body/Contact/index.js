import React from 'react'
import Seperator from '../../Common/Seperator'
import './Contact.css'
import SocailContact from '../../Common/Social-Contact/index'
import Resume from '../../../assets/Resume-Usman.pdf'

function Contact() {
    return (
        <div className='contact'>
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocailContact />
                </div>
                <div className="download">
                    <a downlaod href={Resume}><i className="fi-rr-cloud-download download-icon"></i>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
