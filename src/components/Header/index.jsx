import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../ui/LanguageSwitcher'
import { Link } from 'react-router-dom'
// {t("headings.heading-about")}
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className='fixed top-0 left-0 z-50 w-full h-30 flex items-center px-12 justify-between text-[#36392d] bg-[#adb29f46] backdrop-blur-md shadow-md '>
      <ul className='flex gap-5 '>
        <a href="#menu" className='cursor-pointer'>
          <li>{t("navigation.menu")}</li>
        </a>
        <a href="#team" className='cursor-pointer'>
          <li>{t("navigation.team")}</li>
        </a>
         <a href="#events" className='cursor-pointer'>
            <li>{t("navigation.events")}</li>
          </a>
          <a href="#contact" className='cursor-pointer'>
            <li>{t("navigation.contact")}</li>
          </a>
      </ul>
      <Link to="/"><h1 className='font-bold text-[32px] absolute left-1/2 -translate-x-1/2 logo'>Cibo gustoso</h1></Link>
      <div className='flex items-center gap-8'>
        <LanguageSwitcher  />
        <Link to="/cart">
        <button className='flex items-center cursor-pointer font-semibold text-[#36392d] gap-2 hover:bg-[#36392d]/10 px-3 py-2 rounded-lg roboto'><MdOutlineShoppingCart />Cart</button>
        </Link>
      </div>


    </header>
  )
}

export default Header

//Footer, Hero, OurTeam, Menu, Events