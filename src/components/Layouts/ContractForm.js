import React from 'react'

const ContractForm = () => {
  return (
    <>
      <form action="#">
        <input type="text" name="name" placeholder="Youe Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <input type="url" name="url" placeholder="Paste your Figma design URL"/>
      </form>
      <div class="contarct-btn">
        <a class="contarct-sent" href="">Send an Inquiry</a>
        <a class="contarct-sent-2" href="">Get in touch with us
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </>

  )
}

export default ContractForm