import './style.css'

const icon = () => {
    return (
        <section id="contact">
            <div className="title">
                <h2>Contato</h2>
            </div>
            <div className="content contato">
                <div className="contatoText">
                    <span>E aí, bora trampar juntos?</span>
                    <i class="bi bi-emoji-smile"></i>
                </div>
                <div className="contatoIcons">
                    <div className="icon">
                        <a href="#">11 96618-6601</a>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                    <div className="icon">
                        <a href="#">allesonsales@gmail.com</a>
                        <i class="bi bi-envelope-at-fill"></i>
                    </div>
                    <div className="icon">
                        <a href=''>LinkedIn </a>
                        <i class="bi bi-linkedin"></i>
                    </div>
                    <div className="icon">
                        <a href=''>Instagram</a>
                        <i class="bi bi-instagram"></i>
                    </div>
                    <div className="icon">
                        <a href='#'>GitHub</a>
                        <i className="bi bi-github"></i>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default icon