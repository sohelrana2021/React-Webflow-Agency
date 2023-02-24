import React from 'react'

const BlogLayouts = ({img, date, blogTitle, blogPara}) => {
  return (
    <div className="blog-item">
        <img src={img} alt="Blogimg"/>
        <h6>{date}</h6>
        <h3>{blogTitle}</h3>
        <p>{blogPara}</p>
        <a className="contarct-sent-2" href="">Read More
        <i className="fa-solid fa-arrow-right"></i>
        </a>
    </div>
  )
}

export default BlogLayouts