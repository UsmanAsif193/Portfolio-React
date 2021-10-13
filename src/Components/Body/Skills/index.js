import React, {useState} from 'react'
import './Skills.css'
import Seperator from '../../Common/Seperator'
import SkillsData from '../../Data/Skills.json'
import SkillCard from './SkillCard'
import GradientButton from '../../Common/Gradient-Button'

function Skills() {
    const [loadMore, setloadMore] = useState(3)
    const [buttondisable, setbuttondisable] = useState(false)
    const data = SkillsData;

    const loadMoreProjects = () => {
        setloadMore(data.length)
        setbuttondisable(true)
    }

    return (
        <div className='skills'>
            <Seperator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.slice(0, loadMore).map((item) => {
                    return (
                        <div className="skills-section" key={item.type}>
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill={skill} key={skill.name} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <GradientButton
                buttonvalue={"See All"}
                handleClick={loadMoreProjects}
                buttondisable={buttondisable}
            />
            </div>
        </div>
    )
}

export default Skills
