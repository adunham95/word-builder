import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import useWord from '../../Functions/Hooks/useWord'
import "./LetterList.scss"
import { ActiveLetter } from '../Letter/Letter'
import { Confetti } from '../Confetti/Confetti'

export const LetterList = () => {

    const {addLetterToWord, word, matchesWord} = useWord()

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.LETTER,
        drop: (item) => addLetterToWord(item.letter, item.className),
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
      {matchesWord && <Confetti/>}
            {word.map((l,i) => <ActiveLetter i={i} key={`live-letter-${l.letter}-${i}`} children={l.letter} className={l.className}/>)}
        </div>
    )
}