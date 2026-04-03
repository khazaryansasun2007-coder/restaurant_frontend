import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z, { email } from 'zod'
import contactImg from '../../assets/Images/contact.jpg'
import { useTranslation } from 'react-i18next'



const ContactUs = () => {

    const { t } = useTranslation()

    const schema = z.object({
        name: z.string().min(3, t("contact.errors.name")),
        email: z.string().email(t("contact.errors.email")),
        password: z.string().min(6, t("contact.errors.message"))
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = data => {
        console.log("Form data:", data);
        alert("Form submitted!")
    }

    return (
        <div className='bg-[#b7bca9b5] pb-8 flex justify-around '>
            <form className='flex flex-col gap-10 items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-5xl font-bold clash2 text-[#36392D]'>{t("contact.title")}</h2>

                <div className='flex flex-col'>
                    <label className='font-bold text-lg text-[#36392d]' htmlFor="">{t("contact.name")}</label>
                    <input className='bg-transparent outline-0 px-5 placeholder:text-[#36392d] text-[#36392d]  w-100 h-10 border-b border-b-[#36392d]' placeholder={t("contact.placeholderName")} type="text" {...register("name")} />
                    {errors.name && <p className='text-red-600 text-lg text-shadow-red-700'>{errors.name.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg text-[#36392d]' htmlFor="">{t("contact.email")}</label>
                    <input className='bg-transparent outline-0  px-5 placeholder:text-[#36392d] w-100 h-10 border-b border-b-[#36392d] text-[#36392d]' placeholder={t("contact.placeholderEmail")} type="email" {...register("email")} />
                    {errors.email && <p className='text-red-600 text-lg text-shadow-red-700'>{errors.email.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg text-[#36392d]' htmlFor="">{t("contact.message")}</label>
                    <textarea className='bg-transparent outline-0 px-5 placeholder:text-[#36392d] w-100 h-10 border-b border-b-[#36392d] text-[#36392d]' placeholder={t("contact.placeholderMessage")} {...register("password")}></textarea>
                    {errors.password && <p className='text-red-600 text-lg text-shadow-red-700'>{errors.password.message}</p>}
                </div>
                <button className='w-100 h-10 bg-[#36392d] rounded  text-white text-lg cursor-pointer' type='submit'>{t("contact.submit")}</button>

            </form>
            <img className='w-[500px] h-[600px]' src={contactImg} alt="contact" />
        </div>
    )
}

export default ContactUs

//useState, useEffect, useParams, useRef, useReducer, useContext
//useForm, react-hook-form
//zod- TypeScript, JavaScriipt, zodResolver
