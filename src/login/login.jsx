import { Input } from "antd";
import useLoginContext from "./context/context";
import { useState } from "react";
import { Toaster } from "sonner";
// import "../signup/signup.css"




const LoginPage = () => {

    const {validateUser}  = useLoginContext()
  
    const [user, setUser] = useState({
      mobile:"",
      password:"",
    })

    const {mobile,  password} = user

    const handleChange = (e)=>{
      setUser({...user, [e.target.name]: e.target.value})
    }
    const loginUser = (e)=>{
      e.preventDefault()
      validateUser(mobile,  password)
    }


  return (
    <div>


      <div className="signupForm flex justify-center items-center">

            <Toaster position="top-right" richColors/>

        <form onSubmit={loginUser}>
        
          <div>
              <h1 className="text-md">Login</h1>
          </div>

          <div>
            <Input type="tel" name="mobile" placeholder="Mobile" onChange={handleChange} />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </div>

          <input type="submit" className="text-white" value={"Sign up"} />

        </form>

      </div>
    </div>
  );
};

export default LoginPage;
