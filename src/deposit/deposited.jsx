import AddCardIcon from "@mui/icons-material/AddCard";
import BottomNav from "../components/bottomnav";
import { Modal } from "antd";
import { useState } from "react";

const DepositedPage = () => {

    const [open, setOpen] = useState(false)
    const [price, setPrice] = useState(false)


    const openModal = ()=>{
        setOpen(true)
      }
      const closeModal = ()=>{
        setOpen(false)
      }
    

  return (
    <div className="p-3">
      <div className="flex justify-center items-center gap-3 flex-col text-center">
        <AddCardIcon style={{ fontSize: 100 }} />
        <h3 className="text-md">
          Note: The Minimum to be deposited is &#8358;2,000
        </h3>
      </div>
      <hr />
      <h4 className="text-center">
        Deposit now! and Start Earning on Investment
      </h4>

      <div className="flex flex-col justify-center items-center gap-3 mt-5">
        <select name="" className="form-control"
        onChange={(e)=>{setPrice(e.target.value)}}
        >
          <option value={""} className="text-black">
            Choose Amount
          </option>
          <option value={"2000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(2000)}
          </option>
          <option value={"4000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(4000)}
          </option>
          <option value={"7500"} className="text-black">
            &#8358;{Intl.NumberFormat().format(7500)}
          </option>
          <option value={"8000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(8000)}
          </option>
          <option value={"12000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(12000)}
          </option>
          <option value={"17500"} className="text-black">
            &#8358;{Intl.NumberFormat().format(17500)}
          </option>
          <option value={"25000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(25000)}
          </option>
          <option value={"60000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(60000)}
          </option>
          <option value={"100000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(100000)}
          </option>
          <option value={"250000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(250000)}
          </option>
          <option value={"350000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(350000)}
          </option>
          <option value={"500000"} className="text-black">
            &#8358;{Intl.NumberFormat().format(500000)}
          </option>
        </select>
        <button className="btn btn-primary" onClick={openModal}>Deposit</button>
      </div>

      <Modal open={open} onCancel={closeModal}>
        <div>
          <div>
            <div className="my-3">Amount: &#8358; {price} </div>
          </div>
          <div className="my-10">
            <div className="flex justify-between items-center my-1">
              <p>Acount Number</p>
              <p>9044985782</p>
            </div>
            <div className="flex justify-between items-center my-1">
              <p>Bank Name</p>
              <p>Abdullah Abdulrahman</p>
            </div>
            <div className="flex justify-between items-center my-1">
              <p>Account Name</p>
              <p>Palmpay</p>
            </div>
          </div>
          <hr />
          <ul className="text-red">
            <li>Open your bank app and make the transfer</li>
            <li>Copy the bank account shown below</li>
            <li>Enter the amount shown above</li>
          </ul>
          <button className="btn btn-success">I have Paid</button>
        </div>
      </Modal>

      <BottomNav />
    </div>
  );
};

export default DepositedPage;
