import React from 'react'
import './Body.css'
import About from './About/index'
import Projects from './Projects/index'
import Skills from './Skills/index'
import Work from './Work/index'
import Contact from './Contact/index'
import Seperator from '../Common/Seperator'

function Body() {
    return (
        <div className='body'>
            <section id='About'>
                <About />
            </section>
            <Seperator />
            <section id='Projects'>
                <Projects />
            </section>
            <Seperator />
            <section id='Skills'>
                <Skills />
            </section>
            <Seperator />
            <section id='Work'>
                <Work />
            </section>
            <Seperator />
            <section id='Contact'>
                <Contact />
            </section>
        </div>
    )
}

export default Body
