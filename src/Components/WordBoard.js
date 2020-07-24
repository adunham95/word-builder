import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Letter from './Letter';
import { LetterList } from './LetterList';

function renderLetters(i, letter){
  return(
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Letter>
        {letter}
      </Letter>
    </div>
  )
}


export const WordBoard = ({word}) => {

    console.log(word);
    
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const renderedAlphabet = []
  // for (let i = 0; i < 24; i++) {
  //     squares.push(renderLetters(i))
  // }

  for (let i = 0; i < alphabet.length; i++) {
    renderedAlphabet.push(renderLetters(i, alphabet[i]))
}

  return (
      <DndProvider backend={HTML5Backend}>
        <div>
          {renderedAlphabet}
        </div>
        <div>
          <LetterList/>
        </div>
    </DndProvider>
  )
}
