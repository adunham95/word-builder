import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import useWord from '../../Functions/Hooks/useWord'

export const LetterList = ({letters}) => {

    const {addLetterToWord, word} = useWord()

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.LETTER,
        drop: (item) => addLetterToWord(item.letter),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return (
        <div ref={drop}
        className="wordDrop"
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: "100px",
          }}>
              {isOver && (
        <div
                className="wordDrop-over"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
            {word.map(l => <span>{l}</span>)}
        </div>
    )
}
