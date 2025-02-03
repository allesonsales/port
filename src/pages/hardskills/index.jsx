import './style.css'

const HardSkills = () => {
    
    return(
        <section id='sectionhard'>
            <div id="hardSkills">
                <div className="title">
                    <h2>Hard Skills</h2>
                </div>
                <div className="content">
                    <div className="skill html">
                        <i className="bi bi-filetype-html"></i>
                        <span>HTML</span>
                    </div>
                    <div className="skill css">
                        <i className="bi bi-filetype-css"></i>
                        <span>CSS</span>
                    </div>
                    <div className="skill javascript">
                        <i className="bi bi-filetype-js"></i>
                        <span>JavaScript</span>
                    </div>
                    <div className="skill node">
                        <i className="bi bi-filetype-json"></i>
                        <span>Node JS</span>
                    </div>
                    <div className="skill react">
                        <i className="bi bi-filetype-jsx"></i>
                        <span>React JS</span>
                    </div>
                    <div className="skill figma">
                        <span>Figma</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HardSkills