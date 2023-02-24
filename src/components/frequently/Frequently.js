import React from 'react'
import FrequentlyLayouts from '../Layouts/FrequentlyLayouts'
import "./frequently.css"

const Frequently = () => {
  return (
    <section className="frequently">
        <div className="container">
            <div className="row">
                <div className="freq-left">
                    <h2>Frequently asked questions</h2>
                    <a href="">Contact us for more info</a>
                </div>
                <div className="freq-right">
                    <FrequentlyLayouts index="01" title="How much time does it take?" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <FrequentlyLayouts index="02" title="What is your class naming convention?" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <FrequentlyLayouts index="03" title="How do you communicate?" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <FrequentlyLayouts index="04" title="I have a bigger project. Can you handle it?" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <FrequentlyLayouts index="05" title="What is your class naming convention?" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Frequently