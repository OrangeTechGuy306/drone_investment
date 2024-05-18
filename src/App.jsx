import {Routes, Route} from "react-router-dom"
import SignupPage from "./signup/signup"
import LoginPage from "./login/login"
import Homepage from "./home/home"
import ProductPage from "./products/product"
import TeamPage from "./team/team"


function App() {


  return (
  
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
        </Routes>
  
  )
}

export default App
