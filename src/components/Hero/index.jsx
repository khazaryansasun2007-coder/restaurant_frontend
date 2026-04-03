import React, { useEffect, useState } from 'react'
import { HeroImg } from '/src/assets/Images/index.js'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const [category, setCategory] = useState("cocktails")
  const [hero, setHero] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const product = hero[currentIndex]
  const { t } = useTranslation()

  useEffect(() => {
    axios.get(`http://localhost:3001/${category}`)
      .then(response => {
        setHero(response.data)
        setCurrentIndex(0)
      })
      .catch(error => console.log(error));

  }, [category])

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % hero.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => prev === 0 ? hero.length - 1 : prev - 1)
  }

  // setCurrentIndex((prev)=> (prev + 1) % hero.length)
  //prev - 0
  // prev + 1 = 1
  //2 % 4 = 1





  return (
    <div className='bg-[#b7bca9b5] flex justify-around pt-14 pb-14'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-8 items-center'>
          {hero.length > 0 && (
            <img
              className='w-120 h-155 object-cover'
              src={product.image}
              alt={product.name}
            />
          )}
          <div className='flex flex-col gap-8 mt-86'>
            <button onClick={prevProduct} className='border py-6 px-6 rounded-full flex items-center justify-center cursor-pointer text-lg hover:bg-black hover:text-white transition'>
              <HiOutlineArrowLeft />
            </button>
            <button onClick={nextProduct} className='border py-6 px-6 rounded-full flex items-center justify-center cursor-pointer text-lg hover:bg-black hover:text-white transition'>
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>
        {hero.length > 0 && (
          <>
            <p className='font-bold text-xl clash'>{t(`${product.name}`)}</p>
            <p className='text-[#36392D] text-lg roboto'>${product.price}</p>
            <p className='text-[#36392D] roboto'>{t(`${product.description}`)}</p>
          </>
        )}
      </div>
      <div className='flex flex-col w-[570px] pt-20'>
        <button onClick={() => setCategory("wines")} className={`text-[#9FA68C] text-5xl font-bold  border-b-2 border-[#9FA68C] cursor-pointer h-34 text-left ${category === "wines" ? "text-[#36392D]" : ""} clash2`}>{t("drink-category.wine")}</button>
        <button onClick={() => setCategory("cocktails")} className={`text-[#9FA68C] text-5xl font-bold border-b-2 border-[#9FA68C] cursor-pointer h-34 text-left ${category === "cocktails" ? "text-[#36392D]" : ""} clash2`}>{t("drink-category.cocktails")}</button>
        <button onClick={() => setCategory("beers")} className={`text-[#9FA68C] text-5xl font-bold border-b-2 border-[#9FA68C] cursor-pointer h-34 text-left ${category === "beers" ? "text-[#36392D]" : ""} clash2`}>{t("drink-category.beer")}</button>
      </div>
    </div>
  )
}

export default Hero