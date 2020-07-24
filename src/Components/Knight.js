import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Board'

export const Knight = () => {

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.KNIGHT},
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
♘
        </div>
    )
}
