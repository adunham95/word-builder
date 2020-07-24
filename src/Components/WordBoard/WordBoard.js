import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Letter from '../Letter/Letter';
import { LetterList } from '../LetterList/LetterList';
import "./WordBoard.scss"
import { Trashcan } from '../TrashCan/TrashCan';
import letterData from "../../Data/letters.json"
import { useQuery } from '../../Functions/Hooks/useQuery';

function renderLetters(i, letter){
  return(
    <Letter key={i}>
      {letter}
  </Letter>
  )
}


export const WordBoard = () => {

  const query = useQuery();


  let maxLevel = 1.1;
  if(typeof query.section !== "undefined" && query.section !== ""){
    maxLevel = parseFloat(query.section);
  }

  console.log("maxLevel", maxLevel)

  const alphabet = letterData.filter(d => d.level < (maxLevel + 0.1))
  const renderedAlphabet = []

  for (let i = 0; i < alphabet.length; i++) {
    renderedAlphabet.push(renderLetters(i, alphabet[i].letter))
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
