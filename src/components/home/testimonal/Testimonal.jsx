import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='YORUMLAR' title='Başarılı Kursiyerlerimiz' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
              
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
              
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
