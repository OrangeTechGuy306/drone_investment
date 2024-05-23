import axios from "axios";
import { useEffect, useState } from "react";




const UserContext = () => {

    const [users, setUsers] = useState([])

    const getusers = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_GET_USERS}`)
        console.log(data)
        setUsers(data.msg)
    }

    useEffect(()=>{
        getusers()
    },[])

    return {users};
}
 
export default UserContext;