import { useEffect, useState } from "react";
import BottomNav from "../components/bottomnav";

import axios from "axios"

const DepositPage = () => {


    const [records, setRecords] = useState([]);
    const [empty, setEmpty] = useState('');
  const user = JSON.parse(localStorage.getItem("altomaxx"));

  const fetchWithdrawal = async () => {
    const { data } = await axios.get(`http://localhost:5000/wallet/records/${user.name}`);
    if (data.status === true) {
      setRecords(data.msg);
    } else {
        setEmpty(data.msg);
        console.log(data)
    }
  };

  useEffect(() => {
    fetchWithdrawal();
  }, []);
    

    return (
        <div className="p-2">
            <div className="mt-5 mb-3">
                <h3>Deposit Records</h3>
                <hr/>
            </div>
            <div>
                {
                    empty === "" ?
                    records.map((r, i)=>(
                        <div key={i} className="withCard p-3 my-2 rounded-md">
                            <small className="font-bold text-primary">{r.mobile}</small>
                            <h6 className="my-2">
                            Deposit: &#8358;<small>{Intl.NumberFormat().format(r.amount)}</small>{" "}
                            </h6>
                            <div className="flex justify-between">
                            <h6>
                                Type: <small className="text-danger">Deposit</small>
                            </h6>
                            </div>
                            <hr />
                            <small>{r.createdAt}</small>
                        </div> 
                    ))
                    :
                    <div>
                        <h5>{empty}</h5>
                    </div>
                }
            </div>
            <BottomNav/>
        </div>
    );

}
 
export default DepositPage;