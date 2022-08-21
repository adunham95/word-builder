import React from 'react'
import './TrashCan.scss'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import useWord from '../../Functions/Hooks/useWord'
import { Icons } from '../Icon/Icons'

export const Trashcan = () => {
  const { removeLetterByIndex } = useWord()

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ACTIVE_LETTER,
    drop: (item) => removeLetterByIndex(item.index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <div ref={drop} className={`trashCan ${isOver ? 'over' : ''}`}>
      <div className="trashCan-inner">
        <Icons icon="Trash" />
      </div>
    </div>
  )
}
