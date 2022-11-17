import React from 'react'
import "./grid1.css";


import image1 from "../../images/IMG-20220302-WA0067.jpg"
import image2 from "../../images/IMG-20220428-WA0038.jpg"
import image3 from "../../images/IMG-20220428-WA0049.jpg"
import image4 from "../../images/IMG-20220428-WA0050.jpg"


const Grid1 = () => {
  return (
  
    <div className="grid-1-container">
        <article className="featured-article">
            <img src={image1} alt="FeaturedImage" width="510px" height="380px"/>
            <div>
                <h2>Teddy With Friends at Code Queen</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo eum iure et vero dignissimos itaque nemo totam nobis, voluptas facilis dolores maiores necessitatibus repellendus sint, reiciendis voluptatum doloribus debitis aliquam saepe consequatur! Nesciunt, quasi?
                </p>
            </div>
        </article>
        <article>
            <img src={image2} alt="article img"  width="510px" height="380px"/>
            <div>
                <h3>Drinks Ready For us</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate expedita nulla commodi qui magni aliquam quisquam.</p>
            </div>
        </article>
        <article>
            <img src={image3} alt="article img" width="510px" height="380px"/>
            <div>
                <h3>Teddy With Devota</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate expedita nulla commodi qui magni aliquam quisquam.</p>
            </div>
        </article>
        <article>
            <img src={image4} alt="article img" width="510px" height="380px"/>
            <div>
                <h3>Codequeens Eating Pizza</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate expedita nulla commodi qui magni aliquam quisquam.</p>
            </div>
        </article>
       
    </div>
  )
}

export default Grid1