import React, { useEffect, useState } from 'react'
import letterData from '../Data/letters.json'

const gameTypes = [
  { path: '/', title: 'Word Board', id: 'wordBoard' },
  { path: '/letters', title: 'Letters', id: 'letters' },
  { path: '/numbers', title: 'Numbers', id: 'numbers' },
]

function Builder() {
  const [section, setSection] = useState('')
  const [words, setWords] = useState('')
  const [maxLength, setMaxLength] = useState(0)
  const [useSmall, setUseSmall] = useState(false)
  const [iframeVisible, setIframeVisible] = useState(false)
  const [url, setUrl] = useState('')
  const [gameType, setGameType] = useState(gameTypes[0])

  console.log(gameType)

  useEffect(() => {
    console.log({ gameType })
    let baseURL = `${window.location.origin}${gameType.path}?banner=false`
    const formData = {
      baseURL: window.location.origin,
      word: words.replace(/ /g, '').toLowerCase(),
      section,
      maxLength,
      useSmall,
    }
    if (formData.word !== '') {
      baseURL = `${baseURL}&word=${formData.word}`
    }
    if (formData.section !== '') {
      baseURL = `${baseURL}&section=${formData.section}`
    }
    if (formData.maxLength !== '') {
      baseURL = `${baseURL}&maxlength=${formData.maxLength}`
    }
    if (formData.useSmall !== '') {
      baseURL = `${baseURL}&useSmall=${formData.useSmall}`
    }
    setUrl(baseURL)
  }, [section, words, gameType, maxLength, useSmall])

  function openNewWindow() {
    console.log({ url })
    var win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <main className="max-w-[750px] px-2 mx-auto">
      <form
        id="buildIframe"
        className="flex flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="w-full text-center text-2xl font-bold p-3">
          Word Board Generator
        </h1>
        <div className="flex">
          {gameType &&
            gameTypes.map((t) => (
              <button
                key={t.id}
                className={`w-full p-2 ${
                  gameType.id === t.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-400'
                }`}
                onClick={() => setGameType(t)}
              >
                {t.title}
              </button>
            ))}
        </div>
        {gameType.id === 'wordBoard' && (
          <div className="flex flex-col pt-2">
            <label htmlFor="word">
              Words <small>(Separate with commas)</small>
            </label>

            <textarea
              id="word"
              className="border p-1"
              value={words}
              onChange={(e) => setWords(e.target.value)}
            />
          </div>
        )}
        {gameType.id === 'letters' && (
          <div className="flex flex-col pt-2">
            <label htmlFor="maxLength">Letters Length</label>

            <input
              id="maxLength"
              className="border p-1"
              type="number"
              value={maxLength}
              onChange={(e) => setMaxLength(e.target.value)}
            />
          </div>
        )}
        {gameType.id === 'numbers' && (
          <div className="flex flex-col pt-2">
            <label htmlFor="maxLength">Numbers Length</label>

            <input
              id="maxLength"
              className="border p-1"
              type="number"
              value={maxLength}
              onChange={(e) => setMaxLength(e.target.value)}
            />
          </div>
        )}
        {gameType.id === 'numbers' && (
          <div className="flex pt-2">
            <input
              id="useSmall"
              className="border p-1"
              type="checkbox"
              checked={useSmall}
              onChange={(e) => setUseSmall(e.target.checked)}
            />
            <label htmlFor="useSmall" className="pl-2 ">
              Use Small Numbers
            </label>
          </div>
        )}
        {(gameType.id === 'wordBoard' || gameType.id === 'letters') && (
          <div className="flex flex-col pt-2">
            <label htmlFor="section">Section</label>
            <select
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            >
              <option>Select Section</option>
              <optgroup label="Section 1">
                <option>1.1</option>
                <option>1.2</option>
                <option>1.3</option>
                <option>1.4</option>
                <option>1.5</option>
                <option>1.6</option>
              </optgroup>
              <optgroup label="Section 2">
                <option>2.1</option>
                <option>2.2</option>
                <option>2.3</option>
                <option>2.4</option>
                <option>2.5</option>
              </optgroup>
              <optgroup label="Section 3">
                <option>3.1</option>
                <option>3.2</option>
                <option>3.3</option>
                <option>3.4</option>
                <option>3.5</option>
              </optgroup>
              <optgroup label="Section 4">
                <option>4.1</option>
                <option>4.2</option>
                <option>4.3</option>
                <option>4.4</option>
              </optgroup>
              <optgroup label="Section 5">
                <option>5.1</option>
                <option>5.2</option>
                <option>5.3</option>
                <option>5.4</option>
                <option>5.5</option>
              </optgroup>
              <optgroup label="Section 6">
                <option>6.1</option>
                <option>6.2</option>
                <option>6.3</option>
                <option>6.4</option>
              </optgroup>
            </select>
          </div>
        )}
        <div className="flex py-3">
          <button
            id="viewPage"
            onClick={openNewWindow}
            className="w-full mr-1 py-1 px-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            View Page
          </button>
          <button
            className="w-full bg-purple-500 py-1 px-2 text-white rounded hover:bg-purple-700"
            onClick={() => setIframeVisible(true)}
          >
            Generate iFrame Code
          </button>
        </div>
      </form>
      {iframeVisible && (
        <textarea
          readOnly
          className="w-full h-[100px] border-2 border-green-400 p-2 rounded"
          value={`<div style="width: 100%;height:800px;"><iframe src="${url}" id="WordBoard" title="Word Board" style="width: 100%;height:100%;"></iframe></div>`}
        />
      )}
    </main>
  )
}

export default Builder
