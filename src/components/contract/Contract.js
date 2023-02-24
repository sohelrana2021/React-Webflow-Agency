import React from 'react'
import TitleHadding from '../Layouts/TitleHadding'
import Para from '../Layouts/Para'
import ContractForm from '../Layouts/ContractForm'
import "./contract.css"

const Contract = () => {
  return (
    <section class="contract-list">
        <div class="container">
            <div class="row">
                <div class="contract-left">
                    <TitleHadding title="Building stellar websites for early startups"/>
                    <Para pataTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
                    
                </div>
                <div class="contract-right">
                    <TitleHadding title="Send inquiry"/>
                    <Para pataTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
                    <ContractForm/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contract