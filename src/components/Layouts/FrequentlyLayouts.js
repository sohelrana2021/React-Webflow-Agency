import React from 'react'

const FrequentlyLayouts = ({title, index, para}) => {
  return (
    <div className="freq-faq">
        <h2 id="de" className="faq-btn"><span>{index}</span>{title}</h2>
        <p className="faq-contant">{para}</p>
    </div>
  )
}

export default FrequentlyLayouts