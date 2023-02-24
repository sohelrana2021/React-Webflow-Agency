import React from 'react'
import TitleHadding from '../Layouts/TitleHadding'
import BlogLayouts from '../Layouts/BlogLayouts'
import "./blog.css"

const Blog = () => {
  return (
    <section className="blog">
        <div className="container">
            <div className="row">
             <TitleHadding title="Our Blog"/>
            </div>
            <div className="row">
                <BlogLayouts img="images/blog-1.png" date="19 Jan 2022" blogTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" blogPara="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
                <BlogLayouts img="images/blog2.png" date="19 Jan 2022" blogTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" blogPara="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
                <BlogLayouts img="images/blog 3.png" date="19 Jan 2022" blogTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" blogPara="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
               
            </div>
        </div>
    </section>
  )
}

export default Blog