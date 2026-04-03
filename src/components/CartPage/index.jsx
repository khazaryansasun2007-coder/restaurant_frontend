import { useEffect, useState } from "react"

const CartPage = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(storedCart)

    }, [])
    return (
        <div className="pt-30">
            <div className="p-10">
                <h1 className="text-2xl font-bold mb-5">Cart</h1>

                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex gap-5 mb-4">
                            <img src={item.image} className="w-20 h-20 object-cover" />
                            <div>
                                <h2>{item.title}</h2>
                                <p>Quantity: {item.quantity}</p>
                                <p>{item.price} USD</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CartPage














































































