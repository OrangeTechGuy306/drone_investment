
import {useNavigate} from "react-router-dom"
import {toast} from "sonner"
import axios from "axios"


const useLoginContext = () => {

    const navigate = useNavigate()
    
    const validateUser = async(mobile, password)=>{  
        if(mobile.trim() === "" || password.trim() === ""){
            toast.error('All fields are required!')
        }else{
            const {data} = await axios.post(`http://localhost:5000/get/user`, {mobile, password})
            if(data.status === false){
                toast.error(data.msg)
            }else{
                toast.success("Login successful")
                console.log(data.msg)
                localStorage.setItem("altomaxx", JSON.stringify(
                    data.msg))
                setTimeout(()=>{
                    navigate("/")
                },3000)
            }
        }
    }

    

   

   
    return {validateUser};
}
 
export default useLoginContext;