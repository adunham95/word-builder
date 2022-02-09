import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Constants'
import "./Letter.scss"

const Letter = ({children, className}) => {

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.LETTER, letter: children, className},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div
            ref={drag}
            className={`${isDragging?"dragging":""} letter ${className}`}
        >
            {children}
        </div>
    )
}

const ActiveLetter = ({i, children, className=""}) =>{
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.ACTIVE_LETTER, index: i},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <span
            ref={drag}
            className={`letter letter-active ${className} ${isDragging}`}
        >
            {children}
        </span>
    )
}

export default Letter
export {ActiveLetter}