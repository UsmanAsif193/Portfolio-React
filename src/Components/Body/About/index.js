import React from 'react';
import './About.css';
import SocailContact from '../../Common/Social-Contact'
import { useDarkMode } from '../../../Context/DarkMode';

function About() {
    const darkMode = useDarkMode()
    let aboutCodingLight = "https://usmanasif961507868.files.wordpress.com/2021/08/coding-light.png"
    let aboutCodingDark = "https://usmanasif961507868.files.wordpress.com/2021/08/coding-dark.png"
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am
                    <br /><span className={darkMode ? 'info-name dark-info-name' : 'info-name'}>Usman Asif</span>.
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
