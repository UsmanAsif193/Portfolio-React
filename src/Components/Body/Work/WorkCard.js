import React from 'react'
import "./WorkCard.css"

function WorkCard({ item }) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt={item.company} className="work-logo" />
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <div className="work-dates">
                    <label>{item.dateJoining}</label>-<label>{item.dateEnding}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
