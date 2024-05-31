import { useEffect, useState } from "react";
import BottomNav from "../components/bottomnav";
import "./record.css";
import axios from "axios"


const WithdrawalRecords = () => {

    const [records, setRecords] = useState([])
    const [empty, setEmpty] = useState('');
    // const user = JSON.parse(localStorage.getItem("altomaxx"))

    const fetchWithdrawal = async()=>{
      const user = JSON.parse(localStorage.getItem("altomaxx"))
        const {data} = await axios.get(`http://localhost:5000/with/records/${user.name}`)
        if(data.status === true){
            setRecords(data.msg)
            console.log(data.msg)
        }else{
            setEmpty(data.msg)
        }
    }

    useEffect(()=>{
        fetchWithdrawal()
    },[])

  return (
    <div className="p-2">
        <div className="mt-5 mb-3">
            <h4 className="text-md">Withdrawal Records</h4>
            <hr/>
        </div>
      <div className="">
      { empty === "" ?
      records.map((r, i)=>(
        <div key={i} className="withCard p-3 my-2 rounded-md">
          <small className="font-bold text-primary">{r.acc_name}</small>
          <h6 className="my-2">
            Withdraw: &#8358;<small>{Intl.NumberFormat().format(r.amount)}</small>{" "}
          </h6>
          <h6>
            Account NO: <small>{r.acc_no}</small>
          </h6>
          <div className="flex justify-between">
            <h6>
              Type: <small className="text-danger">Withdrawal</small>
            </h6>
            <small className="text-secondary">{r.status}</small>
          </div>
          <hr />
          <small>{r.createdAt}</small>
        </div>
      )) : 

        <div>
            <h4 className="text-primary text-center mt-5">{empty}</h4>
        </div>

       }
      </div>
      <BottomNav />
    </div>
  );
};

export default WithdrawalRecords;
