import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"
import AboutMe from "./components/aboutme";
import Tunes from './components/tunes'
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ContactUs } from "./components/contactus";


function App() {
  return (
<Router>
 <> <Navbar></Navbar> 
 </> 
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<AboutMe/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/songs" element={<Tunes/>}/>
<Route path="/contact" element={<ContactUs/>}/>

</Routes>
<> <Footer></Footer> </>
</Router>

  )
}

export default App;
