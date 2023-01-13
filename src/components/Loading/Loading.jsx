import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
        <h1>Cargando</h1>
        <div className="loading__container">
            <div className="loading__container__item"></div>
            <div className="loading__container__item"></div>
            <div className="loading__container__item"></div>
            <div className="loading__container__item"></div>
            <div className="loading__container__item"></div>
        </div>
        </div>
    )
}

export default Loading
