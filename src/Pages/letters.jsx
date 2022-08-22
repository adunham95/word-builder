import React, { useState } from 'react'
import { useQuery } from '../Functions/Hooks/useQuery'
import letterData from '../Data/letters.json'
import Letter from '../Components/Letter/Letter'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { LetterList } from '../Components/LetterList/LetterList'
import { Trashcan } from '../Components/TrashCan/TrashCan'
import useWord from '../Functions/Hooks/useWord'

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const vowels = ['a', 'e', 'i', 'o', 'u']

const Letters = () => {
  const query = useQuery()
  const { removeAllLetters } = useWord()
  const [selectedLetters, setSelectedLetters] = useState([])
  let maxLevel = 1.1
  const maxLength = parseInt(query.maxlength) || 9
  if (typeof query.section !== 'undefined' && query.section !== '') {
    maxLevel = parseFloat(query.section)
  }

  const letters = letterData
    .flat()
    .filter((d) => !d.isConstOrPrefix)
    .filter((d) => parseFloat(d.level) <= maxLevel)
    .map((letterData, i) => {
      return letterData.letter
    })
    .join('')
    .split('')

  console.log({ letters })

  function getLetter(isVowel = false) {
    if (selectedLetters.length >= maxLength) {
      return
    }
    let letterArray = []
    if (isVowel) {
      letterArray = letters.filter((l) => vowels.includes(l))
    }
    if (!isVowel) {
      letterArray = letters.filter((l) => !vowels.includes(l))
    }
    const selectedLetter = get_random(letterArray)
    console.log({ selectedLetter })
    setSelectedLetters([...selectedLetters, selectedLetter])
  }

  function clear() {
    setSelectedLetters([])
    removeAllLetters()
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="flex justify-center">
          <Letter className={'opacity-0 w-0'}>""</Letter>
          {selectedLetters.map((l, i) => (
            <Letter
              key={`${l}-${i}`}
              className={'bg-blue-500 text-white uppercase'}
            >
              {l}
            </Letter>
          ))}
        </div>
        <div className="flex">
          <button
            className="rounded w-full m-1 bg-blue-500 text-white p-2 font-child uppercase text-lg"
            onClick={() => getLetter(true)}
          >
            Vowel
          </button>
          <button
            className="rounded w-full m-1 bg-blue-500 text-white p-2 font-child uppercase text-lg"
            onClick={() => getLetter()}
          >
            Constant
          </button>
          <button
            className="rounded m-1 bg-rose-500 whitespace-nowrap text-white p-2 px-3 font-child uppercase text-lg"
            onClick={clear}
          >
            Clear Letters
          </button>
        </div>
      </div>
      <div className="bottom-float">
        <LetterList />
        <Trashcan />
      </div>
    </DndProvider>
  )
}

export default Letters
