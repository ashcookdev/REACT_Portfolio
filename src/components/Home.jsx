import Hero from "./Hero";
import Projects from "./Projects"
import AboutMe from "./aboutme";
import TechStack from "./techstack";
import Resume from "./resume"
import ContactMe, { ContactUs } from './contactus'
import ContactBanner from './contactbanner'
import TuneBanner  from "./tunebanner";
import Tunes from './tunes'
import { BrowserRouter,Router,Routes,Route  } from "react-router-dom";
function App() {
  return (
<>      
<Hero> </Hero>
<AboutMe></AboutMe>
<Resume></Resume>
<TechStack></TechStack>
<Projects></Projects>
<TuneBanner></TuneBanner>
<Tunes></Tunes>
<ContactBanner></ContactBanner>
<ContactUs></ContactUs>
</>   

  )
}

export default App;
