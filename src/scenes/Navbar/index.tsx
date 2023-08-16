import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.png";
import Link from "./Link";
import  arrowdown3  from "@/assets/arrowdown3.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({isTopOfPage, selectedPage, setSelectedPage}: Props) {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? '' : 'bg-gray-1 drop-shadow'
  return <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-9`}>
<div className= {`${flexBetween} mx-auto w-5/6`}>
<div className={`${flexBetween} w-full gap-16`}>
    {/* LEFT SIDE */}
<img src={logo} alt="logo" />

 {/* RIGHT SIDE  */}
 {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
<div className={`${flexBetween} mx-auto text-lg text-color-1 gap-9`}>
<Link page="Home"
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/>
<div className={`${flexBetween} gap-1`}>
<Link page="Services"
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/> <img src={arrowdown3} alt="Arrow down" /></div>
<div className={`${flexBetween} gap-1`}>
<Link page="Products"
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/> <img src={arrowdown3} alt="Arrow down" /></div>
<Link page="Testimonials" 
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/>
</div>
<div className={`${flexBetween} gap-8`}>
  <div className={`bg-blue-2 w-36 h-12 py-3 rounded-xl text-white text-center`}>
<p>Sign In</p>
</div>
</div>
 </div> ) : (
  <div>
    <button className={`rounded-full bg-blue-2 p-2`} onClick={() => setIsMenuToggled(!isMenuToggled)}>
      <Bars3Icon className={`h-6 w-6 text-white`}/>
    </button>
  </div>
 )}
</div>
</div>
    </div>
    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-9 bottom-0 z-40 h-full w-[300px] bg-gray-1 drop-shadow-xl">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button title="close" onClick={() => setIsMenuToggled(!isMenuToggled)}><XMarkIcon className="h-6 w-6 text-black"/></button>
        </div>
        {/* MENU ITEMS */}
        <div className={`ml-[33%] flex flex-col text-2xl text-color-1 gap-10`}>
<Link page="Home"
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/>
<div className={`${flexBetween} gap-1`}>
<Link page="Services"
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/> <img src={arrowdown3} alt="Arrow down" /></div>
<div className={`${flexBetween} gap-1`}>
<Link page="Products"
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/> <img src={arrowdown3} alt="Arrow down" /></div>
<Link page="Testimonials" 
selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/>
</div>
      </div>
    )}
  </nav>;
}

export default Navbar