import { Card, Table } from "antd";
import AdminLayout from "../layout/layout";
import GroupIcon from '@mui/icons-material/Group';
import UserContext from "./context/context";
import { useEffect } from "react";




const UsersPage = () => {

  const {users} = UserContext() 

  useEffect(()=>{
    console.log(users)
  },[])

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
      title: 'Referral Link',
      dataIndex: 'ref',
      key: 'ref',
    },
    {
      title: 'Level 1',
      dataIndex: 'lv1',
      key: 'lv1',
    },
    {
      title: 'Level 2',
      dataIndex: 'lv2',
      key: 'lv2',
    },
    {
      title: 'Level 3',
      dataIndex: 'lv3',
      key: 'lv3',
    },
    {
      title: 'Deposit',
      dataIndex: 'dep',
      key: 'dep',
    },
    {
      title: 'Withdrawal',
      dataIndex: 'with',
      key: 'with',
    },
    {
      title: 'Invest',
      dataIndex: 'invest',
      key: 'invest',
    },
    {
      title: 'Balance',
      dataIndex: 'invest',
      key: 'invest',
    },
  ];


    return (
        <AdminLayout>

            <div className="my-3">
                <h3 className="text-black">Users</h3>
            </div>

            <div className="flex justify-between items-center px-3 flex-wrap">

                <Card.Grid
                style={{
                  width: 250,
                  height:100,
                  background:"linear-gradient(to right, #2E3192, #1BFFFF)",
                  color:"black",
                  borderRadius:10,
                }}
                className="p-3"
              >
                <div className="flex justify-between items-center">
                      <div className="">
                          <GroupIcon style={{fontSize:30, color:"white"}}/>
                          <h4 className="text-white">Users</h4>
                      </div>
                      <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
                </div>
                </Card.Grid>

               
                <form className="flex justify-start items-center">
                    <input type="search" className="form-control" name="" placeholder="Search user" style={{width:300}}/>
                    <button className="py-1 px-3 text-white bg-primary">Search</button>
                </form>
            </div>

          <div className="my-5">
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </AdminLayout>
    );
}
 
export default UsersPage;