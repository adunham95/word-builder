import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Letter from '../Components/Letter/Letter'
import { useQuery } from '../Functions/Hooks/useQuery'

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const big = [25, 50, 75, 100]
const little = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const smallBig = [6, 7, 8, 9, 10]
const smallLittle = [1, 2, 3, 4, 5]

const Numbers = () => {
  const query = useQuery()
  const [selectedLetters, setSelectedLetters] = useState([])
  const [finalNumb, setFinalNum] = useState(0)
  const [isGenerated, setIsGenerated] = useState(false)
  const maxLength = parseInt(query.maxlength) || 6

  function getLetter(isBig = false) {
    if (selectedLetters.length >= maxLength) {
      return
    }
    let letterArray = query.useSmall ? smallLittle : little
    if (isBig) {
      letterArray = query.useSmall ? smallBig : big
    }
    const selectedLetter = get_random(letterArray)
    console.log({ selectedLetter })
    setSelectedLetters([...selectedLetters, selectedLetter])
  }

  function calculate() {
    var time = 1
    const [min, max] = query.useSmall ? [10, 99] : [100, 999]

    var interval = setInterval(function () {
      setIsGenerated(false)
      if (time <= 7) {
        setFinalNum(randomIntFromInterval(min, max))
        time++
      } else {
        setIsGenerated(true)
        clearInterval(interval)
      }
    }, 100)
  }

  function reset() {
    setIsGenerated(false)
    setFinalNum(0)
    setSelectedLetters([])
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`flex justify-center ${
          isGenerated ? 'text-emerald-500' : 'text-gray-500'
        }`}
      >
        <p className=" text-9xl">{finalNumb}</p>
      </div>
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
          className="rounded m-1 bg-emerald-500 whitespace-nowrap text-white p-2 px-3 font-child uppercase text-lg disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
          onClick={calculate}
          disabled={selectedLetters.length < maxLength}
        >
          Calculate
        </button>
        <button
          className="rounded w-full m-1 bg-blue-500 text-white p-2 font-child uppercase text-lg"
          onClick={() => getLetter(true)}
        >
          Big
        </button>
        <button
          className="rounded w-full m-1 bg-blue-500 text-white p-2 font-child uppercase text-lg"
          onClick={() => getLetter()}
        >
          Small
        </button>
        <button
          className="rounded m-1 bg-rose-500 whitespace-nowrap text-white p-2 px-3 font-child uppercase text-lg"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </DndProvider>
  )
}

export default Numbers
