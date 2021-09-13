import React, { useState }from 'react'
import './Home.css'
import Header from '../Header/index'
import Body from '../Body/index'
import Footer from '../Footer/index'
import ScrollToTop from '../Common/ScrollToTop'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='home'>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Body />
            <Footer />
            <ScrollToTop isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Home
