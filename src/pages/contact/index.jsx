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
                            11 96618-6601
                            <i class="bi bi-whatsapp"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:allesonsales@gmail.com">
                            allesonsales@gmail.com
                            <i className="bi bi-envelope-at-fill"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href='https://www.linkedin.com/in/allesonsales/' target='blank'>
                            LinkedIn 
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href=''>
                            Instagram
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href='https://github.com/allesonsales' target='blank'>
                            GitHub
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact