import './style.css'

const SoftSkills = () => {
    return (
        <section id="softSkills">
            <div className="title">
                <h2>Soft Skills</h2>
            </div>
            <div className="content">
                <div className="skill autodidata">
                    <i className="bi bi-highlighter"></i>
                    <span>Autodidata</span>
                </div>
                <div className="skill resolutivo">
                    <i className="bi bi-lightbulb"></i>
                    <span>Resolutivo</span>
                </div>
                <div className="skill lideranca">
                    <i className="bi bi-yin-yang"></i>
                    <span>Liderança</span>
                </div>
                <div className="skill time">
                    <i className="bi bi-emoji-wink"></i>
                    <span>Do time</span>
                </div>
                <div className="skill pensamento">
                    <i className="bi bi-chat-quote"></i>
                    <span>Pensamento Crítico</span>
                </div>
            </div>
        </section>
    )
}

export default SoftSkills