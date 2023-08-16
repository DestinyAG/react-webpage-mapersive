import Navbar from "@/scenes/Navbar";
import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import About from "@/scenes/about";
import Footer from "@/scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (<div className="app bg-gray-1">
    <Navbar 
    isTopOfPage= {isTopOfPage}
    selectedPage = {selectedPage}
setSelectedPage = {setSelectedPage}/>
<Home  />
 <About  /> 
 <Footer /> 
  </div>
  );
}

export default App;
