import React from 'react'

const Listitem = ({listitem, className}) => {
  return (
    <li className={className}>{listitem}</li>
  )
}

export default Listitem