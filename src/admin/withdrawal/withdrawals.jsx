import { Card, Table } from "antd";
import AdminLayout from "../layout/layout";
import WalletIcon from '@mui/icons-material/Wallet';




const WithdrawalPage = () => {

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
      title: 'Acc NO.',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: 'Acc Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Bank Name',
      dataIndex: 'type',
      key: 'type',
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
              background:"linear-gradient(to right, #009245, #FCEE21)",
              color:"black",
              borderRadius:10,
            }}
            className="p-3"
          >
             <div className="flex justify-between items-center">
                  <div className="">
                      <WalletIcon style={{fontSize:30, color:"white"}}/>
                      <h4 className="text-white text-md mt-3">Withdrawals</h4>
                  </div>
                  <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
             </div>
            </Card.Grid>

                <form className="flex justify-start items-center">
                    <input type="search" className="form-control" name="" placeholder="Search Withdrawal" style={{width:300}}/>
                    <button className="py-1 px-3 text-white bg-success">Search</button>
                </form>
            </div>

          <div className="my-5">
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </AdminLayout>
    );
}
 
export default WithdrawalPage;