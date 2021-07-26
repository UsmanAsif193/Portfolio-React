import React from 'react'
import './Skills.css'
import Seperator from '../../Common/Seperator'
import { SkillsData } from '../../Data/Skills'
import SkillCard from './SkillCard'


function Skills() {
    const data = SkillsData
    return (
        <div className='skills'>
            <Seperator />
            <label className="section-title"></label>
            <div className="skills-container">
                {data.map((item) => {
                    return (
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
