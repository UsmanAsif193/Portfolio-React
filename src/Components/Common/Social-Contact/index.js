import React from 'react'
import './Social-Contact.css'
import { SocialData } from '../../Data/SocialData'

function SocialContact() {
    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item) => {
                return (
                    <a href={item.link} target='blank'>
                        <div className='social-icon-div'>
                            <img src={item.icon} alt={item.platform} className="social-icon" />
                        </div>
                    </a>
                )
            })}
        </div >
    )
}

export default SocialContact
