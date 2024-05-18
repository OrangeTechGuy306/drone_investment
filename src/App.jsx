import {Routes, Route} from "react-router-dom"
import SignupPage from "./signup/signup"
import LoginPage from "./login/login"
import Homepage from "./home/home"


function App() {


  return (
  
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
  
  )
}

export default App
