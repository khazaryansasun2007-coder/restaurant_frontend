import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { supportedLanguages } from '../../config'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const ref = useRef()

    const currentLanguage =
        supportedLanguages.find(l => i18n.language.startsWith(l.code)) ||
        supportedLanguages[0]

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(ref.current && !ref.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className='relative' ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#36392d]/10 transition cursor-pointer'
            >
                <img src={currentLanguage.flag} alt="" className='w-5 h-5' />
                <span className='relative text-sm font-medium'>
                    {currentLanguage.label}
                    <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#36392d] transition-all duration-300 ${
                            open ? "w-full" : "w-0"
                        }`}
                    ></span>
                </span>

                <span className='text-xs'>▼</span>
            </button>

            {open && (
                <div className='flex flex-col  items-start gap-[5px] absolute right-0 mt-2 w-44 bg-[#36392d]/10 border p-5 rounded-xl z-50 overflow-hidden'>
                    {supportedLanguages.map((lang) => (      
                        <div
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className='flex gap-2 items-center cursor-pointer group'
                        >
                            <img src={lang.flag} alt="" className='w-5 h-5' />
                            <span className='relative font-medium text-md '>
                                {lang.label}

                                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#36392d] transition-all duration-300 group-hover:w-full'></span>
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher