import React from 'react'

const Buttton = ({ label,onClick, className }) => {
  return (
      <button className={`px-5 py-3 border ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Buttton