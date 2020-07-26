import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Letter from '../Letter/Letter';
import { LetterList } from '../LetterList/LetterList';
import "./WordBoard.scss"
import { Trashcan } from '../TrashCan/TrashCan';
import letterData from "../../Data/letters.json"
import { useQuery } from '../../Functions/Hooks/useQuery';
import { Banner } from '../Banner/Banner';

export const WordBoard = () => {

  const query = useQuery();

  let maxLevel = 1.1;
  let showBanner = true;
  if(typeof query.section !== "undefined" && query.section !== ""){
    maxLevel = parseFloat(query.section);
  }

  if(typeof query.banner !== "undefined"){
    showBanner = false
  }


  console.log("maxLevel", maxLevel)

  const alphabet = letterData

  console.log(alphabet);


  return (
      <DndProvider backend={HTML5Backend}>
        {showBanner ? <Banner/> : ""}
        <div className="letterContainer">
          {
            alphabet.map(r => {
              return <div className="letterContainer-inner">
                {
                  r.filter(d => parseFloat(d.level) <= (maxLevel)).map((letterData, i) => {
                    return <Letter key={i} className={letterData.color} children={letterData.letter}/>
                  })
                }
                </div>
            })
          }
        </div>
        <div className="bottom-float">
          <LetterList/>
          <Trashcan/>
        </div>
    </DndProvider>
  )
}
