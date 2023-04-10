import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Error = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-dark dark:text-white font-mono">
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-3xl mb-14">Página no encontrada</h2>
                <Link to="/" className="py-2 px-6 bg-gray-900 text-white rounded-full text-2xl hover:bg-gray-700 transition duration-300 ease-in-out flex items-center animate-bounce">
                    Volver al inicio
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error