import React from 'react'

const WorkLayouts = ({title, para, img}) => {
  return (
    <div className="item">
        <img src={img} alt="img"/>
        <h3>{title}</h3>
        <p>{para}</p>
    </div>
  )
}

export default WorkLayouts