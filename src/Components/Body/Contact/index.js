import React from 'react'
import './Contact.css'
import SocailContact from '../../Common/Social-Contact/index'

function Contact() {
    let Resume = "https://usmanasif961507868.files.wordpress.com/2021/08/resume-usman.pdf"
    return (
        <div className='contact'>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocailContact />
                </div>
                <div className="download">
                    <a download href={Resume}><i className="fi-rr-cloud-download download-icon"></i>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
