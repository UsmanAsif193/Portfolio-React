import React from 'react'
import './Work.css'
import Seperator from '../../Common/Seperator'
import { WorkData } from '../../Data/Work'
import WorkCard from './WorkCard.js'


function Work() {
    const data = WorkData
    return (
        <div className='work'>
            <Seperator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item) => {
                    return (
                        <WorkCard item={item} key={item.company} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
