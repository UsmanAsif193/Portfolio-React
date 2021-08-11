import React from 'react'
import { useDarkMode } from '../../../Context/DarkMode'
import './SkillCard.css'

function SkillCard({ skill }) {
    const darkMode = useDarkMode()
    return (
        <div className="skill-card">
            {darkMode ? (
                <div className="skill-icon">{skill.darkicon}</div>
            ) : (
                <div className="skill-icon">{skill.icon}</div>
            )}
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default SkillCard
