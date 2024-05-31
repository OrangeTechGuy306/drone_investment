import { Input } from "antd";
import "./signup.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSignUpContext from "./context/context";
import { Toaster } from "sonner";



const SignupPage = () => {

    const navigate = useNavigate()
    const {referral} = useParams()
    const [ref, setRef] = useState('')
    const [random, setRandom] = useState(0)
    const {validateUser} =  useSignUpContext()

    const [user, setUser] = useState({
        mobile:"",
        password:"",
        cpass:"",
        ver:""
    })

    const { mobile, password, cpass, ver} = user

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const getRandom= ()=>{
        setRandom(Math.floor(Math.random() * 900 + 99))
    }

    const getValidReferral = async()=>{

        if(referral !== ""){
             const {data} = await axios.get(`http://localhost:5000/refer/${referral}`)
             if(data.status === true){
                 setRef(data.msg)
                 navigate(`/signup/${referral}`)
                 console.log(data)
             }else{
                 navigate("/refer")
             }
        }else{
         navigate("/refer")
        }
 }

    const addUser =(e)=>{
        e.preventDefault()
        validateUser(mobile, password, ref,  cpass, ver)
    }

    useEffect(()=>{
        getRandom()
        getValidReferral()
    },[])


  return (
    <div>
        <div className="signupForm flex justify-center items-center">
            <Toaster position="top-right" richColors/>
            <form onSubmit={addUser}>
                <div>
                    <h3 className="text-center">Registration</h3>
                </div>
                <div className="mobileInput flex">
                    <label className="rounded-md">+234</label>
                    <input type="text" placeholder="mobile" onChange={handleChange} className="mInput form-control" name="mobile" maxLength={11} minLength={10}/>
                </div>
                <div>
                    <Input type="password" placeholder="Password" onChange={handleChange} name="password"/>
                </div>
                <div>
                    <Input type="password" placeholder="Confirm Password" onChange={handleChange} name="cpass"/>
                </div>
                <div>
                    <Input type="text" placeholder="Referral" onChange={handleChange} value={ref} readOnly/>
                </div>
                <div className="mobileInput flex">
                <Input type="text" placeholder="Verify" onChange={handleChange} className="mInput" name="ver"/>
                <label className="">{random}</label>
            </div>
                <input type="submit" className="" value={"Sign up"}/>
            </form>
        </div>  
    </div>
  )


}

export default SignupPage
