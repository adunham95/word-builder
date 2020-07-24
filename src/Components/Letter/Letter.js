import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Constants'
import "./Letter.scss"

const Letter = ({children}) => {

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.LETTER, letter: children},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div
            ref={drag}
            className={`${isDragging?"dragging":""} letter `}
        >
            {children}
        </div>
    )
}

export default Letter
