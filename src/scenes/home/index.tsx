
import maintext from "@/assets/maintext.png";
import searchbar from "@/assets/searchbar.png";
import specs from "@/assets/specs.png";
import bmw from "@/assets/bmw.png";
import line from "@/assets/line.png";
import { motion } from "framer-motion";







function Home() {
    
  return (
    <section 
    id="home"
    className = "gap-16 bg-gray-1 py-10 md:h-[1200px] md:pb-0 top-9">
        {/* IMAGE AND MAIN HEADER */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div className="md:-mt-20">
                    <div>
                        <div>
                            <img src={maintext} alt="Main-text" className="mt-[200px] " />
                        </div>
                    </div>
                    <p className="md:w-[590px] font-normal text-2xl mt-9 ">
                    We will serve you to get dream car here easily and quickly that is reliable
                    </p>
                </motion.div>
                {/* SEARCH BAR */}
                <div >
<img src={searchbar} alt="search-bar" className="mt-9 "  />
                </div>
                {/* SUB-TEXT*/}
                <div className="mt-[200px]">
                    <p className="text-4xl mt-9 ">
                        BMW BLUE SERIES
                    </p>
                    <img src={specs} alt="specs" />
                    <img src={line} alt="line" className="mt-9 "/>
                </div>
            </div>
            {/* IMAGE */}
            <div className="relative mb-[480px]">
                <div className="before:absolute before:top-36 md:before:content-rectangle before:left-40">
                <img src={bmw} alt="bmw" className="mt-[800px]"/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Home