import Hero from "./Hero";
import Projects from "./Projects"
import AboutMe from "./aboutme";
import Resume from "./resume"
import {ContactUs} from './contactus'
import ContactBanner from './contactbanner'
import TuneBanner  from "./tunebanner";
import Tunes from './tunes'
function App() {
  return (
<>      
<Hero> </Hero>
<AboutMe></AboutMe>
<Resume></Resume>
<Projects></Projects>
<TuneBanner></TuneBanner>
<Tunes></Tunes>
<ContactBanner></ContactBanner>
<ContactUs></ContactUs>
</>   

  )
}

export default App;
