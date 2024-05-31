import axios from "axios"
import {toast} from "sonner"
import {useNavigate} from "react-router-dom"


const useSignUpContext = () => {

    const navigate = useNavigate()

    const validateUser = async(mobile, password, ref, cpass, ver)=>{

        if(mobile.trim() === "" || password.trim() === ""  || cpass.trim() === "" || ver.trim() === ""){
            toast.error("All fields are required!")
        }else if(password.length <= 3){
            toast.error("Password too weak")
        }else if(password !==  cpass){
            toast.error("Password do not match")
        }else{
            const {data} = await axios.post(`http://localhost:5000/add/user`, {mobile, password, ref})
            if(data.status === false){
                toast.error(data.msg)
            }else{
                toast.success(data.msg)
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }  
        }
    }
    

    return{validateUser}

}

export default useSignUpContext
