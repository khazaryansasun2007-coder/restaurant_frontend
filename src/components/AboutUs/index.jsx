import React, { useEffect, useState } from 'react'
import { about1, about2, about3, about4, about5, about6, about7, about8 } from '../../assets/Images'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const images = [about1, about2, about3, about4, about5, about6, about7, about8]
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='h-[90vh] bg-[#b7bca9b5] py-50'>

      <div className='flex justify-around items-start mb-16 text-[#36392D]'>
        <h2 className='text-5xl font-bold'>{t("headings.heading-about")}</h2>
        <p className='max-w-[500px] text-lg'>{t("descriptions.desc-about")}</p>
      </div>

      <div className='overflow-hidden w-full mx-auto'>
        <div
          className='flex gap-6 transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className='w-[600px] h-[415px] flex-shrink-0 object-cover'
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default AboutUs