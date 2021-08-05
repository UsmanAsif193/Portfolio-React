import React from 'react'
import './Gradient-Button.css'

function GradientButton({ buttonvalue }) {
    return (
        <div className="gradient-div">
            <button className="gradient-button" >{buttonvalue}</button>
        </div>
    )
}

export default GradientButton
