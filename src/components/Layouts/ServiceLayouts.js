import React from 'react'
import Title from './Title'

const ServiceLayouts = ({title, para}) => {
  return (
    <div class="service-item">
        <i class="fa-sharp fa-solid fa-people-group"></i>
        <h3>{title}</h3>
        <p>{para}</p>
    </div>
  )
}

export default ServiceLayouts