import { useContext } from 'react'
import { WordContext } from '../../Context/WordContext'
import { useQuery } from './useQuery'

const useWord = () => {
  const [state, setState] = useContext(WordContext)
  const queryData = useQuery()

  function checkIfMatchesWord(array) {
    const thereWord = array
      .map((l) => {
        return l.letter
      })
      .join('')

    if (typeof queryData.word === 'undefined') {
      return false
    } else if (queryData.word === '') {
      return false
    } else if (queryData.word !== '') {
      const wordMatchArray = queryData.word.split(',')

      return wordMatchArray.includes(thereWord.toLowerCase())
    } else {
      return false
    }
  }

  function removeLetterByIndex(index) {
    let currentWord = [...state.word]

    currentWord.splice(index, 1)

    setState((state) => ({
      ...state,
      word: currentWord,
      matchesWord: checkIfMatchesWord(currentWord),
    }))
  }

  function removeAllLetters(index) {
    let currentWord = []

    currentWord.splice(index, 1)

    setState((state) => ({
      ...state,
      word: currentWord,
      matchesWord: checkIfMatchesWord(currentWord),
    }))
  }

  function addLetterToWord(letter, className) {
    let currentWord = [...state.word]

    currentWord.push({
      letter: letter.replace(/-/g, '').toLowerCase(),
      className,
    })

    setState((state) => ({
      ...state,
      word: currentWord,
      matchesWord: checkIfMatchesWord(currentWord),
    }))
  }

  return {
    addLetterToWord,
    removeLetterByIndex,
    removeAllLetters,
    word: state.word,
    matchesWord: state.matchesWord,
  }
}

export default useWord
