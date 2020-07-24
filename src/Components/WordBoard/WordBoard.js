import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Letter from '../Letter/Letter';
import { LetterList } from '../LetterList/LetterList';
import "./WordBoard.scss"
import { Trashcan } from '../TrashCan/TrashCan';

function renderLetters(i, letter){
  return(
    <Letter key={i}>
      {letter}
  </Letter>
  )
}


export const WordBoard = () => {
    
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const renderedAlphabet = []

  for (let i = 0; i < alphabet.length; i++) {
    renderedAlphabet.push(renderLetters(i, alphabet[i]))
}

  return (
      <DndProvider backend={HTML5Backend}>
        <div className="letterContainer">
          {renderedAlphabet}
        </div>
        <LetterList/>
        <Trashcan/>
    </DndProvider>
  )
}
