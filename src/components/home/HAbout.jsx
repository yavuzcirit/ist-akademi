import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='KURSLARIMIZ' title='ALMANCA ROTAMIZ' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2' style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
              {coursesCard.slice(0, 4).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div style={{displa:"flex",flexDirection:"column"}}>
                        <p>{val.el1}</p>
                        <p>{val.el2}</p>
                        <p>{val.el3}</p>
                      </div>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                      </div>
                    </div>
                  </div>
                  <a href="https://wa.me/+905422066534?text=Hello%20from%20your%20website!" target="_blank"> <button className='outline-btn'>İLETİŞİME GEÇ</button></a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
