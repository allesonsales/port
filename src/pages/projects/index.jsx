import { useEffect, useState } from 'react'
import datajson from '../../data.json'
import './style.css'

const Projects = () => {
const [list, setList] = useState(null);
useEffect(() => {
    if (datajson) {
        setList(datajson);
    } else {
        console.error (error);
    }
}, [])

    return (
      
        <section id='projects'>
            <div className="title">
                <h2>Projetos</h2>
            </div>
            <div className="projectsContainer">    
                {list?.map(({ name,link, image, url, description }, index) => (
                    <div className="item">
                    <a href={link}>
                        <div className='background' style={{ backgroundImage: `url(${image})`}} key = {index}>
                        </div>
                        <span className='projectTitle'>{name}</span>
                        <span className='projectDescription'>{description}</span>
                    </a>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Projects