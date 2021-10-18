import React from 'react'
import './Work.css'
import WorkData from '../../Data/Work.json'
import WorkCard from './WorkCard.js'


function Work() {
    const data = WorkData
    return (
        <div className='work'>
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
