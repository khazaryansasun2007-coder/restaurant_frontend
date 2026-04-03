import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { json, set } from 'zod'

const MenuCard = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { t } = useTranslation()
  const navigate = useNavigate()


  useEffect(() => {
    axios.get("http://localhost:3001/menu")
      .then((res) => {

        const foundItem = res.data.find(el => String(el.id) === id)
        setItem(foundItem || null)
      })
      .catch((err) => console.log(err))
  }, [id])

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || []
    const itemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id)
    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += quantity
    } else {
      existingCart.push({
        ...item,
        quantity: quantity
      })
    }
    localStorage.setItem("cart", JSON.stringify(existingCart))
    alert(t("added_to_cart", { item: t(item.title) }))
      navigate("/cart")
  }

  return (
    <div className='w-full flex justify-center items-center h-[120vh]'>
      <div className='w-[90%] h-[500px] shadow-2xl rounded-xl flex p-10'>
        <div>
          <img src={item.image} alt="" className=' w-74 h-106 object-cover' />
        </div>
        <div className='p-10 flex flex-col justify-between text-[#36392D]'>
          <h1 className='text-xl'>{t(`${item.title}`)}</h1>
          <div className='flex gap-5'>
            <h2 className='text-4xl font-bold text-[#36392D]'>{item.price} <span className='text-[#7a825f]'>USD</span></h2>
            <div className='flex w-[150px] justify-between items-center bg-[#d7e2b0] px-5 rounded-lg font-semibold text-[#36392D]'>
              <button className='cursor-pointer' onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
              {quantity}
              <button className='cursor-pointer' onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
              <button onClick={handleAddToCart} className='flex cursor-pointer w-[150px] justify-center gap-5 rounded-lg items-center bg-[#36392D] text-[#d7e2b0]'> <FiShoppingCart /> To cart</button>
          </div>
          <hr />
          <div className='flex flex-col gap-2'>
            <p className='text-lg'>{t(`${item.description}`)}</p>

            <p>{item.ingredients.map((ingredient) => t(ingredient)).join(", ")}</p>
          </div>
          <hr />
          <div>
            <h2 className='text-lg'>{t(`${item.category}`)}</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MenuCard