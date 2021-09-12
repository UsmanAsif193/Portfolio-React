import React,{ useState, useEffect} from 'react'
import './Work.css'
import Seperator from '../../Common/Seperator'
import WorkCard from './WorkCard.js'
import axios from 'axios'


function Work() {
    const [data, setData ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/work')
        .then((response) => {
            setData(response.data);
        })
    },[])
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
