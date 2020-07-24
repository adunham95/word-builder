import React from 'react'
import "./Confetti.scss";

export const Confetti = () => {

    const generateConfetti = () => {
        const renderedConfetti = []
        for (let i = 0; i < 149; i++) {
             renderedConfetti.push(<ConfettiItem key={`confetti-${i}`} i={i}/>)
        }
        return renderedConfetti
    }

    return (
        <div>
            {generateConfetti()}
        </div>
    )
}

const ConfettiItem = ({i}) => {
    return <div className={`confetti confetti-${i}`}/>
}