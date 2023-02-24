import React from 'react'
import TitleHadding from '../Layouts/TitleHadding'
import Para from '../Layouts/Para'
import PojectsLayouts from '../Layouts/PojectsLayouts'
import "./projects.css"

const Projects = () => {
  return (
    <section className="projects">
            <div className="container">
                <div className="row">
                    <TitleHadding title="View our projects"/>

                </div>
                <div className="row">
                    <div class="projects-img-left">
                    <img src="images/Card.png" alt="card img"/>
                    <div class="card-overley">
                        <div class="text">
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <Para pataTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
                        
                        </div>
                    </div>
                    </div>
                   {/* cart top */}
                   
                   <div class="projects-img-right">
                        <PojectsLayouts/>
                        <PojectsLayouts/>
                    </div>
                   {/*  */}
                </div>
            </div>
    </section>
        
  )
}

export default Projects
