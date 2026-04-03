import React, { useEffect, useState } from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { OurTeam1, OurTeam2, OurTeam3, OurTeam4 } from '/src/assets/Images/index.js';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const OurTeam = () => {
  const [team, setTeam] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    axios.get(`http://localhost:3001/team`)
      .then(response => {
        setTeam(response.data);
        setCurrentIndex(0)
      })
      .catch(error => console.log(error));
  }, [])

  const visibleTeam = team.slice(currentIndex, currentIndex + 4)
  const nextProduct = () => {
    setCurrentIndex(prev => (prev + 4) % team.length)
  }
  const prevProduct = () => {
    setCurrentIndex(prev => (prev === 0 ? Math.max(team.length - 4, 0) : prev - 4));
  }

  return (
    <div className='bg-[#9fa68cdc] pb-16'>
      <div className='flex items-center justify-around pt-12'>
        <h1 className='text-5xl text-[#36392D] font-bold clash2'>{t("headings.heading-team")}</h1>
        <p className='text-[#36392D] roboto w-[500px]'>{t("descriptions.desc-team")}</p>
      </div>
      <div className='flex gap-4 mt-16 ml-18'>
        <button onClick={prevProduct} className='border py-6 px-6 rounded-full flex items-center justify-center cursor-pointer text-lg hover:bg-black hover:text-white transition'>
          <HiOutlineArrowLeft />
        </button>
        <button onClick={nextProduct} className='border py-6 px-6 rounded-full flex items-center justify-center cursor-pointer text-lg hover:bg-black hover:text-white transition'>
          <HiOutlineArrowRight />
        </button>
      </div>
      <div className="flex mt-6 px-6 gap-6 justify-center">
        {visibleTeam.map(item => (
          <div key={item.id} className="flex flex-col items-center justify-start flex-1">
            <img className="w-full h-120 object-cover" src={item.image} alt={item.name} />
            <h1 className="text-[#36392D] text-xl font-bold text-center clash2 mt-2">{t(`${item.name}`)}</h1>
            <p className="text-[#36392D] roboto text-center font-bold text-lg">{t(`${item.role}`)}</p>
            <p className="text-[#36392D] roboto text-center max-w-[478px]">{t(`${item.quote}`)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam