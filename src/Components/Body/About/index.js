import React from 'react';
import './About.css';
import aboutCoding from '../../../assets/coding2.jpg';

function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am
                    <br /><span className='info-name'>Usman Asif</span>.
                    <br />I am an expert of ReactJS.
                </div>
                <div className="about-photo">
                    <img
                        src={aboutCoding}
                        alt="About-Coding"
                        className='about-picture' />
                </div>
            </div>
            <div className="about-bottom">
                This is Contacts
            </div>
        </div>
    )
}

export default About
