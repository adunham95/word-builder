import React from 'react'
import Trash from './Icons/Trash'

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
