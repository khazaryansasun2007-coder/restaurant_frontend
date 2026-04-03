import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
  return (
    <footer className='bg-[#9fa68cdc] w-full h-[309px] text-[#36392d]' >
      <div className='flex justify-between ml-[80px] mr-[80px]'>
        <ul className='mt-[80px] flex gap-[40px] text-[18px] roboto'>
          <li>{t("navigation.menu")}</li>
          <li>{t("navigation.team")}</li>
          <li>{t("navigation.events")}</li>
          <li>{t("navigation.contact")}</li>
        </ul>
        <div className='mt-[80px] flex flex-col gap-4 roboto'>
          <p className='text-[18px]'>Sign up to our newsletter</p>
          <input type="text" placeholder="Email"  className="border-b border-[#36392d] outline-none p-3"/>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className=''>
          <h1 className='font-bold text-[32px] relative bottom-[92px] logo'>Cibo gustoso</h1>
        </div>
        <div className='flex gap-[24px] text-3xl '>
          <SiFacebook/>
          <RiInstagramFill />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  )
}

export default Footer