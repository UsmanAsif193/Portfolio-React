import React from 'react'
import { useDarkMode } from '../../../Context/DarkMode'
import './SkillCard.css'

function SkillCard({ skill }) {
    const darkMode = useDarkMode()
    return (
        <div className="skill-card">
            {darkMode ? (
                <div className="skill-icon"><i className={skill.darkiconClass}></i></div>
            ) : (
                <div className="skill-icon"><i className={skill.iconClass}></i></div>
            )}
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default SkillCard
