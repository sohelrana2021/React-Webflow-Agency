import React from 'react'
import WorkLayouts from '../Layouts/WorkLayouts'
import Title from '../Layouts/Title'
import TitleHadding from '../Layouts/TitleHadding'
import Para from '../Layouts/Para'
import "./work.css"

const Work = () => {
  return (
    <section className="work">
        <div className="container">
            <div className="row">
                <div className="work-left">
                    <Title>
                    <TitleHadding title="How we work"/>
                    <Para pataTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
                    </Title>
                </div>
                <div className="work-right">
                    <div className="row">
                        <WorkLayouts title="Strategy 1" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/pointer 1.png"/>
                        <WorkLayouts title="Wireframing" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/pointer 1.png"/>
                        <WorkLayouts title="Design" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/pointer 1.png"/>
                        <WorkLayouts title="Development" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/pointer 1.png"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work