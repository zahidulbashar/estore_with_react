import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import RootLayout from "./layout/RootLayout"


const App = () => {
  return (
  <>
  <Routes>
    <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={ <About/>}/>
    <Route path="Contact" element={ <Contact/>}/>
    <Route path="Blog" element={ <Blog/>}/>
    </Route>
  </Routes>
  </>
  )
}

export default App