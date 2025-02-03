import './nav.modules.css'

const NavBar = () => {

    return (
        <nav>
            <div className="logoTitle">
                <span>A'S</span>
                <small>Front-End Developer</small>
            </div>
            <ul className="styles.nav-bar">
                <li className="nav-icon"><a href='#aboutMe'>Início</a></li>
                <li className="nav-icon"><a href='#hardSkills'>Hard Skills</a></li>
                <li className="nav-icon"><a href='#softSkills'>Soft Skills</a></li>
                <li className="nav-icon"><a href='#'>Projetos</a></li>
                <li className="nav-icon"><a href='#contact'>Contato</a></li>
            </ul>
        </nav>
    )
}

export { NavBar }