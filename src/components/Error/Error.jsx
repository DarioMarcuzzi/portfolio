import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import './error.css'

const Error = () => {
    return (
        <div className="error__container">
            <div className="error__info">
                <h1>Pagina no encontrada</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/868/868843.png" alt="error" />
                <p>Lo siento, la pagina que esta buscando, no existe.</p>
                <Link to="/"><button>Regresar</button></Link>
            </div>
            <div className="error__footer">
             <Footer />
            </div>
        </div>
    )
}

export default Error
