import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'

export const Banner = () => {
  return (
    <Link
      to={'/about'}
      className=" flex bg-rose-400 p-5 text-2xl text-white justify-center mb-2"
    >
      <h1>Click here to choose substep</h1>
    </Link>
  )
}
