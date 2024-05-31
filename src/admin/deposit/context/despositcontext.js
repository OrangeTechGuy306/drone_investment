import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "sonner"



const useDeposit = () => {

    const [deposit, setDeposit] = useState([])

    const fetchDeposit = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_GET_DEPOSIT}`)
        setDeposit(data.msg)
        console.log(data)
    }

    const addDeposit = async(mobile, amount)=>{

        if(mobile.trim() === "" || amount.trim() === ""){
            toast.error("Please fill all fields")
        }else{
            const {data} = await axios.post(`${import.meta.env.VITE_NEW_DEPOSIT}`,{mobile, amount})
            if(data.status === true){
                toast.success(data.msg)
            }else{
                toast.error(data.msg)
            }
        }
    }

    useEffect(()=>{
        fetchDeposit()
    },[])

  return {deposit, addDeposit}
}

export default useDeposit
