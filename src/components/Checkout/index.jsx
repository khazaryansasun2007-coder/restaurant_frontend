import React from 'react'
import visa from '../../assets/Images/visa.png'
import master from '../../assets/Images/master.png'
import rupay from '../../assets/Images/rupay.png'
import paypal from '../../assets/Images/paypal.png'


const CheckOut = ({ subtotal, totalItems }) => {
    const shipping = subtotal > 0 ? 10 : 0
    const total = subtotal + shipping
    const payment = () => {
        alert(`Payment of $${total.toFixed(2)} for ${totalItems} items was successful! `)
    }

    return (
        <div className='w-[480px] h-[550px] bg-[#d7e2b0] rounded-2xl flex flex-col p-5'>
            <div className='flex flex-col gap-2 mb-2'>
                <h3 className='font-semibold text-[#36392D] text-lg '>Card Type</h3>
                <div className='flex gap-3 w-full items-center'>
                    {[visa, master, rupay, paypal].map((img, index) => (
                        <div key={index} className='bg-[#f9f9f9] w-[100px] h-[60px] rounded-md flex items-center justify-center'>
                            <img className='w-[90px] h-[40px]' src={img} alt="" />
                        </div>
                    ))}

                </div>
            </div>

            <h3 className='text-[#36392D] font-semibold  text-lg'>Cardholder name</h3>
            <input className='text-[#36392D] w-110 h-9 rounded-md bg-white outline-none mb-2 p-5' type="text" placeholder='NAME SURNAME' />
            <h3 className='text-[#36392D] font-semibold  text-lg'>Card number</h3>
            <input className='text-[#36392D] w-110 h-9 rounded-md mb-2 bg-white outline-none p-5' type="text" placeholder='1111 2222 3333 4444' />
            <div className='flex flex-1 justify-between'>
                <div>
                    <h3 className='text-[#36392D] font-semibold  text-lg'>Expiration date</h3>
                    <input className='text-[#36392D] w-54 h-9 p-5 rounded-md bg-white outline-none' type="date" name="" id="" />
                </div>

                <div>
                    <h3 className='text-[#36392D] font-semibold  text-lg'>CVV</h3>
                    <input className='text-[#36392D] w-54 h-9 p-5 rounded-md bg-white outline-none' type="number" />


                </div>

            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <p className='text-[#36392D] roboto'>Subtotal</p>
                    <p className='text-[#36392D] roboto'>${subtotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[#36392D] roboto'>Shipping</p>
                    <p className='text-[#36392D] roboto'>${shipping.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[#36392D] roboto'>Total (Tax incl.)</p>
                    <p className='text-[#36392D] roboto'>${total.toFixed(2)}</p>
                </div>
            </div>
            <button className='bg-[#36392D] text-white py-4 mt-2 cursor-pointer rounded-md' onClick={payment}>CհeckOut</button>

        </div>
    )
}

export default CheckOut