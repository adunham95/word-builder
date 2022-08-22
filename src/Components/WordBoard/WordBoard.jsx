import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Letter from '../Letter/Letter'
import { LetterList } from '../LetterList/LetterList'
import './WordBoard.scss'
import { Trashcan } from '../TrashCan/TrashCan'
import letterData from '../../Data/letters.json'
import { useQuery } from '../../Functions/Hooks/useQuery'
import { Banner } from '../Banner/Banner'
import Header from '../Header/Header'

export const WordBoard = () => {
  const query = useQuery()

  let maxLevel = 1.1
  if (typeof query.section !== 'undefined' && query.section !== '') {
    maxLevel = parseFloat(query.section)
  }

  const alphabet = letterData

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <div
          className="letterContainer left"
          style={{ minWidth: 'calc(64px * 8)' }}
        >
          {alphabet.map((r) => {
            return (
              <div className="letterContainer-inner">
                {r
                  .filter((d) => !d.isConstOrPrefix)
                  .filter((d) => parseFloat(d.level) <= maxLevel)
                  .map((letterData, i) => {
                    return (
                      <Letter
                        key={i}
                        className={letterData.color}
                        children={letterData.letter}
                      />
                    )
                  })}
              </div>
            )
          })}
        </div>
        <div className="letterContainer right">
          {alphabet.map((r) => {
            return (
              <div className="letterContainer-inner">
                {r
                  .filter((d) => d.isConstOrPrefix)
                  .filter((d) => parseFloat(d.level) <= maxLevel)
                  .map((letterData, i) => {
                    return (
                      <Letter
                        key={i}
                        className={letterData.color}
                        children={letterData.letter}
                      />
                    )
                  })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="bottom-float">
        <LetterList />
        <Trashcan />
      </div>
    </DndProvider>
  )
}
