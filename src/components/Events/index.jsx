import React from 'react'
import { Event1, Event2, Event3, Event4 } from '/src/assets/Images/index.js'
import { useTranslation } from 'react-i18next'


const Events = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-[#b7bca9b5] px-40 pb-14 items-center justify-center'>
      <h1 className='text-5xl text-[#36392D] font-bold pt-14 pl-38 pb-14 clash2'>{t("headings.heading-events")}</h1>
      <p className='text-white font-bold text-2xl relative top-62 left-50 clash'>Corporate Events</p>
      <div className='grid grid-cols-2 object-contain gap-4'>
        <img className='w-[600px] h-[460px]' src={Event1} alt="" />
        <img className='w-[600px] h-[460px]' src={Event2} alt="" />
        <img className='w-[600px] h-[460px]' src={Event3} alt="" />
        <img className='w-[600px] h-[460px]' src={Event4} alt="" />
      </div>
    </div>

  )
}

export default Events