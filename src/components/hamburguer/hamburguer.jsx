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
            <i class="bi bi-list"></i>
        </div>
        <div className="menuHamburguerList" style={{display: hamburguerOpen ? 'flex' : 'none'}}>
            <ul className='ulHamburguer'>
                <li>Inicio</li>
                <li>Hard</li>
                <li>Soft</li>
                <li>Contato</li>
            </ul>
        </div>
    </>
    )
}

export default MenuHamburguer