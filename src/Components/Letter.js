import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

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
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
              }}
        >
            {children}
        </div>
    )
}

export default Letter
