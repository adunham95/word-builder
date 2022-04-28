import React from 'react'
import Trash from './Icons/trash-alt-solid.svg'

export const Icons = ({ icon }) => {
  const generateIcon = () => {
    switch (icon.toLowerCase()) {
      case 'trash':
        return <Trash />
      default:
        return ''
    }
  }

  return <span className="icon">{generateIcon()}</span>
}
