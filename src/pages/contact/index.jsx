import './style.css'

const contact = () => {
    return (
        <section id="contact">
            <div className="title">
                <h2>Contato</h2>
            </div>
            <div className="content contato">
                <div className="contatoText">
                    <span>E aí, bora trampar juntos?</span>
                    <i className="bi bi-emoji-smile"></i>
                </div>
                <div className="contatoIcons">
                    <div className="icon">
                        <a href="https://wa.me/5511966186601" target='blank'>
                            <span>11 96618-6601</span>
                            <i class="bi bi-whatsapp"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:allesonsales@gmail.com">
                            <span>allesonsales@gmail.com</span>
                            <i className="bi bi-envelope-at-fill"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href='https://www.linkedin.com/in/allesonsales/' target='blank'>
                            <span>LinkedIn</span>
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href=''>
                            <span>Instagram</span>
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href='https://github.com/allesonsales' target='blank'>
                            <span>GitHub</span>
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact