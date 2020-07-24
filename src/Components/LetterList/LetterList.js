import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import useWord from '../../Functions/Hooks/useWord'
import "./LetterList.scss"
import { ActiveLetter } from '../Letter/Letter'

export const LetterList = ({letters}) => {

    const {addLetterToWord, word, matchesWord} = useWord()

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.LETTER,
        drop: (item) => addLetterToWord(item.letter),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return (
        <div ref={drop}
        className={`wordDrop ${matchesWord?"matchesWord":""}`}>
              {isOver && (
        <div
                className="wordDrop-over"
        />
      )}
            {word.map((l,i) => <ActiveLetter index={i}>{l}</ActiveLetter>)}
        </div>
    )
}
