
import group14 from "@/assets/group14.png";
import agreebutton from "@/assets/agreebutton.png";
import infobutton from "@/assets/infobutton.png";




const About = () => {
  return (
    <section 
    id="about"
    className = "gap-16 bg-white py-10  md:h-[1001px] md:pb-0 relative  z-30">
        <div className="md:flex md:mx-auto w-5/6 items-center justify-center md:h-5/6">
            <div className="z-10 md:mt-32 md:basis-3/5">
                < div className="md:mt-40">
                    <div>
                        <p className="font-bold md:text-[50px] text-[30px] relative md:top-[120px] left-[30px]">
                           Mobiling Social 
                        </p>
                        <div className="md:w-[1160px] md:h-[399px] rounded-[30px] relative md:mt-[150px] left-[30px]  bg-gradient-to-t from-black via-gray-400 to-gray-500 flex items-center justify-center">
        <div className="w-[1096px] h-[339px] border-white border-[1px] border-dashed rounded-sm">
           <div className="md:mt-[100px] ml-10"> <p className="font-bold md:text-[32px] text-[20px] text-white">Information on data processing</p>
            <p className="font-normal text-[16px] text-white md:w-[665px] md:h-[40px]">On our website we provide content from Storystream. To view this content, you must agree to the data processing by Storystream.</p>
           <button className="mt-10 "> <img src={agreebutton} alt="agree-button" className="max-md:rounded-md max-md:h-[40px]"/></button>
            <button className="mt-10 md:ml-10 "><img src={infobutton} alt="info-button" className="max-md:rounded-md max-md:w-[240px]" /></button>
            </div>
        </div>
                        </div>
                    </div>
                    <div className="mt-16 ml-10">
                        <p className="font-semibold md:text-[40px] max-md:text-[30px]">About Us</p>
                        <p className="md:text-[32px] max-md:text-[22px] mt-2">Find out briefly but informatively</p>
                        <p className="md:text-xl max-md:text-l md:w-[560px] md:h-[175px] mt-10">As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely. We sell in around Indonesia , as well as beyond to destinations throughout World. From the Indonesia to shuttle service, you can look forward to a professional team and comfort of our car service.</p>
                    </div>
                    <div className="md:ml-[700px] relative max-md:top-5 max-md:ml-10 md:top-[-320px] md:w-[500px] md:h-[304px] bg-gray-400 rounded-[30px] flex items-center justify-center">
                      <img src={group14} alt="group" className="max-md:w-[200px]"/></div>
                    </div>
               
            </div>
            
        </div>
    </section>
  )
}

export default About