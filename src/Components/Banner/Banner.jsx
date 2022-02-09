import React from 'react'
import "./Banner.scss"

export const Banner = () => {
    return (
        <a href={`${window.location}builder/`} className="banner">
           <h1>Click here to choose substep</h1> 
        </a>
    )
}
