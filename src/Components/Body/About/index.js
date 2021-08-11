import React from 'react';
import './About.css';
import aboutCodingLight from '../../../assets/coding-light.png';
import aboutCodingDark from '../../../assets/coding-dark.png';
import SocailContact from '../../Common/Social-Contact'
import { useDarkMode } from '../../../Context/DarkMode';

function About() {
    const darkMode = useDarkMode()
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
                        src={darkMode ? aboutCodingDark : aboutCodingLight}
                        alt="About-Coding"
                        className='about-picture' />
                </div>
            </div>
            <div className="about-bottom">
                <SocailContact />
            </div>
        </div>
    )
}

export default About
