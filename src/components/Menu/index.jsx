import React, { useEffect, useState } from 'react'
import { Menu1, Menu2, Menu3, Menu4 } from '/src/assets/Images/index.js'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const [menu, setMenu] = useState([])
  const [category, setCategory] = useState("pasta")
  const { t } = useTranslation()


  useEffect(() => {
    axios.get(`http://localhost:3001/menu`)
      .then(response => setMenu(response.data))
      .catch(error => console.log(error));

  }, [])

  const filteredMenu = menu.filter((item) => item.category === `food-category.${category}`)
  console.log(filteredMenu);
  

  return (
    <div className='bg-[#b7bca9b5] pt-26' >
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-[#36392D] text-5xl font-bold clash'>{t("headings.heading-menu")}</h1>
        <p className='max-w-[500px] text-lg text-p'>{t("descriptions.desc-menu")}</p>
      </div>
      <div className='flex gap-8 text-[#36392D] text-md font-bold mt-5 justify-center items-center'>
        {["appetizers", "pasta", "pizza", "salads", "soups", "desserts"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`border-2 border-[#9FA68C]  rounded-2xl py-2 px-8 roboto cursor-pointer ${category === cat ? "bg-[#B7BCA9] text-[#36392D]" : ""} roboto`}>
             {t(`food-category.${cat}`)}
          </button>

        ))}
      </div>
      <div className='flex gap-6 mt-8 justify-center items-center'>

        {filteredMenu.map(item => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <Link to={`/menu/${item.id}`}>
              <img className='shadow-2xl w-74 h-106 object-cover' src={item.image} alt="" />

            </Link>

            <p className='font-bold clash'>{t(`${item.title}`)}</p>
            <p className='roboto'>${item.price}</p>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Menu