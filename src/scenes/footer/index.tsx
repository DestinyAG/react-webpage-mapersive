import { SelectedPage } from "@/shared/types";
import logo2 from "@/assets/logo2.png";
import buyvehicle from "@/assets/buyvehicle.png";
import purchase from "@/assets/purchase.png";
import english from "@/assets/english.png";
import socials from "@/assets/socials.png";
import footline from "@/assets/footline.png";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <section 
    id="footer"
    className = "gap-16 bg-blue-4 py-10  max-md:h-[1000px] md:h-[606px] md:pb-0 relative  z-30">
        <div className="md:flex">
                <div className="mt-14 md:ml-[150px]">
                        <img src={logo2} alt="logo2" />
                        <p className="md:w-[300px] md:h-[100px] text-white font-medium text-[16px] max-md:text-[10px] mt-10">
                        As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely.
                        </p>
                    </div>
                    <div>
                        <img src={buyvehicle} alt="buy-vehicle" className="relative mt-10 md:left-[100px] max-md:h-[100px] max-md:ml-[50px]" />
                    </div>
                    <div className="relative mt-10 max-md:mt-[-100px] max-md:ml-[200px] md:left-[200px] max-md:h-[100px]">
                        <img src={purchase} alt="purchase" />
                    </div>
                    <p className="text-white text-[16px] mt-10 md:ml-[300px] max-md:mt-16 max-md:text-[7px] max-md:ml-[50px]">
                        <ul>
                            <li className="font-semibold">Customer Service</li>
                            <li className="font-medium md:mt-10">Customer service offers</li>
                        </ul>
                    </p>
                    <div className=" absolute md:ml-[1021px] md:mt-[140px] max-md:mr-[250px] max-md:mt-[10px]">
                        <img src={english} alt="english" />
                    </div>
                    <div className="absolute md:ml-[140px] md:mt-[300px] max-md:ml-[200px] max-md:mt-[50px]">
                        <img src={socials} alt="socials" />
                    </div>
                    <div className="absolute md:ml-[140px] md:mt-[450px] max-md:hidden">
                        <img src={footline} alt="line" />
                    </div>
                    <p className="text-white text-[16px] absolute md:mt-[490px] md:ml-[140px] max-md:mt-[300px] max-md:text-[10px]">Copyright 2023 Mobiling Co.</p>
                    <p className="text-white text-[16px] absolute md:mt-[490px] md:ml-[540px] max-md:mt-[300px] max-md:text-[10px] max-md:ml-[150px]">Terms of Service</p>
                    <p className="text-white text-[16px] absolute md:mt-[490px] md:ml-[740px] max-md:mt-[300px] max-md:text-[10px] max-md:ml-[250px]">Privacy Policy</p>
                    <p className="text-white text-[16px] absolute md:mt-[490px] md:ml-[917px] max-md:mt-[300px] max-md:text-[10px] max-md:ml-[350px]">Cookies</p>
                    </div>
    </section>
  )
}

export default Footer