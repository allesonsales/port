import './style.css'
import { useState } from 'react';

const MenuHamburguer = () => {

    const [hamburguerOpen, setHamburguerOpen] = useState(false);

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }

    return (
    <>
        <div className="menuHamburguer" onClick={toggleHamburguer}>
        {hamburguerOpen ? (
                    <i className="bi bi-x"></i>
                ) : (
                    <i className="bi bi-list"></i>
                )}
        </div>
        <div className="menuHamburguerList" style={{display: hamburguerOpen ? 'flex' : 'none'}}>
            <ul className='ulHamburguer'>
                <li><a href='#aboutMe'>Inicio</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li><a href='#hardSkills'>Hard Skills</a></li>
                <li><a href='#softSkills'>Soft Skills</a></li>
                <li><a href='#contact'>Contato</a></li>
            </ul>
        </div>
    </>
    )
}

export default MenuHamburguer