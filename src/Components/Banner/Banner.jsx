import React from 'react'
import "./Banner.scss"

export const Banner = () => {
    console.log(window.location)
    return (
        <a href={`${window.location}builder/`} className="banner">
           <h1>Click here to choose substep</h1> 
        </a>
    )
}
