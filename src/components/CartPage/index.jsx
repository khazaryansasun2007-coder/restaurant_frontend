import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { IoTrashOutline } from "react-icons/io5";
import { json } from "zod";
import CheckOut from "../Checkout";

const CartPage = () => {
    const [cart, setCart] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(storedCart)

    }, [])
    const updateQuantity = (id, delta) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta)
                return { ...item, quantity: newQuantity }
            }
            return item
        })

        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))

    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }
    const totalItems = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const subtotal = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;
    return (
        <div className="bg-[#f5f7ee]">
            <h1 className="text-5xl text-[#36392D] text-center font-semibold absolute top-[23%] left-[50%] -translate-x-[50%] clash2">
                Cart
            </h1>
            <div>
                <div className="flex justify-around pt-60 items-start ">
                    <div className="min-h-screen">
                        <div className="max-w-[900px] mx-auto">


                            {cart.length === 0 ? (
                                <p className="text-center text-lg text-[#7a825f]">
                                    Your cart is empty
                                </p>
                            ) : (
                                <div className="flex flex-col gap-6">
                                    {cart.map(item => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-6 bg-white p-5 w-[700px] rounded-2xl shadow-md hover:shadow-lg transition"
                                        >
                                            <img
                                                src={item.image}
                                                className="w-28 h-28 object-cover rounded-xl"
                                            />
                                            <div className="flex flex-col h-full flex-1 gap-7">
                                                <div className="flex justify-between w-full">
                                                    <h2 className="text-xl font-semibold text-[#36392D] clash">
                                                        {t(`${item.title}`)}
                                                    </h2>
                                                    <button onClick={() => removeItem(item.id)} className="cursor-pointer text-[#36392D] text-xl"><IoTrashOutline /></button>

                                                </div>


                                                <div className="flex justify-between items-center mt-2">

                                                    {/* <p className="text-[#7a825f] font-medium roboto">
                                            {t("quantity")}: {item.quantity}
                                        </p> */}
                                                    <div className='flex w-[150px] py-2 justify-between items-center bg-[#d7e2b0] px-5 rounded-lg font-semibold text-[#36392D]'>
                                                        <button className='cursor-pointer' onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                        {item.quantity}
                                                        <button className='cursor-pointer' onClick={() => updateQuantity(item.id, +1)}>+</button>
                                                    </div>

                                                    <p className="text-[#36392D] font-bold text-lg roboto">
                                                        {item.price} USD
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                    <CheckOut subtotal={subtotal} totalItems={totalItems} />

                </div>

            </div>
        </div>

    )
}
// Quantity:
export default CartPage