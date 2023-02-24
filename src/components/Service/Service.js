import React from 'react'
import TitleHadding from '../Layouts/TitleHadding'
import ServiceLayouts from '../Layouts/ServiceLayouts'
import "./service.css"

const Service = () => {
  return (
    <section class="service">
        <div class="container">
            <div class="service-top">
                <p>Features</p>
                <TitleHadding title="Design that solves problems, one product at a time"/>
            </div>
            <div class="row">
                <ServiceLayouts title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                <ServiceLayouts title="Two Free Revision Round" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                <ServiceLayouts title="Template Customization" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                <ServiceLayouts title="24/7 Support" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                <ServiceLayouts title="Quick Delivery" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                <ServiceLayouts title="Hands-on approach" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            </div>
        </div>
    </section>
  )
}

export default Service