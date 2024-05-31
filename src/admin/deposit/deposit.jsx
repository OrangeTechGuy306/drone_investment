import { Card, Modal, Table } from "antd";
import AdminLayout from "../layout/layout";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import useDeposit from "./context/despositcontext";
import { useState } from "react";
import { Toaster } from "sonner";



const DepositDashPage = () => {

  const {addDeposit} = useDeposit()
  const [open, setOpen] = useState(false)

  const [value, setValue] = useState({
    mobile:"",
    amount:""
  })

  const {mobile, amount} = value
  const handleChange =(e)=>{
      setValue({...value, [e.target.name]:e.target.value})
  }

  const deposit = (e)=>{
    e.preventDefault()
    addDeposit(mobile, amount)
  }

  const openModal = ()=>{
    setOpen(true)
  }
  const closeModal = ()=>{
    setOpen(false)
  }

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
    

  ];


    return (

        <AdminLayout>

            <div className="my-3">
                <h3 className="text-secondary px-3">Withdrawals</h3>
            </div>

            <div className="flex justify-between items-center px-3 flex-wrap">

            <Card.Grid
                style={{
                    width: 250,
                    height:100,
                    background:"linear-gradient(to right, #D4145A, #FBB03B)",
                    color:"black",
                    borderRadius:10,
                }}
                className="p-3"
                >
           <div className="flex justify-between items-center">
                <div className="">
                    <AccountBalanceWalletIcon style={{fontSize:30, color:"white"}}/>
                    <h4 className="text-white">Deposits</h4>
                </div>
                <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
           </div>
            </Card.Grid>

                <div className="d-flex gap-2">
                  <form className="flex justify-start items-center">
                      <input type="search" className="form-control" name="" placeholder="Search Withdrawal" style={{width:300}}/>
                      <button className="py-1 px-3 text-white bg-danger">Search</button>
                  </form>

                  <button className="btn btn-success py-1" onClick={openModal}>New Deposit</button>
                  <Toaster position="top-right" richColors/>
                  <Modal open={open} onCancel={closeModal}>
                      <form onSubmit={deposit}>
                      ``<h5>New Deposit</h5>
                          <input type="number" name="mobile" onChange={handleChange} className="form-control my-3" placeholder="Enter Mobile"/>
                          <input type="number" name="amount" onChange={handleChange} className="form-control my-3" placeholder="Enter Amount"/>
                          <input type="submit" value="Deposit" onChange={handleChange} className="btn btn-primary my-3" />
                      </form>
                  </Modal>
                </div>
                
            </div>

          <div className="my-5">
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </AdminLayout>
        
    );
}
 
export default DepositDashPage;