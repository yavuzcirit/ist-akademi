import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle="IST.AKEMİ'YE HOŞGELDİNİZ" title='Almancayı Öğrenmek İçin En Doğru Adres!' />
            <p>Uzman Kadro ile Binlerce Başarı Hikayesinde Sen de Yerini Al</p>
            <div className='button'>
              <button className='primary-btn'>
                Hemen Başla <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Dersleri Gör<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
